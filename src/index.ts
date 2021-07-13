import { Client } from '@notionhq/client/build/src';
import { format, utcToZonedTime } from 'date-fns-tz';
import dotenv from 'dotenv';

import { flashError, withAsyncHandler } from './cli';
import { queryAll } from './client';
import { MESSAGES, TIME_ZONE as timeZone } from './constants';
import NotionParser from './parser';
import { buildReadmeContent, writeReadmeContent } from './render';
import { escapePipe, transform } from './utils';
import { NotionArticle } from './interfaces';

dotenv.config();

export const notionKey = process.env.NOTION_KEY;
export const databaseId = process.env.DATABASE_ID;

(async () => {
  if (!notionKey) flashError(MESSAGES.NOTION_KEY);
  if (!databaseId) flashError(MESSAGES.DATABASE_ID);

  const notion = new Client({ auth: notionKey });
  const readingList = (
    (
      await withAsyncHandler(queryAll, MESSAGES.QUERY_DB)(notion, {
        database_id: databaseId,
        sorts: [
          {
            property: 'Created Time',
            direction: 'descending',
          },
        ],
      })
    ).map(({ properties: props }) => props) as NotionArticle[]
  )
    .map((props) => transform(props, NotionParser.property))
    .map((props) => transform(props, escapePipe));

  const categories = [
    ...new Set(readingList.map((content) => content.Category)),
  ];

  const categorizedList = categories.map((category) =>
    readingList.filter((article) => category === article.Category),
  );

  const readmeContent = await buildReadmeContent({
    count: Object.keys(readingList).length,
    date: format(utcToZonedTime(new Date(), timeZone), 'yyyy--MM--dd', {
      timeZone,
    }),
    categories,
    categorizedList,
  });

  if (readmeContent) {
    await writeReadmeContent(readmeContent);
  }
})();

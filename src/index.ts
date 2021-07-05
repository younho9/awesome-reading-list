import { Client } from '@notionhq/client/build/src';
import { format } from 'date-fns';
import dotenv from 'dotenv';
import { flashError } from './cli';
import { withAsyncHandler } from './cli/utils/errorHandler';

import { queryAll } from './client';
import { MESSAGES } from './constants';
import NotionParser from './parser';
import { buildReadmeContent, writeReadmeContent } from './render';
import { escapePipe, transform } from './utils';

dotenv.config();

export const notionKey = process.env.NOTION_KEY;
export const databaseId = process.env.DATABASE_ID;

(async () => {
  if (!notionKey) flashError(MESSAGES.NOTION_KEY);
  if (!databaseId) flashError(MESSAGES.DATABASE_ID);

  const notion = new Client({ auth: notionKey });
  const readingList = (
    await withAsyncHandler(MESSAGES.QUERY_DB, queryAll, notion, {
      database_id: databaseId,
      sorts: [
        {
          property: 'Created Time',
          direction: 'descending',
        },
      ],
    })
  )
    .map(({ properties: props }) => props)
    .map((props) => transform(props, NotionParser.property))
    .map((props) => transform(props, escapePipe));

  const readmeContent = await withAsyncHandler(
    MESSAGES.BUILD_README,
    buildReadmeContent,
    {
      count: Object.keys(readingList).length,
      date: format(new Date(), 'yyyy--MM--dd'),
      readingList,
    },
  );

  if (readmeContent) {
    await withAsyncHandler(
      MESSAGES.WRITE_README,
      writeReadmeContent,
      readmeContent,
    );
  }
})();

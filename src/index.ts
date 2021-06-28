import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
import {
  DatabasesQueryParameters,
  DatabasesQueryResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { Page } from '@notionhq/client/build/src/api-types';

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY });
const TO_READ_DB_ID = process.env.TO_READ_DATABASE_ID;
const READ_DB_ID = process.env.READ_DATABASE_ID;

const queryAll = async ({
  start_cursor,
  ...rest
}: DatabasesQueryParameters): Promise<Page[]> => {
  const { has_more, results, next_cursor }: DatabasesQueryResponse =
    await notion.databases.query({
      ...rest,
      start_cursor,
    });

  return has_more
    ? [
        ...results,
        ...(await queryAll({
          ...rest,
          start_cursor: next_cursor ?? undefined,
        })),
      ]
    : results;
};

(async () => {
  if (!TO_READ_DB_ID) return;

  const ToReadList = await queryAll({
    database_id: TO_READ_DB_ID,
    sorts: [
      {
        property: 'Created Time',
        direction: 'descending',
      },
    ],
  });
  console.log(ToReadList.length);
})();

import { Client } from '@notionhq/client/build/src';
import * as NotionEndPoints from '@notionhq/client/build/src/api-endpoints';
import * as NotionTypes from '@notionhq/client/build/src/api-types';

export const queryAll = async (
  notion: Client,
  { start_cursor, ...rest }: NotionEndPoints.DatabasesQueryParameters,
): Promise<NotionTypes.Page[]> => {
  const {
    has_more,
    results,
    next_cursor,
  }: NotionEndPoints.DatabasesQueryResponse = await notion.databases.query({
    ...rest,
    start_cursor,
  });

  return has_more
    ? [
        ...results,
        ...(await queryAll(notion, {
          ...rest,
          start_cursor: next_cursor ?? undefined,
        })),
      ]
    : results;
};

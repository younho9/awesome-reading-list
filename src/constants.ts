export const MESSAGES = {
  NOTION_KEY: 'NOTION_KEY should be defined in .env',
  DATABASE_ID: 'DATABASE_ID should be defined in .env',
  QUERY_DB: {
    loading: 'Quering Notion database',
    succeed: 'Notion database loaded',
    fail: 'Notion database loading failed!',
  },
  GET_TEMPLATE: {
    loading: 'Loading README template',
    succeed: 'README template loaded',
    fail: 'README template loading failed!',
  },
  BUILD_README: {
    loading: 'Building README contents',
    succeed: 'README contents builded',
    fail: 'Failed to build README',
  },
  WRITE_README: {
    loading: 'Creating README locally',
    succeed: 'README created locally',
    fail: 'Failed to create README',
  },
};

export const TIME_ZONE = 'Asia/Seoul';

const {writeFile, readFile} = require('node:fs/promises');
const path = require('node:path');
const process = require('node:process');
const NarkdownClient = require('@narkdown/client').default;
const NotionParser = require('@narkdown/notion-parser').default;
const ejs = require('ejs');
const dotenv = require('dotenv');

dotenv.config();

const notionKey = process.env.NOTION_KEY;
const databaseId = process.env.DATABASE_ID;

const today = new Date();
const propertyOptions = {
  date: {
    locales: 'ko-KR',
  },
};

(async () => {
  const narkdown = new NarkdownClient({auth: notionKey});
  const notionParser = new NotionParser({propertyOptions});
  const {results} = await narkdown.unlimited.databases.queryAll({
    database_id: databaseId,
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
  });
  const rows = notionParser.database.getRows(results);
  const categories = [...new Set(rows.map((content) => content.Category))];
  const categorizedLists = categories.map((category) =>
    rows.filter((article) => category === article.Category),
  );
  const template = await readFile(
    path.resolve(__dirname, './template.md'),
    'utf8',
  );

  await writeFile(
    'README.md',
    ejs.render(template, {
      count: Object.keys(rows).length,
      date: `${today.getFullYear()}--${today.getMonth() + 1}--${today.getDate()}`, // prettier-ignore
      categories,
      categorizedLists,
    }),
  );
})();

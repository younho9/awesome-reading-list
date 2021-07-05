import ejs, { Data } from 'ejs';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

import { withAsyncHandler } from './cli';
import { MESSAGES } from './constants';

// Read the template from markdown file
export const getReadmeTemplate = async () =>
  await readFile(
    path.resolve(__dirname, './templates', './reading-list.md'),
    'utf8',
  );

// Render out readme content
export const buildReadmeContent = async (context: Data) => {
  const template = await withAsyncHandler(
    MESSAGES.GET_TEMPLATE,
    getReadmeTemplate,
  );

  if (template) return ejs.render(template, context);
};

// Write content to README.md
export const writeReadmeContent = async (readmeContent: string) =>
  await writeFile('README.md', readmeContent);

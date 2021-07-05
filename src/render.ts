import ejs, { Data } from 'ejs';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

import { withAsyncHandler } from './cli';
import { MESSAGES } from './constants';
import { isString } from './utils';

// Read the template from markdown file
export const getReadmeTemplate = async () =>
  await withAsyncHandler(readFile, MESSAGES.GET_TEMPLATE)(
    path.resolve(__dirname, './templates', './reading-list.md'),
    'utf8',
  );

// Render out readme content
export const buildReadmeContent = async (context: Data) => {
  const template = await withAsyncHandler(
    getReadmeTemplate,
    MESSAGES.BUILD_README,
  )();

  if (template && isString(template)) return ejs.render(template, context);
};

// Write content to README.md
export const writeReadmeContent = async (readmeContent: string) =>
  await withAsyncHandler(writeFile, MESSAGES.WRITE_README)(
    'README.md',
    readmeContent,
  );

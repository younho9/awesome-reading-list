import chalk from 'chalk';

/**
 *  Display Validation Errors
 */
export const flashError: (message: string) => never = (message: string) => {
  console.error(chalk.bold.red(`✖ ${message}`));
  return process.exit(1);
};

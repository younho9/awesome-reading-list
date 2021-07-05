import { flashError } from './message';
import Spinner from './Spinner';

export const withAsyncHandler = async <T extends unknown>(
  messageContext: {
    loading: string;
    succeed: string;
    fail: string;
  },
  fn: (...args: any[]) => Promise<T>,
  ...args: any[]
) => {
  const spinner = new Spinner(messageContext.loading);
  spinner.start();

  try {
    const result = await fn(...args);

    spinner.succeed(messageContext.succeed);

    return result;
  } catch (err) {
    spinner.fail(messageContext.fail);
    flashError(err);
  } finally {
    spinner.stop();
  }
};

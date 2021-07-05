import { flashError } from './message';
import Spinner from './Spinner';

export const withAsyncHandler =
  <T extends unknown>(
    fn: (...args: any[]) => Promise<T>,
    messageContext: {
      loading: string;
      succeed: string;
      fail: string;
    },
  ) =>
  async (...args: any[]) => {
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

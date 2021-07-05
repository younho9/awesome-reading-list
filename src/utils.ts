export const transform = (
  obj: { [key in string]: unknown },
  fn: (...args: any[]) => void,
) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, fn(value)]),
  );

export const escapePipe = (str: string) => str.replace(/\|/g, '\\|');

export const isString = (x: any): x is string => typeof x === 'string';

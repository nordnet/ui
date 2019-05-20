import * as R from 'ramda';

export const assert = (
  expression: boolean,
  errorMessage: string,
  options?: { level?: 'warn' },
): true => {
  if (process.env.NODE_ENV !== 'production') {
    if (!expression) {
      if (options && options.level === 'warn') {
        // eslint-disable-next-line no-console
        console.warn(errorMessage);
      } else {
        throw new Error(errorMessage);
      }
    }
  }
  // For chaining with &&
  return true;
};

export const isUndefined = (x: any): x is undefined => typeof x === 'undefined';

export const pickAriaAttributes = R.pickBy((_, key: string) => R.test(/^aria-/, key));

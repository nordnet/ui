export const assert = (
  expression: boolean,
  errorMessage: string,
  options?: { level?: 'warn' },
): true => {
  if (process.env.NODE_ENV !== 'production') {
    if (!expression) {
      if (options && options.level === 'warn') {
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

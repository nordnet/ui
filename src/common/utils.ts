export const assert = (expression: boolean, errorMessage: string) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!expression) {
      throw new Error(errorMessage);
    }
  }
};

import { Props } from './FormattedNumber.types';

/** True if error is non-empty string */
export const hasError = (error?: Props['error']): boolean | undefined =>
  error === undefined ? undefined : error.length > 0;

import { Props } from './FormattedNumber.types';

/** True if error is non-empty string */
export const hasError = (error?: Props['error']): boolean | undefined => {
  if (error === undefined) {
    return undefined;
  }
  const hasErrorMessage = error.length > 0;
  return hasErrorMessage;
};

export const getNumberOfDecimals = (value: number): number => {
  const valueString = value.toString();
  const [, decimalPart] = valueString.split('.');
  if (decimalPart === undefined) {
    return 0;
  }
  return decimalPart.length;
};

import { IntlShape } from 'react-intl';

const isNumeric = (n: any) => Number.isFinite(n);

export const getNumberAsString = (value?: any) => {
  if (isNumeric(value)) {
    return value.toString();
  }
  if (typeof value === 'string' && isNumeric(Number.parseFloat(value))) {
    return value;
  }

  return '';
};

export const getStringAsNumber = (value: any = '') => {
  const valueStr = getNumberAsString(value);
  return Number(valueStr.replace(',', '.'));
};

/** Retrieves locale specific decimal sign */
const getDecimalSign = (intl: IntlShape): string => intl.formatNumberToParts(0.1)[1].value;

/** Retrieves locale specific thousand separator sign */
export const getThousandsSeparator = (intl: IntlShape): string =>
  intl.formatNumberToParts(1000)[1].value;

/**
 * Retrieves the locale specific minus sign.
 * Certain locales, such as sv-SE, may have a different minus signs.
 */
const getMinusSign = (intl: IntlShape): string => intl.formatNumberToParts(-1)[0].value;

export const getLocaleStringAsNumber = (
  value: string,
  previousValue: string,
  intl: IntlShape,
): string => {
  const decimalSign = getDecimalSign(intl);
  const minusSign = getMinusSign(intl);

  /**
   * Sanitizes the 'value' by stripping non-numeric and special characters, and standardizes decimal and minus signs.
   * Note: This can be modified to include numbers from other locales or additional characters as needed.
   */
  const result = value
    .replace(new RegExp(`[^${minusSign}${decimalSign}\\d-]`, 'g'), '')
    .replace(decimalSign, '.')
    .replace(minusSign, '-');

  if (result !== '-' && !isNumeric(+result)) return previousValue;

  return result;
};

export const getNumberAsLocaleString = (value: string, intl: IntlShape): string => {
  if (value === '' || value === '-') return value;

  const splitValue = value.split('.');
  const [integerNumberPart, decimalNumberPart] = splitValue;

  return splitValue.length > 1
    ? intl.formatNumber(+integerNumberPart) + getDecimalSign(intl) + decimalNumberPart
    : intl.formatNumber(+value);
};

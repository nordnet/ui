import React from 'react';
import { IntlShape } from 'react-intl';
import { InputValue } from './FormattedInput.types';

const escapeStringRegexp = (s: string) =>
  s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');

export const getDecimalSign = (intl: IntlShape): string => intl.formatNumberToParts(0.1)[1].value;

/** Retrieves locale specific thousand separator sign */
export const getThousandsSeparator = (intl: IntlShape): string =>
  intl.formatNumberToParts(1000)[1].value;

/**
 * Retrieves the locale specific minus sign.
 * Certain locales, such as sv-SE, may have a different minus signs.
 */
export const getMinusSign = (intl: IntlShape): string => intl.formatNumberToParts(-1)[0].value;

export const formatNumber = (
  value: number,
  intl: IntlShape,
  minimumFractionDigits = 0,
  maximumFractionDigits = 20,
) => intl.formatNumber(value, { minimumFractionDigits, maximumFractionDigits });

const getSanitizedValue = (inputValue: string, replaceValue: string, intl: IntlShape) => {
  const decimalSign = getDecimalSign(intl);
  const minusSign = getMinusSign(intl);

  const acceptDotAsDecimalSign = getThousandsSeparator(intl) !== '.' ? '.' : '';
  const nonNumericRegExp = new RegExp(
    `[^${minusSign}${decimalSign}\\d-${acceptDotAsDecimalSign}]`,
    'g',
  );
  const replaceDecimalRegExp = new RegExp(escapeStringRegexp(decimalSign), 'g');
  const replaceMinusSignRegExp = new RegExp(escapeStringRegexp(minusSign), 'g');

  const numericValue = inputValue.replace(nonNumericRegExp, replaceValue);

  const delocalizedValue = numericValue
    .replace(replaceDecimalRegExp, '.') // replace localized decimalSign
    .replace(replaceMinusSignRegExp, '-'); // replace localized minusSign

  const isNegative = delocalizedValue.startsWith('-');
  const withoutMinus = delocalizedValue.replace(/^-/, '').replace(/-/g, replaceValue); // remove minusSign
  const sanitizedValue = withoutMinus.replace(/^\./, '0.'); // prepend 0 when integer part is missing for decimal

  return isNegative ? `-${sanitizedValue}` : sanitizedValue;
};

const formatWithLeadingZeros = (integerPart: string, intl: IntlShape) => {
  const isNegative = integerPart.startsWith('-');
  const positiveIntegerPart = integerPart.replace('-', '');

  const oneAdded = positiveIntegerPart.replace(/^0/, '10');
  const oneAddedParsed = Number(oneAdded);
  const oneAddedFormatted = formatNumber(oneAddedParsed, intl);

  const minusSign = getMinusSign(intl);
  const formattedWithLeadingZeros = oneAddedFormatted.replace(/^1/, '');
  return isNegative ? minusSign + formattedWithLeadingZeros : formattedWithLeadingZeros;
};

export const parseInputValue = (
  previousValue: number | null,
  previousFormattedValue: string,
  inputValue: string,
  intl: IntlShape,
): { value: number | null; formattedValue: string } => {
  const decimalSign = getDecimalSign(intl);
  const minusSign = getMinusSign(intl);

  const sanitizedValue = getSanitizedValue(inputValue, '', intl);

  const hasMultipleDecimals = sanitizedValue.split('.').length > 2;

  if (hasMultipleDecimals) {
    return { value: previousValue, formattedValue: previousFormattedValue };
  }

  if (sanitizedValue === '') {
    return { value: null, formattedValue: '' };
  }

  if (sanitizedValue === '-') {
    return { value: null, formattedValue: minusSign };
  }

  const hasLeadingZeros = /^((-0)|0)/g.test(sanitizedValue);
  const [integerPart, decimalPartOriginal] = sanitizedValue.split('.');
  const decimalPart = decimalPartOriginal.substring(0, max);

  const integerPartParsed = Number(integerPart);
  const formattedIntegerPart = hasLeadingZeros
    ? formatWithLeadingZeros(integerPart, intl)
    : formatNumber(integerPartParsed, intl);

  if (sanitizedValue.endsWith('.')) {
    const formattedWithDecimal = formattedIntegerPart + decimalSign;
    return { value: integerPartParsed, formattedValue: formattedWithDecimal };
  }

  return {
    value: Number(sanitizedValue),
    formattedValue: formattedIntegerPart + (decimalPart ? `${decimalSign}${decimalPart}` : ''),
  };
};

const findNthDigitIndex = (str: string, num: number, regExp: RegExp) => {
  let digitCount = 0;
  let i = 0;
  for (; i < str.length && digitCount !== num; i += 1) {
    if (regExp.test(str[i])) {
      digitCount += 1;
    }
  }
  return i - 1;
};

export const calculateCaretPosition = (
  inputValue: InputValue,
  previousFormattedValue: string,
  caretPosition: number | null,
  intl: IntlShape,
) => {
  if (caretPosition === null) return inputValue.formattedValue.length;
  const sanitizedValue = getSanitizedValue(inputValue.value, '_', intl);

  const hasMultipleDecimals = sanitizedValue.split('.').length > 2;
  if (hasMultipleDecimals) {
    const decimalSign = getDecimalSign(intl);
    return previousFormattedValue.indexOf(decimalSign) + 1;
  }

  const beforeCaret = sanitizedValue.substring(0, caretPosition);

  const allowedSymbolsRegExp = /[^-.\d]/g;
  const numberOfAllowedSymbolsBeforeCaret = beforeCaret.replace(allowedSymbolsRegExp, '').length;

  const isAllowedSymbolRegExp = /-|\.|\d/;
  const indexOfLastDigit = findNthDigitIndex(
    getSanitizedValue(inputValue.formattedValue, '_', intl),
    numberOfAllowedSymbolsBeforeCaret,
    isAllowedSymbolRegExp,
  );

  return indexOfLastDigit + 1;
};

export const handleThousandSeparatorRemoval = (
  e: React.KeyboardEvent<HTMLInputElement>,
  intl: IntlShape,
) => {
  const el = e.target as HTMLInputElement;
  const { key } = e;
  const { selectionStart, selectionEnd, value = '' } = el;
  const thousandSeparator = getThousandsSeparator(intl);

  if (selectionStart === null || selectionStart !== selectionEnd) {
    return;
  }

  const shiftLeft = selectionStart - 1;
  if (key === 'Backspace' && value[selectionStart - 1] === thousandSeparator) {
    el.setSelectionRange(shiftLeft, shiftLeft);
  }

  const shiftRight = selectionStart + 1;
  if (key === 'Delete' && value[selectionStart] === thousandSeparator) {
    el.setSelectionRange(shiftRight, shiftRight);
  }
};

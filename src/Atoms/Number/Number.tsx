import React from 'react';
import { injectIntl } from 'react-intl';
import { NumberComponent as NumberComponentType } from './Number.types';

const getPrefix = (sign: boolean, value?: number | null) =>
  sign && !!value && value > 0 ? '+' : '';

const getNumberOptions = (decimals?: number) =>
  typeof decimals === 'undefined'
    ? {}
    : {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      };

const NumberComponent: NumberComponentType = ({
  intl,
  value,
  decimals,
  percentage = false,
  currency,
  sign = false,
}) => {
  if (typeof value === 'undefined' || value === null || !Number.isFinite(value)) return <>-</>;
  if (typeof currency !== 'undefined' && currency === null) return <>-</>;

  return (
    <>
      {getPrefix(sign, value)}
      {intl.formatNumber(value, getNumberOptions(decimals))}
      {percentage && '%'}
      {currency && ` ${currency}`}
    </>
  );
};

export default injectIntl(NumberComponent);

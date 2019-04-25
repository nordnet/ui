import React from 'react';
import { CurrencyComponent } from './Currency.types';
import { Number as NumberComponent } from '../..';

const getPrefix = (value?: number | null, sign?: boolean) => {
  if (sign && !!value && value > 0) {
    return '+';
  }

  return '';
};

export const Currency: CurrencyComponent = ({
  value,
  decimals,
  currency,
  sign,
}) => value && Number.isFinite(value) ? (
  <>{getPrefix(value, sign)}<NumberComponent value={value} decimals={decimals} />{' '}{currency}</>
) : <>-</>;

Currency.displayName = 'Currency';

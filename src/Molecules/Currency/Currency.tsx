import React from 'react';
import { CurrencyComponent } from './Currency.types';
import {Number} from '../..';

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
}) => (
  <>{getPrefix(value, sign)}<Number value={value} decimals={decimals} />{' '}{currency}</>
);

Currency.displayName = 'Currency';

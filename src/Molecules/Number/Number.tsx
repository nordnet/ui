import React from 'react';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import * as R from 'ramda';
import { NumberComponent as NumberComponentType, Props, Ticks } from './Number.types';
import { assert } from '../../common/utils';
import { Typography, VisuallyHidden } from '../..';

const getPrefix = (sign: boolean, value: number) => (sign && value > 0 ? '+' : '');

const getTickDecimals = (value: number, ticks: Ticks) => {
  if (process.env.NODE_ENV !== 'production') {
    // @ts-ignore
    const wrongTick = ticks.find(R.or(R.has('from_price'), R.has('to_price')));
    assert(!wrongTick, `Found ticks with snake cased keys, they should be camelcased.`);
  }
  const tick = ticks.find(t => value >= t.fromPrice && value < t.toPrice + (t.tick || 0));

  return tick ? tick.decimals : undefined;
};

type Options = {
  ticks?: Ticks;
  decimals?: number;
  minimumDecimals?: number;
  maximumDecimals?: number;
};

const getNumberOptions = (
  value: number,
  { ticks, decimals, maximumDecimals, minimumDecimals }: Options,
) => {
  if (typeof ticks !== 'undefined') {
    const tick = getTickDecimals(value, ticks);
    return {
      maximumFractionDigits: tick,
      minimumFractionDigits: tick,
    };
  }
  if (typeof decimals !== 'undefined') {
    return {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    };
  }
  if (typeof maximumDecimals !== 'undefined' || typeof minimumDecimals !== 'undefined') {
    return {
      maximumFractionDigits: maximumDecimals,
      minimumFractionDigits: minimumDecimals,
    };
  }

  return {};
};

const getDecimalsFromMinMax = (
  value: number,
  maximumDecimals: number = Number.MAX_VALUE,
  minimumDecimals: number = 0,
) => {
  const splitted = value.toString().split('.');
  const decimals = splitted && splitted[1] ? splitted[1].length : 0;
  if (decimals <= minimumDecimals) return minimumDecimals;
  if (decimals >= maximumDecimals) return maximumDecimals;
  return decimals;
};

export const getRoundedValue = (
  value: number,
  { ticks, decimals, maximumDecimals, minimumDecimals }: Options,
) => {
  let numberOfSignificantDigits = null;
  if (typeof decimals !== 'undefined') numberOfSignificantDigits = decimals;
  if (typeof ticks !== 'undefined') numberOfSignificantDigits = getTickDecimals(value, ticks);
  if (typeof maximumDecimals !== 'undefined' || typeof minimumDecimals !== 'undefined')
    numberOfSignificantDigits = getDecimalsFromMinMax(value, maximumDecimals, minimumDecimals);
  if (numberOfSignificantDigits === null) return value;
  return numberOfSignificantDigits === 0 ? Math.round(value) : +Number(value).toPrecision(numberOfSignificantDigits);
};

const TypographyWithInheritedWeight = styled(Typography)`
  font-weight: inherit;
`;

const NumberComponent: NumberComponentType = ({
  intl,
  value,
  decimals,
  minimumDecimals,
  maximumDecimals,
  ticks,
  percentage = false,
  currency,
  currencySize,
  sign = false,
}) => {
  if (typeof value === 'undefined' || value === null || !Number.isFinite(value)) return <>-</>;
  if (typeof currency !== 'undefined' && currency === null) return <>-</>;

  const roundedValue = getRoundedValue(value, {
    ticks,
    decimals,
    minimumDecimals,
    maximumDecimals,
  });
  const formattedNumber = intl.formatNumber(
    value,
    getNumberOptions(value, { ticks, decimals, minimumDecimals, maximumDecimals }),
  );

  // This is shockingly the easiest way to check for -0, since Math.sign(-0) === -0 🤷‍
  const isMinusZero = (val: number) => 1 / val === -Infinity;
  const number = (
    <>
      {getPrefix(sign, roundedValue)}
      {isMinusZero(roundedValue) ? '0' : formattedNumber}
      {percentage && '%'}
      {currency && typeof currencySize === 'undefined' && ` ${currency}`}
    </>
  );
  if (typeof currencySize === 'undefined') return number;
  return (
    <>
      <VisuallyHidden>
        {number}
        {` ${currency}`}
      </VisuallyHidden>
      <span aria-hidden>
        {number}{' '}
        <TypographyWithInheritedWeight type={currencySize}>
          {currency}
        </TypographyWithInheritedWeight>
      </span>
    </>
  );
};
export const InjectedNumber = (injectIntl(NumberComponent) as any) as React.FC<Props>;

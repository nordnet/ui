import * as R from 'ramda';
import { adjustValueProps } from './Number.types';

const getNumberOfDecimals = R.pipe(
  R.toString,
  R.split('.'),
  R.nth(1),
  R.ifElse(R.isNil, R.always(0), R.length),
);

const adjustValue = ({
  originalValue,
  step,
  shouldIncrement,
  intl,
  min = -Infinity,
  max = Infinity,
}: adjustValueProps) => {
  const numberOfDecimals = getNumberOfDecimals(step);
  const multiplier = 10 ** numberOfDecimals; // 10^decimals
  const stepCents = multiplier * step;

  const getAdjustedValueCents = () => {
    const valueCents = Math.round(originalValue * multiplier);
    const reminder = valueCents % stepCents;

    if (reminder === 0) {
      return valueCents;
    }

    if (shouldIncrement) {
      // nearest number divisible by `stepCents` lower than `cents`
      return valueCents - reminder;
    }
    // nearest number divisible by `stepCents` greater than `cents`
    return valueCents + stepCents - reminder;
  };

  const adjustedValueCents = getAdjustedValueCents();

  const getAdjustedValue = (price: number) => {
    let adjustedPrice = shouldIncrement
      ? (price + stepCents) / multiplier
      : (price - stepCents) / multiplier;

    if (adjustedPrice < min) {
      adjustedPrice = min;
    }

    if (adjustedPrice > max) {
      adjustedPrice = max;
    }

    return intl.formatNumber(adjustedPrice, {
      minimumFractionDigits: numberOfDecimals,
      maximumFractionDigits: numberOfDecimals,
      useGrouping: false,
    });
  };

  return getAdjustedValue(adjustedValueCents);
};

export default adjustValue;

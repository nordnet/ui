import * as R from 'ramda';
import { adjustValueProps } from './FormattedNumber.types';

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
  min = -Infinity,
  max = Infinity,
}: adjustValueProps): number => {
  const originalValueOrZero = originalValue === null ? 0 : originalValue;
  const numberOfDecimals = getNumberOfDecimals(step);
  const multiplier = 10 ** numberOfDecimals; // 10^decimals
  const stepCents = multiplier * step;

  const getAdjustedValueCents = () => {
    const valueCents = Math.round(originalValueOrZero * multiplier);
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

  const getAdjustedValue = (value: number) => {
    let adjustedPrice = shouldIncrement
      ? (value + stepCents) / multiplier
      : (value - stepCents) / multiplier;

    if (adjustedPrice < min) {
      adjustedPrice = min;
    }

    if (adjustedPrice > max) {
      adjustedPrice = max;
    }

    return adjustedPrice;
  };

  return getAdjustedValue(adjustedValueCents);
};

export default adjustValue;

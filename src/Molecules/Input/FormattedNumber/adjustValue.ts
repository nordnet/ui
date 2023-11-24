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

  const getAdjustedValue = R.pipe(
    R.ifElse(
      () => shouldIncrement,
      (price) => (price + stepCents) / multiplier,
      (price) => (price - stepCents) / multiplier,
    ),
    R.when((price) => price < min, R.always(min)),
    R.when((price) => price > max, R.always(max)),
  );

  return getAdjustedValue(adjustedValueCents);
};

export default adjustValue;

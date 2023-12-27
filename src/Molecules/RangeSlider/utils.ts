export const clamp = (val: number, min: number, max: number) => {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
};

export const getDecimalPrecision = (num: number) => {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
};

export const roundValueToStep = (value: number, step: number, oldValue: number) => {
  const nearest = Math.round((value - oldValue) / step) * step + oldValue;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
};

export const percentToValue = (percent: number, min: number, max: number) => {
  return (max - min) * percent + min;
};

export const valueToPercent = (value: number, min: number, max: number) => {
  const percent = ((value - min) * 100) / (max - min);

  if (percent < 0) {
    return 0;
  }
  if (percent > 100) {
    return 100;
  }

  return percent;
};

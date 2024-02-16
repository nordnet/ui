import { getNumberOfDecimals } from './utils';

describe('getNumberOfDecimals', () => {
  it('returns 0 for integers', () => {
    expect(getNumberOfDecimals(123)).toEqual(0);
  });

  it('returns correct number of decimals for floating point numbers', () => {
    expect(getNumberOfDecimals(123.456)).toEqual(3);
  });

  it('returns 0 for numbers without a fractional part', () => {
    expect(getNumberOfDecimals(123.0)).toEqual(0);
  });

  it('handles negative numbers correctly', () => {
    expect(getNumberOfDecimals(-123.456)).toEqual(3);
  });

  it('returns 0 for non-numeric strings', () => {
    // @ts-expect-error
    expect(getNumberOfDecimals('not a number')).toEqual(0);
  });

  it('handles zero correctly', () => {
    expect(getNumberOfDecimals(0)).toEqual(0);
  });

  it('handles very small numbers correctly', () => {
    expect(getNumberOfDecimals(0.000001)).toEqual(6);
  });

  it('handles numbers in exponential notation correctly', () => {
    expect(getNumberOfDecimals(1e-6)).toEqual(6);
  });
});

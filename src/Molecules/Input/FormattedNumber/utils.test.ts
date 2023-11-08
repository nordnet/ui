import { createIntl, IntlShape } from 'react-intl';
import {
  getLocaleStringAsNumber,
  getNumberAsLocaleString,
  getNumberAsString,
  getStringAsNumber,
  getThousandsSeparator,
} from './utils';

describe('getNumberAsString', () => {
  test('int to string', () => {
    const result = getNumberAsString(10);
    expect(result).toEqual('10');
  });

  test('float to string', () => {
    const result = getNumberAsString(10.25);
    expect(result).toEqual('10.25');
  });

  test('string to string', () => {
    const result = getNumberAsString('10.25');
    expect(result).toEqual('10.25');
  });

  test('string to string, preserve decimal separator', () => {
    const result = getNumberAsString('10,25');
    expect(result).toEqual('10,25');
  });

  test('empty', () => {
    const result = getNumberAsString('');
    expect(result).toEqual('');
  });

  test('not a number', () => {
    const result = getNumberAsString(false);
    expect(result).toEqual('');
  });
});

describe('getStringAsNumber', () => {
  test('string to int', () => {
    const result = getStringAsNumber('10');
    expect(result).toEqual(10);
  });

  test('string to float', () => {
    const result = getStringAsNumber('10.25');
    expect(result).toEqual(10.25);
  });

  test('int to int', () => {
    const result = getStringAsNumber(10);
    expect(result).toEqual(10);
  });

  test('float to float', () => {
    const result = getStringAsNumber(10.25);
    expect(result).toEqual(10.25);
  });

  test('empty string', () => {
    const result = getStringAsNumber('');
    expect(result).toEqual(0);
  });

  test('not a number', () => {
    const result = getStringAsNumber(false);
    expect(result).toEqual(0);
  });
});

const intl = createIntl({ locale: 'sv-SE' });

describe('getLocaleStringAsNumber', () => {
  test('should transform decimal sign', () => {
    const value = '1 000,123';
    const previousValue = '123';
    const result = getLocaleStringAsNumber(value, previousValue, intl as unknown as IntlShape);
    expect(result).toBe('1000.123');
  });

  test('should transform negative number', () => {
    const value = '-1 000,123';
    const previousValue = '';
    const result = getLocaleStringAsNumber(value, previousValue, intl as unknown as IntlShape);
    expect(result).toBe('-1000.123');
  });

  test('should use previous value if there are multiple decimal signs', () => {
    const value = '1,000,123';
    const previousValue = '999.123';
    const result = getLocaleStringAsNumber(value, previousValue, intl as unknown as IntlShape);
    expect(result).toBe(previousValue);
  });

  test('should use previous value if there are incorrect minus signs', () => {
    const value = '1,000-123';
    const previousValue = '999.123';
    const result = getLocaleStringAsNumber(value, previousValue, intl as unknown as IntlShape);
    expect(result).toBe(previousValue);
  });

  test('should ignore non-valid characters', () => {
    const value = 'a1.00z0z,x1b23';
    const previousValue = '1000.123';
    const result = getLocaleStringAsNumber(value, previousValue, intl as unknown as IntlShape);
    expect(result).toBe(previousValue);
  });
});

describe('getNumberAsLocaleString', () => {
  test('should return minus if only minus sign is provided', () => {
    const result = getNumberAsLocaleString('-', intl);
    expect(result).toBe('-');
  });

  test('should format a number with a Swedish locale decimal sign', () => {
    const value = '-123.45';
    const result = getNumberAsLocaleString(value, intl);
    expect(result).toBe('−123,45');
  });
});

describe('getThousandsSeparator', () => {
  test('should return the thousands separator', () => {
    const result = getThousandsSeparator(intl);
    expect(result).toBe(' ');
  });
});

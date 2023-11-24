import adjustValue from './adjustValue';

describe('adjustValue', () => {
  test('step up int by int', () => {
    const result = adjustValue({
      originalValue: 10,
      step: 1,
      shouldIncrement: true,
    });

    expect(result).toEqual(11);
  });

  test('step up int by float', () => {
    const result = adjustValue({
      originalValue: 10,
      step: 0.5,
      shouldIncrement: true,
    });

    expect(result).toEqual(10.5);
  });

  test('step up float by float', () => {
    const result = adjustValue({
      originalValue: 50.025,
      step: 0.025,
      shouldIncrement: true,
    });

    expect(result).toEqual(50.05);
  });

  test('step down int by int', () => {
    const result = adjustValue({
      originalValue: 5020,
      step: 2,
      shouldIncrement: false,
    });

    expect(result).toEqual(5018);
  });

  test('step down int by float', () => {
    const result = adjustValue({
      originalValue: 24,
      step: 0.5,
      shouldIncrement: false,
    });

    expect(result).toEqual(23.5);
  });

  test('step down float by float', () => {
    const result = adjustValue({
      originalValue: 24.5,
      step: 0.1,
      shouldIncrement: false,
    });

    expect(result).toEqual(24.4);
  });

  test('step up float by adjusted float', () => {
    const result = adjustValue({
      originalValue: 416.54,
      step: 0.05,
      shouldIncrement: true,
    });

    expect(result).toEqual(416.55);
  });

  test('step down float by adjusted float', () => {
    const result = adjustValue({
      originalValue: 393.67,
      step: 0.25,
      shouldIncrement: false,
    });

    expect(result).toEqual(393.5);
  });

  test('step down but not below min', () => {
    const result = adjustValue({
      originalValue: 10,
      step: 1,
      min: 0,
      shouldIncrement: false,
    });

    expect(result).toEqual(9);
  });

  test('step down below min', () => {
    const result = adjustValue({
      originalValue: 5,
      step: 1,
      min: 5,
      shouldIncrement: false,
    });

    expect(result).toEqual(5);
  });

  test('step up but not over max', () => {
    const result = adjustValue({
      originalValue: 10,
      step: 1,
      max: 20,
      shouldIncrement: true,
    });

    expect(result).toEqual(11);
  });

  test('step up over max', () => {
    const result = adjustValue({
      originalValue: 10,
      step: 1,
      max: 10,
      shouldIncrement: true,
    });

    expect(result).toEqual(10);
  });

  test('increment and originalValue is null', () => {
    const result = adjustValue({
      originalValue: null,
      step: 1,
      shouldIncrement: true,
    });

    expect(result).toEqual(1);
  });

  test('decrement and originalValue is null', () => {
    const result = adjustValue({
      originalValue: null,
      step: 1,
      shouldIncrement: false,
    });

    expect(result).toEqual(-1);
  });

  test('max set and originalValue is null', () => {
    const result = adjustValue({
      originalValue: null,
      step: 1,
      max: -5,
      shouldIncrement: true,
    });

    expect(result).toEqual(-5);
  });

  test('min set and originalValue is null', () => {
    const result = adjustValue({
      originalValue: null,
      step: 1,
      min: 5,
      shouldIncrement: false,
    });

    expect(result).toEqual(5);
  });
});

import React, { FC, ReactNode, useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../../../theme';
import FormattedInput from './FormattedInput';
import { Props } from './FormattedInput.types';

describe('FormattedInput', () => {
  const regularMinusSign = '\u2212'; // regular minus sign "−"
  const hyphenMinusSign = '\u002D'; // regular hyphen-minus sign "-"

  const LOCALES = [
    { locale: 'sv-SE', decimalSign: ',', thousandSeparator: ' ', minusSign: regularMinusSign },
    { locale: 'da-DK', decimalSign: ',', thousandSeparator: '.', minusSign: hyphenMinusSign },
    { locale: 'fi-FI', decimalSign: ',', thousandSeparator: ' ', minusSign: regularMinusSign },
    { locale: 'nb-NO', decimalSign: ',', thousandSeparator: ' ', minusSign: regularMinusSign },
    { locale: 'en-GB', decimalSign: '.', thousandSeparator: ',', minusSign: hyphenMinusSign },
  ];
  const createWrapper =
    (locale: string) =>
    ({ children }: { children: ReactNode }) => (
      <IntlProvider locale={locale}>
        <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
      </IntlProvider>
    );

  const TestComponent: FC<
    {
      defaultValue?: number | null;
    } & Partial<Props>
  > = ({ defaultValue = null, minimumDecimals, maximumDecimals }) => {
    const [value, setValue] = useState(defaultValue);
    return (
      <>
        <FormattedInput
          value={value}
          onChange={setValue}
          minimumDecimals={minimumDecimals}
          maximumDecimals={maximumDecimals}
        />
        <span data-testid="test-float-value">{value}</span>
      </>
    );
  };

  test.each(LOCALES)(
    'accepts decimalSign "$decimalSign" for locale $locale',
    async ({ locale, decimalSign }) => {
      render(<TestComponent />, {
        wrapper: createWrapper(locale),
      });
      const input = screen.getByRole('textbox');
      await userEvent.type(input, '1');
      expect(input).toHaveValue('1');
      await userEvent.type(input, decimalSign);
      expect(input).toHaveValue(`1${decimalSign}`);
      await userEvent.type(input, '2');
      expect(input).toHaveValue(`1${decimalSign}2`);
    },
  );

  test.each(LOCALES)(
    'should not allow another decimal ($decimalSign) if it already exists, for locale $locale',
    async ({ locale, decimalSign }) => {
      render(<TestComponent />, {
        wrapper: createWrapper(locale),
      });
      const input = screen.getByRole('textbox') as HTMLInputElement;
      await userEvent.type(input, `10${decimalSign}`);
      expect(input).toHaveValue(`10${decimalSign}`);
      await userEvent.type(input, decimalSign);
      expect(input).toHaveValue(`10${decimalSign}`);
      await userEvent.type(input, '2');
      expect(input).toHaveValue(`10${decimalSign}2`);
      await userEvent.type(input, decimalSign);
      expect(input).toHaveValue(`10${decimalSign}2`);
      await userEvent.keyboard(`[ArrowLeft][ArrowLeft][ArrowLeft]${decimalSign}`);
      expect(input).toHaveValue(`10${decimalSign}2`);
      expect(input.selectionStart).toBe(3); // caret should be placed after decimal sign "10,|2"
    },
  );

  test.each([
    { locale: 'sv-SE', decimalSign: ',' },
    { locale: 'fi-FI', decimalSign: ',' },
    { locale: 'nb-NO', decimalSign: ',' },
  ])('also accepts "." as decimal sign for locale $locale', async ({ locale, decimalSign }) => {
    render(<TestComponent />, {
      wrapper: createWrapper(locale),
    });
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '1');
    expect(input).toHaveValue('1');
    await userEvent.type(input, '.');
    expect(input).toHaveValue(`1${decimalSign}`);
    await userEvent.type(input, '2');
    expect(input).toHaveValue(`1${decimalSign}2`);
  });

  test('should not accept "." as decimal if it is used as thousand separator (da-DK)', async () => {
    render(<TestComponent />, {
      wrapper: createWrapper('da-DK'),
    });
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '1');
    expect(input).toHaveValue('1');
    await userEvent.type(input, '.');
    expect(input).toHaveValue('1');
  });

  test.each(LOCALES)(
    'adds thousand separator "$thousandSeparator" for locale $locale',
    async ({ locale, thousandSeparator }) => {
      render(<TestComponent />, {
        wrapper: createWrapper(locale),
      });
      const input = screen.getByRole('textbox');
      await userEvent.type(input, '999');
      expect(input).toHaveValue('999');
      await userEvent.type(input, '9');
      expect(input).toHaveValue(`9${thousandSeparator}999`);
    },
  );

  test.each(LOCALES)(
    'handles "Delete" press for locale $locale',
    async ({ locale, thousandSeparator }) => {
      render(<TestComponent />, {
        wrapper: createWrapper(locale),
      });

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await userEvent.type(input, '123456789');
      expect(input).toHaveValue(`123${thousandSeparator}456${thousandSeparator}789`);

      input.setSelectionRange(7, 7); // place caret before thousand separator "123 456| 789"
      await userEvent.keyboard(`[Delete]`);
      expect(input).toHaveValue(`12${thousandSeparator}345${thousandSeparator}689`);
      expect(input.selectionStart).toBe(8); // caret should be placed before 8 "...6|89"

      input.setSelectionRange(7, 7); // place caret after thousand separator "12 345 |689"
      await userEvent.keyboard(`[Delete]`);
      expect(input).toHaveValue(`1${thousandSeparator}234${thousandSeparator}589`);
      expect(input.selectionStart).toBe(7); // caret should be placed before 8 "...5|89"

      await userEvent.keyboard(`[Delete]`);
      expect(input).toHaveValue(`123${thousandSeparator}459`);
      expect(input.selectionStart).toBe(6); // caret should be placed before 9 "...45|9"
    },
  );

  test.each(LOCALES)(
    'handles "Backspace" press for locale $locale',
    async ({ locale, thousandSeparator }) => {
      render(<TestComponent />, {
        wrapper: createWrapper(locale),
      });

      const input = screen.getByRole('textbox') as HTMLInputElement;
      await userEvent.type(input, '123456789');
      expect(input).toHaveValue(`123${thousandSeparator}456${thousandSeparator}789`);

      input.setSelectionRange(8, 8); // place caret after thousand separator "123 456 |789"
      await userEvent.keyboard(`[Backspace]`);
      expect(input).toHaveValue(`12${thousandSeparator}345${thousandSeparator}789`);
      expect(input.selectionStart).toBe(6); // caret should be placed after 5 " ...5| 789"

      await userEvent.keyboard(`[Backspace]`);
      expect(input).toHaveValue(`1${thousandSeparator}234${thousandSeparator}789`);
      expect(input.selectionStart).toBe(5); // caret should be placed after 4 " ...4| 789"

      input.setSelectionRange(4, 4); // place caret after thousand sepaator "123 456 |789"
      await userEvent.keyboard(`[Backspace]`);
      expect(input).toHaveValue(`124${thousandSeparator}789`);
      expect(input.selectionStart).toBe(2); // caret should be placed after 2 "12|4 789"
    },
  );

  test.each(LOCALES)(
    'accepts minus sign "$minusSign" for locale $locale',
    async ({ locale, minusSign }) => {
      render(<TestComponent />, {
        wrapper: createWrapper(locale),
      });
      const input = screen.getByRole('textbox');
      await userEvent.type(input, minusSign);
      expect(input).toHaveValue(minusSign);
      await userEvent.type(input, '1');
      expect(input).toHaveValue(`${minusSign}1`);
      await userEvent.type(input, minusSign);
      expect(input).toHaveValue(`${minusSign}1`);
    },
  );

  test.each(LOCALES)(
    'accepts dash sign "$minusSign" for locale $locale',
    async ({ locale, minusSign }) => {
      render(<TestComponent />, {
        wrapper: createWrapper(locale),
      });
      const input = screen.getByRole('textbox');
      await userEvent.type(input, '-');
      expect(input).toHaveValue(minusSign);
      await userEvent.type(input, '1');
      expect(input).toHaveValue(`${minusSign}1`);
      await userEvent.type(input, '-');
      expect(input).toHaveValue(`${minusSign}1`);
    },
  );

  test.each(LOCALES)(
    'accepts leading and trailing zeros for locale $locale',
    async ({ locale, decimalSign, thousandSeparator }) => {
      render(<TestComponent />, {
        wrapper: createWrapper(locale),
      });
      const input = screen.getByRole('textbox') as HTMLInputElement;
      await userEvent.type(input, '00');
      expect(input).toHaveValue('00');
      await userEvent.type(input, '0');
      expect(input).toHaveValue(`${thousandSeparator}000`);
      await userEvent.type(input, '0');
      expect(input).toHaveValue(`0${thousandSeparator}000`);
      await userEvent.type(input, decimalSign);
      expect(input).toHaveValue(`0${thousandSeparator}000${decimalSign}`);
      await userEvent.type(input, '0000');
      expect(input).toHaveValue(`0${thousandSeparator}000${decimalSign}0000`);
      await userEvent.type(input, '9');
      expect(input).toHaveValue(`0${thousandSeparator}000${decimalSign}00009`);
      input.setSelectionRange(0, 0); // place caret at beginning
      await userEvent.keyboard('1');
      expect(input).toHaveValue(`10${thousandSeparator}000${decimalSign}00009`);
    },
  );

  test.each(LOCALES)(
    'accepts leading zeros for non zero input value for locale $locale',
    async ({ locale, thousandSeparator }) => {
      render(<TestComponent />, {
        wrapper: createWrapper(locale),
      });
      const input = screen.getByRole('textbox') as HTMLInputElement;
      await userEvent.type(input, '123');
      expect(input).toHaveValue('123');
      input.setSelectionRange(0, 0); // place caret at beginning
      await userEvent.keyboard('0');
      expect(input).toHaveValue(`0${thousandSeparator}123`);
    },
  );

  test.each(LOCALES)(
    'accepts leading and trailing zeros with minuses for locale $locale',
    async ({ locale, decimalSign, thousandSeparator, minusSign }) => {
      render(<TestComponent />, {
        wrapper: createWrapper(locale),
      });
      const input = screen.getByRole('textbox') as HTMLInputElement;
      await userEvent.type(input, '-00');
      expect(input).toHaveValue(`${minusSign}00`);
      await userEvent.type(input, '0');
      expect(input).toHaveValue(`${minusSign}${thousandSeparator}000`);
      await userEvent.type(input, '0');
      expect(input).toHaveValue(`${minusSign}0${thousandSeparator}000`);
      await userEvent.type(input, decimalSign);
      expect(input).toHaveValue(`${minusSign}0${thousandSeparator}000${decimalSign}`);
      await userEvent.type(input, '0000');
      expect(input).toHaveValue(`${minusSign}0${thousandSeparator}000${decimalSign}0000`);
      await userEvent.type(input, '9');
      expect(input).toHaveValue(`${minusSign}0${thousandSeparator}000${decimalSign}00009`);
      input.setSelectionRange(1, 1); // place caret at beginning
      await userEvent.keyboard('1');
      expect(input).toHaveValue(`${minusSign}10${thousandSeparator}000${decimalSign}00009`);
    },
  );

  test.each(LOCALES)('has float value when locale $locale', async ({ locale, decimalSign }) => {
    render(<TestComponent />, {
      wrapper: createWrapper(locale),
    });

    const input = screen.getByRole('textbox');
    const span = screen.getByTestId('test-float-value');

    await userEvent.type(input, '-');
    expect(span).toHaveTextContent(''); // null

    await userEvent.type(input, '1234');
    expect(span).toHaveTextContent('1234');

    await userEvent.type(input, decimalSign);
    expect(span).toHaveTextContent('-1234');

    await userEvent.type(input, '5');
    expect(span).toHaveTextContent('-1234.5');

    await userEvent.clear(input);
    expect(span).toHaveTextContent(''); // null

    await userEvent.type(input, '0');
    expect(span).toHaveTextContent('0');

    await userEvent.type(input, '000');
    expect(span).toHaveTextContent('0');

    await userEvent.type(input, decimalSign);
    expect(span).toHaveTextContent('0');

    await userEvent.type(input, '6');
    expect(span).toHaveTextContent('0.6');
  });

  test('should respect provided value', async () => {
    render(<FormattedInput value={5000} onChange={() => {}} />, {
      wrapper: createWrapper('en-GB'),
    });
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('5,000');

    await userEvent.type(input, '-1.618');
    expect(input).toHaveValue('5,000');

    await userEvent.type(input, '1');
    expect(input).toHaveValue('5,000');
  });

  test.each(LOCALES)(
    'prepends zero when decimal sign is added without whole number part for locale $locale',
    async ({ locale, decimalSign, minusSign }) => {
      render(<TestComponent />, {
        wrapper: createWrapper(locale),
      });
      const input = screen.getByRole('textbox') as HTMLInputElement;
      await userEvent.type(input, decimalSign);
      expect(input).toHaveValue(`0${decimalSign}`);

      await userEvent.clear(input);
      await userEvent.type(input, minusSign + decimalSign);
      expect(input).toHaveValue(`${minusSign}0${decimalSign}`);

      await userEvent.clear(input);
      await userEvent.type(input, '1');
      input.setSelectionRange(0, 0); // place caret at beginning
      await userEvent.keyboard(decimalSign);
      expect(input).toHaveValue(`0${decimalSign}1`);

      await userEvent.clear(input);
      await userEvent.type(input, '1');
      input.setSelectionRange(0, 0); // place caret at beginning
      await userEvent.keyboard(minusSign + decimalSign);
      expect(input).toHaveValue(`${minusSign}0${decimalSign}1`);
    },
  );

  test('should respect max decimal part', async () => {
    render(<TestComponent maximumDecimals={3} />, {
      wrapper: createWrapper('en-GB'),
    });

    const input = screen.getByRole('textbox');
    await userEvent.type(input, '0.1');
    expect(input).toHaveValue('0.1234');
    await userEvent.type(input, '9');
    expect(input).toHaveValue(`0.1234`);
  });

  /* Known Issues & Future Improvements... */

  test.todo('[medium prio] prepending zero on lone decimal sign puts caret in wrong position');

  test.todo('[medium prio] unable to enter negative numbers on mobile device due to inputMode');

  test.todo('[low prio] implement toggle minus sign when entering minus sign');

  test.todo('[low prio] entering number before minus sign removes minus sign');

  test.todo('[low prio] does not reformat the value on locale change until typing');

  test.todo('[low prio] remove leading/trailing zeros and lone minus sign on blur');

  test.todo('[low prio] undo and redo ctrl/cmd + z does not work correctly');
});

import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../../theme';
import { FormattedNumber } from './FormattedNumber';

describe('Input.Number', () => {
  const createWrapper =
    (locale: string) =>
    ({ children }: { children: ReactNode }) =>
      (
        <IntlProvider locale={locale}>
          <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
        </IntlProvider>
      );

  describe('formatting', () => {
    test.each([
      { locale: 'sv-SE', thousandSeparator: ' ' },
      { locale: 'da-DK', thousandSeparator: '.' },
      { locale: 'fi-FI', thousandSeparator: ' ' },
      { locale: 'nb-NO', thousandSeparator: ' ' },
      { locale: 'en-GB', thousandSeparator: ',' },
    ])(
      'adds thousand separator "$thousandSeparator" for locale $locale',
      async ({ locale, thousandSeparator }) => {
        render(<FormattedNumber id="id" label="label" withThousandSeparator />, {
          wrapper: createWrapper(locale),
        });
        const input = screen.getByRole('textbox');
        await userEvent.type(input, '999');
        expect(input).toHaveValue('999');
        await userEvent.type(input, '9');
        expect(input).toHaveValue(`9${thousandSeparator}999`);
      },
    );

    test.each([
      { locale: 'sv-SE', decimalSign: ',' },
      { locale: 'da-DK', decimalSign: ',' },
      { locale: 'fi-FI', decimalSign: ',' },
      { locale: 'nb-NO', decimalSign: ',' },
      { locale: 'en-GB', decimalSign: '.' },
    ])('accepts decimalSign "$decimalSign" for locale $locale', async ({ locale, decimalSign }) => {
      render(<FormattedNumber id="id" label="label" withThousandSeparator />, {
        wrapper: createWrapper(locale),
      });
      const input = screen.getByRole('textbox');
      await userEvent.type(input, '1');
      expect(input).toHaveValue('1');
      await userEvent.type(input, decimalSign);
      expect(input).toHaveValue(`1${decimalSign}`);
      await userEvent.type(input, '2');
      expect(input).toHaveValue(`1${decimalSign}2`);
      await userEvent.type(input, decimalSign);
    });

    test.each([
      { locale: 'sv-SE', decimalSign: ',' },
      { locale: 'fi-FI', decimalSign: ',' },
      { locale: 'nb-NO', decimalSign: ',' },
    ])('also accepts "." as decimal sign for locale $locale', async ({ locale, decimalSign }) => {
      render(<FormattedNumber id="id" label="label" withThousandSeparator />, {
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
      render(<FormattedNumber id="id" label="label" withThousandSeparator />, {
        wrapper: createWrapper('da-DK'),
      });
      const input = screen.getByRole('textbox');
      await userEvent.type(input, '1');
      expect(input).toHaveValue('1');
      await userEvent.type(input, '.');
      expect(input).toHaveValue('1');
    });

    test('should not accept multiple decimal signs', async () => {
      render(<FormattedNumber id="id" label="label" withThousandSeparator />, {
        wrapper: createWrapper('en-GB'),
      });
      const input = screen.getByRole('textbox');
      await userEvent.type(input, '1');
      expect(input).toHaveValue('1');
      await userEvent.type(input, '.');
      expect(input).toHaveValue('1.');
      await userEvent.type(input, '.');
      expect(input).toHaveValue('1.');
      await userEvent.type(input, '2');
      expect(input).toHaveValue('1.2');
      await userEvent.type(input, '.');
      expect(input).toHaveValue('1.2');
    });

    test('should only accept numbers, decimal and minus signs,', async () => {
      render(<FormattedNumber id="id" label="label" withThousandSeparator />, {
        wrapper: createWrapper('en-GB'),
      });
      const input = screen.getByRole('textbox');
      await userEvent.type(input, '-1Ab$=+)./@2');
      expect(input).toHaveValue('-1.2');
      await userEvent.type(input, 'g');
      expect(input).toHaveValue('-1.2');
    });

    test('should move caret one position to the right after typing a number,', async () => {
      render(<FormattedNumber id="id" label="label" withThousandSeparator />, {
        wrapper: createWrapper('en-GB'),
      });
      const input = screen.getByRole('textbox');
      await userEvent.type(input, '1.23');
      expect(input).toHaveValue('1.23');
      await userEvent.keyboard('[ArrowLeft][ArrowLeft][ArrowLeft]8');
      expect(input).toHaveValue('18.23');
      await userEvent.keyboard('9');
      expect(input).toHaveValue('189.23');
    });

    test('should move caret to correct position after thousand separator is added,', async () => {
      render(<FormattedNumber id="id" label="label" withThousandSeparator />, {
        wrapper: createWrapper('en-GB'),
      });
      const input = screen.getByRole('textbox');
      await userEvent.type(input, '123456');
      expect(input).toHaveValue('123,456');
      await userEvent.keyboard('[ArrowLeft][ArrowLeft]89');
      expect(input).toHaveValue('12,348,956');
    });

    test('should not accept minus signs in incorrect places', async () => {
      render(<FormattedNumber id="id" label="label" withThousandSeparator />, {
        wrapper: createWrapper('en-GB'),
      });
      const input = screen.getByRole('textbox');
      await userEvent.type(input, '1');
      expect(input).toHaveValue('1');
      await userEvent.type(input, '-');
      expect(input).toHaveValue('1');
      await userEvent.keyboard('[ArrowLeft]-');
      expect(input).toHaveValue('-1');
      await userEvent.type(input, '-');
      expect(input).toHaveValue('-1');
    });
  });
});

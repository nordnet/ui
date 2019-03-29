import React from 'react';
import { CurrencyComponent } from './Currency.types';
import Text from '../Text';

const SPACER = ' ';
const getPrefix = (value: number, sign?: boolean) => {
  if (sign && value > 0) {
    return '+';
  }

  return '';
};

const Primary: CurrencyComponent['Primary'] = ({ value, currency, ...rest }) => (
  <Text.Primary weight={rest.weight}>{`${value}${SPACER}${currency}`}</Text.Primary>
);
Primary.displayName = 'Currency.Primary';

const Secondary: CurrencyComponent['Secondary'] = ({ value, currency, sign, ...rest }) => (
  <Text.Secondary weight={rest.weight}>{`${getPrefix(
    value,
    sign,
  )}${value}${SPACER}${currency}`}</Text.Secondary>
);
Secondary.displayName = 'Currency.Secondary';

const Tertiary: CurrencyComponent['Tertiary'] = ({ value, currency, ...rest }) => (
  <Text.Tertiary weight={rest.weight}>{`${value}${SPACER}${currency}`}</Text.Tertiary>
);
Tertiary.displayName = 'Currency.Tertiary';

const Title1: CurrencyComponent['Title1'] = ({ value, currency }) => (
  <Text.Title1>{`${value}${SPACER}${currency}`}</Text.Title1>
);
Title1.displayName = 'Currency.Title1';

const Title3: CurrencyComponent['Title3'] = ({ value, currency }) => (
  <Text.Title3>{`${value}${SPACER}${currency}`}</Text.Title3>
);
Title3.displayName = 'Currency.Title3';

export const Currency: CurrencyComponent = {
  Primary,
  Secondary,
  Tertiary,
  Title1,
  Title3,
};

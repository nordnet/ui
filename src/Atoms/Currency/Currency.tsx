import React from 'react';
import { CurrencyComponent } from './Currency.types';
import Text from '../Text';

const SPACER = ' ';

const Primary: CurrencyComponent['Primary'] = ({ value, currency, ...rest }) => (
  <Text.Primary {...rest}>{`${value}${SPACER}${currency}`}</Text.Primary>
);

const Secondary: CurrencyComponent['Secondary'] = ({ value, currency, ...rest }) => (
  <Text.Secondary {...rest}>{`${value}${SPACER}${currency}`}</Text.Secondary>
);

const Tertiary: CurrencyComponent['Tertiary'] = ({ value, currency, ...rest }) => (
  <Text.Tertiary {...rest}>{`${value}${SPACER}${currency}`}</Text.Tertiary>
);

const Title1: CurrencyComponent['Title1'] = ({ value, currency, ...rest }) => (
  <Text.Title1 {...rest}>{`${value}${SPACER}${currency}`}</Text.Title1>
);

const Title3: CurrencyComponent['Title3'] = ({ value, currency, ...rest }) => (
  <Text.Title3 {...rest}>{`${value}${SPACER}${currency}`}</Text.Title3>
);

export const Currency: CurrencyComponent = {
  Primary,
  Secondary,
  Tertiary,
  Title1,
  Title3,
};

import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { CurrencyComponent, BaseProps } from './Currency.types';
import Text from '../Text';

const FC: React.FC<BaseProps & InjectedIntlProps> = ({ value, currency, intl }) => 
  <>{intl.formatNumber(value, { currency, style: 'currency', currencyDisplay: 'code' })}</>

const FormattedCurrency = injectIntl(FC);

// TODO: make higher order component, this is only for the speed needed.
const Primary: CurrencyComponent['Primary'] = ({ value, currency, ...rest }) => (
  <Text.Primary {...rest}>
    <FormattedCurrency value={value} currency={currency} />
  </Text.Primary>
);

const Secondary: CurrencyComponent['Secondary'] = ({ value, currency, ...rest }) => (
  <Text.Secondary {...rest}><FormattedCurrency value={value} currency={currency} /></Text.Secondary>
);

const Tertiary: CurrencyComponent['Tertiary'] = ({ value, currency, ...rest }) => (
  <Text.Tertiary {...rest}><FormattedCurrency value={value} currency={currency} /></Text.Tertiary>
);

const Title1: CurrencyComponent['Title1'] = ({ value, currency, ...rest }) => (
  <Text.Title1 {...rest}><FormattedCurrency value={value} currency={currency} /></Text.Title1>
);

const Title3: CurrencyComponent['Title3'] = ({ value, currency, ...rest }) => (
  <Text.Title3 {...rest}><FormattedCurrency value={value} currency={currency} /></Text.Title3>
);

export const Currency: CurrencyComponent = {
  Primary,
  Secondary,
  Tertiary,
  Title1,
  Title3,
};

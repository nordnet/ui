import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { CurrencyComponent, BaseProps } from './Currency.types';
import Text from '../Text';

const getPrefix = (value: number, sign?: boolean) => {
  if (sign && value > 0) {
    return '+';
  }

  return '';
};
const FC: React.FC<BaseProps & InjectedIntlProps> = ({ value, currency, intl, sign }) => (
  <>{`${getPrefix(value, sign)}${intl.formatNumber(value, {
    currency,
    style: 'currency',
    currencyDisplay: 'code',
  })}`}</>
);

const FormattedCurrency = injectIntl(FC);

// TODO: make higher order component, this is only for the speed needed.
const Primary: CurrencyComponent['Primary'] = ({ value, currency, ...rest }) => (
  <Text.Primary weight={rest.weight}>
    <FormattedCurrency value={value} currency={currency} />
  </Text.Primary>
);
Primary.displayName = 'Currency.Primary';

const Secondary: CurrencyComponent['Secondary'] = ({ value, currency, ...rest }) => (
  <Text.Secondary weight={rest.weight}>
    <FormattedCurrency value={value} currency={currency} />
  </Text.Secondary>
);
Secondary.displayName = 'Currency.Secondary';

const Tertiary: CurrencyComponent['Tertiary'] = ({ value, currency, ...rest }) => (
  <Text.Tertiary weight={rest.weight}>
    <FormattedCurrency value={value} currency={currency} />
  </Text.Tertiary>
);
Tertiary.displayName = 'Currency.Tertiary';

const Title1: CurrencyComponent['Title1'] = ({ value, currency }) => (
  <Text.Title1>
    <FormattedCurrency value={value} currency={currency} />
  </Text.Title1>
);
Title1.displayName = 'Currency.Title1';

const Title3: CurrencyComponent['Title3'] = ({ value, currency }) => (
  <Text.Title3>
    <FormattedCurrency value={value} currency={currency} />
  </Text.Title3>
);
Title3.displayName = 'Currency.Title3';

export const Currency: CurrencyComponent = {
  Primary,
  Secondary,
  Tertiary,
  Title1,
  Title3,
};

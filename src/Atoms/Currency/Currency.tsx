import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { CurrencyComponent, BaseProps } from './Currency.types';
import Typography from '../Typography';

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
  <Typography type="primary" weight={rest.weight}>
    <FormattedCurrency value={value} currency={currency} />
  </Typography>
);
Primary.displayName = 'Currency.Primary';

const Secondary: CurrencyComponent['Secondary'] = ({ value, currency, ...rest }) => (
  <Typography type="secondary" weight={rest.weight}>
    <FormattedCurrency value={value} currency={currency} />
  </Typography>
);
Secondary.displayName = 'Currency.Secondary';

const Tertiary: CurrencyComponent['Tertiary'] = ({ value, currency, ...rest }) => (
  <Typography type="tertiary" weight={rest.weight}>
    <FormattedCurrency value={value} currency={currency} />
  </Typography>
);
Tertiary.displayName = 'Currency.Tertiary';

const Title1: CurrencyComponent['Title1'] = ({ value, currency }) => (
  <Typography type="title1">
    <FormattedCurrency value={value} currency={currency} />
  </Typography>
);
Title1.displayName = 'Currency.Title1';

const Title3: CurrencyComponent['Title3'] = ({ value, currency }) => (
  <Typography type="title3">
    <FormattedCurrency value={value} currency={currency} />
  </Typography>
);
Title3.displayName = 'Currency.Title3';

export const Currency: CurrencyComponent = {
  Primary,
  Secondary,
  Tertiary,
  Title1,
  Title3,
};

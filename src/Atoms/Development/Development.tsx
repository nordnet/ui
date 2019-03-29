import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { DevelopmentComponent, DevelopmentProps } from './Development.types';
import Text from '../Text/index';
import { Theme } from '../../theme/theme.types';

const getPrefix = (value: Number) => {
  if (value > 0) return '▲'
  if (value < 0) return '▼'
  return `${value}`;
};

const getColor = (value: Number) => (t: Theme) => {
  if (value > 0) {
    return t.color.positive;
  }

  if (value < 0) {
    return t.color.negative;
  }
  return t.color.text;
};

const FD: React.FC<DevelopmentProps & InjectedIntlProps> = ({ value,  intl }) => 
  <>{getPrefix(value)}{value > 0 ? '+' : null}{intl.formatNumber(value)}{'%'}</>

const FormattedDevelopment = injectIntl(FD);

// TODO: a HOC is needed here as well
const Primary: DevelopmentComponent['Primary'] = ({ value, ...rest }) => (
  <Text.Primary color={getColor(value)} {...rest}>
    <FormattedDevelopment value={value} />
  </Text.Primary>
);

const Secondary: DevelopmentComponent['Secondary'] = ({ value, ...rest }) => (
  <Text.Secondary color={getColor(value)} {...rest}>
    <FormattedDevelopment value={value} />
  </Text.Secondary>
);

const Tertiary: DevelopmentComponent['Secondary'] = ({ value, ...rest }) => (
  <Text.Tertiary color={getColor(value)} {...rest}>
    <FormattedDevelopment value={value} />
  </Text.Tertiary>
);

export const Development: DevelopmentComponent = {
  Primary,
  Secondary,
  Tertiary,
};

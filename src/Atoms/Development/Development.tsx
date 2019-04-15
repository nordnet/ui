import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { DevelopmentComponent, DevelopmentProps } from './Development.types';
import Typography from '../Typography';
import { Theme } from '../../theme/theme.types';

const getPrefix = (value: number) => {
  if (value > 0) return '▲';
  if (value < 0) return '▼';
  return `${value}`;
};

const getColor = (value: number) => (t: Theme) => {
  if (value > 0) {
    return t.color.positive;
  }

  if (value < 0) {
    return t.color.negative;
  }
  return t.color.text;
};

const FD: React.FC<DevelopmentProps & InjectedIntlProps> = ({ value, intl }) => (
  <>
    {getPrefix(value)}
    {value > 0 ? '+' : null}
    {intl.formatNumber(value)}
    {'%'}
  </>
);

const FormattedDevelopment = injectIntl(FD);

// TODO: a HOC is needed here as well
const Primary: DevelopmentComponent['Primary'] = ({ value, ...rest }) => (
  <Typography type="primary" color={getColor(value)} {...rest}>
    <FormattedDevelopment value={value} />
  </Typography>
);
Primary.displayName = 'Development.Primary';

const Secondary: DevelopmentComponent['Secondary'] = ({ value, ...rest }) => (
  <Typography type="secondary" color={getColor(value)} {...rest}>
    <FormattedDevelopment value={value} />
  </Typography>
);
Secondary.displayName = 'Development.Secondary';

const Tertiary: DevelopmentComponent['Secondary'] = ({ value, ...rest }) => (
  <Typography type="tertiary" color={getColor(value)} {...rest}>
    <FormattedDevelopment value={value} />
  </Typography>
);
Tertiary.displayName = 'Development.Tertiary';

export const Development: DevelopmentComponent = {
  Primary,
  Secondary,
  Tertiary,
};

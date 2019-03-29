import React from 'react';
import { DevelopmentComponent } from './Development.types';
import Text from '../Text/index';
import { Theme } from '../../theme/theme.types';

const getPrefix = (value: Number) => {
  if (value > 0) {
    return `▲ +${value}%`;
  }

  if (value < 0) {
    return `▼ ${value}%`;
  }

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

const Primary: DevelopmentComponent['Primary'] = ({ value, ...rest }) => (
  <Text.Primary color={getColor(value)} {...rest}>
    {getPrefix(value)}
  </Text.Primary>
);

const Secondary: DevelopmentComponent['Secondary'] = ({ value, ...rest }) => (
  <Text.Secondary color={getColor(value)} {...rest}>
    {getPrefix(value)}
  </Text.Secondary>
);

const Tertiary: DevelopmentComponent['Secondary'] = ({ value, ...rest }) => (
  <Text.Tertiary color={getColor(value)} {...rest}>
    {getPrefix(value)}
  </Text.Tertiary>
);

export const Development: DevelopmentComponent = {
  Primary,
  Secondary,
  Tertiary,
};

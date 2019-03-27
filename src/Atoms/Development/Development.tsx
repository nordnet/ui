import React from 'react';
import { DevelopmentComponent } from './Development.types';
import Text from '../Text/index';

const Primary: DevelopmentComponent['Primary'] = ({ value, ...rest }) => (
  <Text.Primary {...rest}>{`${value}`}</Text.Primary>
);

const Secondary: DevelopmentComponent['Secondary'] = ({ value, ...rest }) => (
  <Text.Secondary {...rest}>{`${value}`}</Text.Secondary>
);

export const Development: DevelopmentComponent = {
  Primary,
  Secondary,
};

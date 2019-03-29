import React from 'react';
import { Weight } from '../Text/Text.types';

export type BaseProps = {
  value: Number;
  currency: String;
  weight?: Weight;
};

export type CurrencyComponent = {
  Title1: React.ComponentType<BaseProps>;
  Title3: React.ComponentType<BaseProps>;
  Primary: React.ComponentType<BaseProps>;
  Secondary: React.ComponentType<BaseProps>;
  Tertiary: React.ComponentType<BaseProps>;
};

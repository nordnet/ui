import React from 'react';
import { Weight } from '../Typography/Typography.types';

export type BaseProps = {
  value: number;
  currency: string;
  weight?: Weight;
  sign?: boolean;
};

export type CurrencyComponent = {
  Title1: React.ComponentType<BaseProps>;
  Title3: React.ComponentType<BaseProps>;
  Primary: React.ComponentType<BaseProps>;
  Secondary: React.ComponentType<BaseProps>;
  Tertiary: React.ComponentType<BaseProps>;
};

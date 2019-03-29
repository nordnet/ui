import React from 'react';

export type BaseProps = {
  value: number;
  currency: string;
};

export type CurrencyComponent = {
  Title1: React.ComponentType<BaseProps>;
  Title3: React.ComponentType<BaseProps>;
  Primary: React.ComponentType<BaseProps>;
  Secondary: React.ComponentType<BaseProps>;
  Tertiary: React.ComponentType<BaseProps>;
};

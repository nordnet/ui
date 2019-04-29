import React from 'react';

export type BaseProps = {
  value: number | null | undefined;
  decimals?: number;
  currency: string;
  sign?: boolean;
};

export type CurrencyComponent = React.FC<BaseProps>;

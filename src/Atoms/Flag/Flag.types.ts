import React from 'react';

/**
 * 's' = 14px,
 * 'm' = 16px,
 * 'l' = 24px
 */
type FlagSize = { size: 's' | 'm' | 'l' };

export type PropsWithSize = {
  className?: string;
  title?: string;
  country: string;
  inline?: boolean;
} & FlagSize;

export type FlagComponent = React.FunctionComponent<PropsWithSize>;

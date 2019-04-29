import React from 'react';

export type DevelopmentProps = {
  value: number | null | undefined;
  decimals?: number;
  className?: string;
};

export type DevelopmentComponent = React.FC<DevelopmentProps>;

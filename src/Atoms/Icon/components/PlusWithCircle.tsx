import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const PlusWithCircle = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 2v7h7v2h-7v7h-2v-7.001L4 13v-2l7-.001V4h2z"
        fillRule="evenodd"
      />
    </IconBase>
  );
};

PlusWithCircle.displayName = 'Icon.PlusWithCircle';

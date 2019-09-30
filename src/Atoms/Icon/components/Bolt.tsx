import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Bolt = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path id="a" d="M15 0L3 13.5h7.5L9 24l12-13.5h-7.5z" />
    </IconBase>
  );
};

Bolt.displayName = 'Icon.Bolt';

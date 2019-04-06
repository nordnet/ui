import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const ChevronDown = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <polygon points="19.969 4 24 8.027 12 20 0 8.027 4.031 4 12 11.952" />
    </IconBase>
  );
};

ChevronDown.displayName = 'Icon.ChevronDown';

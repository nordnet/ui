import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const WarningTriangle = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <polygon points="12 1 24 23 0 23" />
      <path
        d="M11,10 L13,10 L13,16 L11,16 L11,10 Z M11,17 L13,17 L13,19 L11,19 L11,17 Z"
        fill="#FFFFFF"
      />
    </IconBase>
  );
};

WarningTriangle.displayName = 'Icon.WarningTriangle';

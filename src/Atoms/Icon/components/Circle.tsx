import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const SolidCircle = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="12" fillRule="evenodd" />
    </IconBase>
  );
};

SolidCircle.displayName = 'Icon.SolidCircle';

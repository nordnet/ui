import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Maximize = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 20 20">
      <path d="M7.585938 11L9 12.414062 3.414062 18H8l-2 2H0v-6l2-2v4.585938zM20 0v6l-2 2V3.414062L12.414062 9 11 7.585938 16.585938 2H12l2-2zm0 0" />
    </IconBase>
  );
};

Maximize.displayName = 'Icon.Maximize';

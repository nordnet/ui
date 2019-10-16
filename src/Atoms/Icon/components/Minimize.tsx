import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Minimize = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 20 20">
      <path d="M9 11v6l-2 2v-4.585938L1.414062 20 0 18.585938 5.585938 13H1l2-2zm9.585938-11L20 1.414062 14.414062 7H19l-2 2h-6V3l2-2v4.585938zm0 0" />
    </IconBase>
  );
};

Minimize.displayName = 'Icon.Minimize';

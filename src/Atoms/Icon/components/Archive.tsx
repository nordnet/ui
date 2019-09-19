import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Archive = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path
        d="M24,2 L24,8 L22,8 L22,24 L2,24 L2,8 L0,8 L0,2 L24,2 Z M20,8 L4,8 L4,22 L20,22 L20,8 Z M18,10 L18,12 L6,12 L6,10 L18,10 Z M22,4 L2,4 L2,6 L22,6 L22,4 Z M6,12 L8,12 L8,14 L6,14 L6,12 Z M6,14 L18,14 L18,16 L6,16 L6,14 Z M16,12 L18,12 L18,14 L16,14 L16,12 Z"
        id="path-1"
      />
    </IconBase>
  );
};

Archive.displayName = 'Icon.Archive';

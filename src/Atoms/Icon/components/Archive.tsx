import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Archive = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 24">
      <path
        d="M24,0 L24,6 L22,6 L22,22 L2,22 L2,6 L0,6 L0,0 L24,0 Z M20,6 L4,6 L4,20 L20,20 L20,6 Z M18,8 L18,10 L6,10 L6,8 L18,8 Z M22,2 L2,2 L2,4 L22,4 L22,2 Z M6,10 L8,10 L8,12 L6,12 L6,10 Z M6,12 L18,12 L18,14 L6,14 L6,12 Z M16,10 L18,10 L18,12 L16,12 L16,10 Z"
        transform="translate(0 1)"
      />
    </IconBase>
  );
};

Archive.displayName = 'Icon.Archive';

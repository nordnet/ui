import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Healthcare = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M12,2.66453526e-15 L12,2.999 L16,3 L16,16 L0,16 L0,3 L4,2.999 L4,2.66453526e-15 L12,2.66453526e-15 Z M4,3.999 L1,4 L1,15 L15,15 L15,4 L12,3.999 L12,4 L4,4 L4,3.999 Z M8.5,6 L8.5,9 L11.5,9 L11.5,10 L8.5,10 L8.5,13 L7.5,13 L7.5,10 L4.5,10 L4.5,9 L7.5,9 L7.5,6 L8.5,6 Z M11,1 L5,1 L5,3 L11,3 L11,1 Z"
      />
    </IconBase>
  );
};

Healthcare.displayName = 'Icon.Healthcare';

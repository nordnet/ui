import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Increase = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <g fillRule="evenodd">
        <path
          d="M13.01,6.499 L3.941,15.499 L26.5,15.5 L26.5,17.5 L3.941,17.499 L13.01,26.499 L10.576,26.499 L0.5,16.5 L10.577,6.499 L13.01,6.499 Z M29.5,0.5 L31.5,0.5 L31.5,32.5 L29.5,32.5 L29.5,0.5 Z"
          transform="translate(16.000000, 16.500000) scale(1, -1) rotate(-90.000000) translate(-16.000000, -16.500000) "
         />
      </g>
    </IconBase>
  );
};

Increase.displayName = 'OldIcon.Increase';

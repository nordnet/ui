import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Move = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <g fillRule="evenodd">
        <path
          d="M32,29.8921825 L32,31.8921825 L-2.82440737e-13,31.8921825 L-2.82440737e-13,29.8921825 L32,29.8921825 Z M15.619,3.99950056 L6.549,12.9995006 L29.1078175,13 L29.1078175,15 L6.549,14.9995006 L15.618,23.9995006 L13.184,23.9995006 L3.10781753,14 L13.184,3.99950056 L15.619,3.99950056 Z"
          transform="translate(16.000000, 17.945842) scale(1, -1) rotate(-180.000000) translate(-16.000000, -17.945842) "
         />
      </g>
    </IconBase>
  );
};

Move.displayName = 'OldIcon.Move';

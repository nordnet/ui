import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const Transfer = ({ fill, ...props }: BaseProps) => (
  <IconBase {...props} viewBox="0 0 32 32">
    <StyledPath
      strokeColorFn={fill}
      d="M22.173 15H25l5-5-5-5h-2.828l4 4H8v2h18.173l-4 4zM10.828 17H8l-5 5 5 5h2.828l-4-4h18.173v-2H6.828l4-4z"
    />
  </IconBase>
);

Transfer.displayName = 'OldIcon.Transfer';

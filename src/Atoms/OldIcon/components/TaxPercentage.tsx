import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const TaxPercentage = ({ fill, ...props }: BaseProps) => (
  <IconBase {...props} viewBox="0 0 32 32">
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <StyledPath
        cssAttribute="stroke"
        strokeColorFn={fill}
        strokeWidth="2"
        d="M7 3h18v26H7V3zm5 13l8-9m-7.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 21h12m-12 4h7"
      />
    </g>
  </IconBase>
);

TaxPercentage.displayName = 'OldIcon.TaxPercentage';

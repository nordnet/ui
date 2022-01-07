import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const CalendarO = ({ fill, ...props }: BaseProps) => (
  <IconBase {...props} viewBox="0 0 32 32" fill={() => 'transparent'}>
    <StyledPath
      fillRule="evenodd"
      clipRule="evenodd"
      cssAttribute="stroke"
      strokeColorFn={fill}
      strokeWidth={2}
      d="M2 10h28v20H2zM2 3h28v7H2zM8 1v4M24 1v4"
    />
  </IconBase>
);

CalendarO.displayName = 'OldIcon.CalendarO';

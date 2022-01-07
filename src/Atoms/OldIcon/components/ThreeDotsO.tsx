import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const ThreeDotsO = ({ fill, ...props }: BaseProps) => (
  <IconBase {...props} viewBox="0 0 32 32">
    <StyledPath
      fillRule="evenodd"
      clipRule="evenodd"
      strokeColorFn={fill}
      strokeWidth={0}
      d="M5 20a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4zM16 20a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4zM31 16a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </IconBase>
);

ThreeDotsO.displayName = 'OldIcon.ThreeDotsO';

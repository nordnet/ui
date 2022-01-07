import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const Profile = ({ fill, ...props }: BaseProps) => (
  <IconBase {...props} viewBox="0 0 32 32">
    <StyledPath
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9a5 5 0 1110 0 5 5 0 01-10 0zm5-7a7 7 0 100 14 7 7 0 000-14zM6 18a4 4 0 00-4 4v7h2v-7a2 2 0 012-2h20a2 2 0 012 2v7h2v-7a4 4 0 00-4-4H6z"
      strokeColorFn={fill}
      strokeWidth={0}
    />
  </IconBase>
);

Profile.displayName = 'OldIcon.Profile';

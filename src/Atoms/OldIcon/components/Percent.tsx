import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const Percent = ({ fill, ...props }: BaseProps) => (
  <IconBase {...props} viewBox="0 0 32 32">
    <StyledPath d="M3.522 30L25.92 2h2.56L6.084 30H3.522z" strokeColorFn={fill} strokeWidth={0} />
    <StyledPath
      fillRule="evenodd"
      clipRule="evenodd"
      strokeColorFn={fill}
      strokeWidth={0}
      d="M23.015 30h-.03a5 5 0 11.03 0zM20 25a3 3 0 116 0 3 3 0 01-6 0zM9 2a5 5 0 100 10A5 5 0 009 2zM6 7a3 3 0 116 0 3 3 0 01-6 0z"
    />
  </IconBase>
);

Percent.displayName = 'OldIcon.Percent';

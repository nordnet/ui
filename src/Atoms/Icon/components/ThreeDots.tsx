import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const ThreeDots = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path
        d="M21 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM3 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm9 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
        fillRule="evenodd"
      />
    </IconBase>
  );
};

ThreeDots.displayName = 'Icon.ThreeDots';

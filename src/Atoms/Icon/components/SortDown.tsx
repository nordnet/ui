import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const SortDown = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <polygon
        points="4 0 8 6 0 6"
        transform="translate(4.000000, 3.000000) scale(1, -1) translate(-4.000000, -3.000000)"
      />
    </IconBase>
  );
};

SortDown.displayName = 'Icon.SortDown';

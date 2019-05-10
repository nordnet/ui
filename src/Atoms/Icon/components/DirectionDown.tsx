import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const DirectionDown = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <polygon points="0 21 24 21 12 3" transform="rotate(-180 12 12)" />
    </IconBase>
  );
};

DirectionDown.displayName = 'Icon.DirectionDown';

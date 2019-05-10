import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const DirectionUp = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <polygon points="0 21 24 21 12 3" />
    </IconBase>
  );
};

DirectionUp.displayName = 'Icon.DirectionUp';

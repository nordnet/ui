import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const DirectionUp = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <polygon points="0 24 24 24 12 4" />
    </IconBase>
  );
};

DirectionUp.displayName = 'OldIcon.DirectionUp';

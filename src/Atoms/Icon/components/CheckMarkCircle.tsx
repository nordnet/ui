import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const CheckMarkCircle = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path d="M12,23.8695652 C18.627417,23.8695652 24,18.5553799 24,12 C24,5.44462014 18.627417,0.130434783 12,0.130434783 C5.372583,0.130434783 0,5.44462014 0,12 C0,18.5553799 5.372583,23.8695652 12,23.8695652 Z" />
      <polygon
        fill="#FFF"
        points="16.474 8.87 17.407 9.797 11 16.174 7.121 12.313 8.053 11.385 11 14.318"
      />
    </IconBase>
  );
};

CheckMarkCircle.displayName = 'Icon.CheckMarkCircle';

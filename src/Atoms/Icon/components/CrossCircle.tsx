import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const CrossCircle = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path d="M12,23.8695652 C18.627417,23.8695652 24,18.5553799 24,12 C24,5.44462014 18.627417,0.130434783 12,0.130434783 C5.372583,0.130434783 0,5.44462014 0,12 C0,18.5553799 5.372583,23.8695652 12,23.8695652 Z" />
      <polygon
        fill="#FFF"
        points="11.492 6.847 11.492 17.137 12.492 17.137 12.492 6.847"
        transform="rotate(-45 11.992 11.992)"
      />
      <polygon
        fill="#FFF"
        points="11.492 6.847 11.492 17.137 12.492 17.137 12.492 6.847"
        transform="rotate(45 11.992 11.992)"
      />
    </IconBase>
  );
};

CrossCircle.displayName = 'Icon.CrossCircle';

import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const InfoCircle = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path d="M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z" />
      <path d="M11,9 L13,9 L13,19 L11,19 L11,9 Z M11,5 L13,5 L13,7 L11,7 L11,5 Z" fill="#FFFFFF" />
    </IconBase>
  );
};

InfoCircle.displayName = 'Icon.InfoCircle';

import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const CrossMedium = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M6.857 8L0 1.143 1.143 0 8 6.857 14.857 0 16 1.143 9.143 8 16 14.857 14.857 16 8 9.143 1.143 16 0 14.857z"
      />
    </IconBase>
  );
};

CrossMedium.displayName = 'Icon.CrossMedium';

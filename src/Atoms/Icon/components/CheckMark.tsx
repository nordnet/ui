import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const CheckMark = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path d="M8.76083729 16.4144594L2.20525972 9.86336213 0 12.2093109 8.79670106 21 24 5.30897552 21.7583339 3z" />
    </IconBase>
  );
};

CheckMark.displayName = 'Icon.CheckMark';

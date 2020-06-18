import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Compass = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <path d="M16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16S0 24.836556 0 16 7.163444 0 16 0zm0 2C8.2680135 2 2 8.2680135 2 16s6.2680135 14 14 14 14-6.2680135 14-14S23.7319865 2 16 2zM7.54397802 7.54397802L27.2402822 13.1714935 16.923 16.923l-3.7515065 10.3172822L7.54397802 7.54397802zM10.455 10.455L13.4 20.759l1.9625438-5.3964562L20.759 13.4l-10.304-2.945z" />
    </IconBase>
  );
};

Compass.displayName = 'Icon.Compass';

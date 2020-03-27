import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Energy = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M9.05632846,-6.21724894e-15 L8.50881166,5.98648133 L13.5467195,5.98648133 L4.75925776,15.9979406 L6.5,8.9735554 L1.66653253,8.9735554 L9.05632846,-6.21724894e-15 Z M7.764,3.141 L3.785,7.973 L7.77806263,7.9735554 L6.717,12.25 L11.338,6.986 L7.41317914,6.98648133 L7.764,3.141 Z"
      />
    </IconBase>
  );
};

Energy.displayName = 'Icon.Energy';

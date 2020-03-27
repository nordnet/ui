import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const RealEstate = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3,8 L3,15 L6,15 L6,11 L10,11 L10,15 L13,15 L13,8 L14,8 L14,16 L9,16 L9,12 L7,12 L7,16 L2,16 L2,8 L3,8 Z M8,0 L16,7.57251742 L15.334866,8.29526369 L8,1.35239511 L0.665133953,8.29526369 L0,7.57251742 L7.66743302,0.314796153 L8,0 Z"
      />
    </IconBase>
  );
};

RealEstate.displayName = 'Icon.RealEstate';

import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Apartment = ({ color, ...rest }: BaseProps) => {
  return (
    <IconBase {...rest} viewBox="0 0 32 32" color={color}>
      <g stroke="none" strokeWidth="1" fill="inherit">
        <g transform="translate(2.000000, 0.000000)" fill="inherit">
          <path
            d="M28,0 L28,32 L0,32 L0,0 L28,0 Z M26.1034483,1.82352941 L1.89655172,1.82352941 L1.89655172,30.1764706 L12,30.176 L12,26 L16,26 L16,30.176 L26.1034483,30.1764706 L26.1034483,1.82352941 Z M10,19 L10,23 L6,23 L6,19 L10,19 Z M16,19 L16,23 L12,23 L12,19 L16,19 Z M22,19 L22,23 L18,23 L18,19 L22,19 Z M10,12 L10,16 L6,16 L6,12 L10,12 Z M16,12 L16,16 L12,16 L12,12 L16,12 Z M22,12 L22,16 L18,16 L18,12 L22,12 Z M10,5 L10,9 L6,9 L6,5 L10,5 Z M16,5 L16,9 L12,9 L12,5 L16,5 Z M22,5 L22,9 L18,9 L18,5 L22,5 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </IconBase>
  );
};

Apartment.displayName = 'Icon.Apartment';

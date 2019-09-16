import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const ExternalLink = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <path
          d="M6.67369399,0.417438743 L23.5768732,0.484990138 L23.644694,17.3874387 L20.999694,20.0324387 L20.9392091,5.00743874 L2.46289185,23.4846543 L0.577209052,21.5989715 L19.0532091,3.12143874 L4.03069399,3.06043874 L6.67369399,0.417438743 Z"
          fillRule="nonzero"
        />
      </g>
    </IconBase>
  );
};

ExternalLink.displayName = 'Icon.ExternalLink';

import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PauseFill32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4H5v24h8V4ZM27 4h-8v24h8V4Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

PauseFill32.displayName = 'Icon.PauseFill';

export default PauseFill32;

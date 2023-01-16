import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PauseFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 2h-4v12h4V2ZM13.5 2h-4v12h4V2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

PauseFill16.displayName = 'Icon.PauseFill';

export default PauseFill16;

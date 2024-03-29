import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Deposit16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2h-4V0h4a2 2 0 012 2v12a2 2 0 01-2 2h-4v-2h4v-1H0V3h14V2zM2 5h12v6H2V5z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Deposit16.displayName = 'Icon.Deposit';

export default Deposit16;

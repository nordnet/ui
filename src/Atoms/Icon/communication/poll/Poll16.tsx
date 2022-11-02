import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Poll16: React.FC<IconProps> = props => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M1 5C1.55228 5 2 4.55228 2 4C2 3.44772 1.55228 3 1 3C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5Z"
        fill="currentColor"
      />
      <path d="M16 3H4V5H16V3Z" fill="currentColor" />
      <path d="M4 7H13V9H4V7Z" fill="currentColor" />
      <path
        d="M1 9C1.55228 9 2 8.55228 2 8C2 7.44772 1.55228 7 1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9Z"
        fill="currentColor"
      />
      <path d="M4 11H10V13H4V11Z" fill="currentColor" />
      <path
        d="M1 13C1.55228 13 2 12.5523 2 12C2 11.4477 1.55228 11 1 11C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Poll16.displayName = 'Icon.Poll';

export default Poll16;

import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Group16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 5.199a3 3 0 1 0-4.802.99A3.001 3.001 0 0 0 0 9v1h2V9a1 1 0 0 1 1-1h1.126a4.008 4.008 0 0 1 2.625-2.801ZM4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9.25 5.199A4.008 4.008 0 0 1 11.873 8H13a1 1 0 0 1 1 1v1h2V9c0-1.287-.81-2.385-1.949-2.81A3 3 0 1 0 9.25 5.2ZM12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.228 11.009a3 3 0 1 0-4.457 0A3 3 0 0 0 3 14v1h2v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2v-1a3 3 0 0 0-2.772-2.991ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Group16.displayName = 'Icon.Group';

export default Group16;

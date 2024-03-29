import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Refresh16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M7.733 2.006L5.727 0h2.828l3.001 3.001L8.557 6H5.73l1.99-1.99A4 4 0 1012 8h2a6 6 0 11-6.267-5.994z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Refresh16.displayName = 'Icon.Refresh';

export default Refresh16;

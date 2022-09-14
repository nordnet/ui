import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowPositive24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M18 7.41421L18 15.8995L20 13.8995L20 4L10.1005 4L8.1005 6L16.5858 6L4 18.5858L5.41421 20L18 7.41421Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ArrowPositive24.displayName = 'Icon.ArrowPositive';

export default ArrowPositive24;

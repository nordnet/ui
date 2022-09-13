import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowPositive16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M11.3 6.11v5.66l2-2V2.7H6.23l-2 2H9.9L2.7 11.89l1.41 1.41 7.2-7.19Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ArrowPositive16.displayName = 'Icon.ArrowPositive';

export default ArrowPositive16;

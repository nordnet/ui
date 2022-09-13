import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowNegative16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M9.89 11.3H4.23l2 2h7.07V6.23l-2-2V9.9L4.11 2.7 2.7 4.11l7.19 7.2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ArrowNegative16.displayName = 'Icon.ArrowNegative';

export default ArrowNegative16;

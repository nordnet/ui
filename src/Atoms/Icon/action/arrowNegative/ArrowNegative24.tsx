import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowNegative24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M16.59 18H8.1l2 2H20v-9.9l-2-2v8.49L5.41 4 4 5.41 16.59 18Z" fill="currentColor" />
    </IconBase>
  );
};

ArrowNegative24.displayName = 'Icon.ArrowNegative';

export default ArrowNegative24;

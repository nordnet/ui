import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const LikeFill8: React.FC<IconProps> = props => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path
        d="M3.21224 2.66667L2.54557 3.33333V6.66667L3.87891 8H6.15435C6.79597 8 7.3466 7.54301 7.46484 6.91238L7.96484 4.24572C8.1187 3.42517 7.4892 2.66667 6.65435 2.66667H4.87891V2C4.87891 0.895431 4.31681 0 3.21224 0V2.66667Z"
        fill="currentColor"
      />
      <path
        d="M0 4C0 3.63181 0.298477 3.33333 0.666667 3.33333H1.87891V7.33333C1.87891 7.70152 1.58043 8 1.21224 8H0V4Z"
        fill="currentcolor"
      />
    </IconBase>
  );
};

LikeFill8.displayName = 'Icon.LikeFill';

export default LikeFill8;

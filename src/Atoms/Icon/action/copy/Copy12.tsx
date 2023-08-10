import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Copy12: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={12} height={12}>
      <path
        d="M2 0C0.89543 0 0 0.895431 0 2V6C0 7.10457 0.89543 8 2 8H3V6H2V2H6V3H8V2C8 0.89543 7.10457 0 6 0H2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4C4.89543 4 4 4.89543 4 6V10C4 11.1046 4.89543 12 6 12H10C11.1046 12 12 11.1046 12 10V6C12 4.89543 11.1046 4 10 4H6ZM6 6H10V10H6V6Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Copy12.displayName = 'Icon.Copy';

export default Copy12;

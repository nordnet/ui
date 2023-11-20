import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Popsicle32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M17.3213 9.77157C16.9205 9.23714 16.4431 9 16 9V7C17.2138 7 18.2364 7.65829 18.9213 8.57157C19.6061 9.48455 20 10.7 20 12H18C18 11.0909 17.7224 10.3063 17.3213 9.77157Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12C7 6.14463 10.8327 1 16 1C21.1673 1 25 6.14463 25 12C25 17.4709 21.6541 22.3213 17 22.9347V31H15V22.9347C10.3459 22.3213 7 17.4709 7 12ZM16 3C12.3307 3 9 6.80967 9 12C9 17.1903 12.3307 21 16 21C19.6693 21 23 17.1903 23 12C23 6.80967 19.6693 3 16 3Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Popsicle32.displayName = 'Icon.Popsicle';

export default Popsicle32;

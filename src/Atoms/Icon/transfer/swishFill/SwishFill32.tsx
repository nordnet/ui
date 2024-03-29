import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SwishFill32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M6.76574 27.8208L10.485 23.0604C10.2084 22.8788 9.93707 22.6844 9.6717 22.4771C4.44923 18.3969 3.52327 10.8555 7.60351 5.63304C9.91882 2.66957 13.3486 1.08956 16.8367 1.02266C12.1021 0.762555 7.32111 2.74596 4.18051 6.76575C-0.919801 13.2938 0.237649 22.7205 6.76574 27.8208Z"
        fill="currentColor"
      />
      <path
        d="M25.2356 4.18051L21.5163 8.94094C21.7929 9.1225 22.0643 9.3169 22.3296 9.52423C27.5521 13.6045 28.4781 21.1458 24.3978 26.3683C22.0825 29.3318 18.6528 30.9118 15.1646 30.9787C19.8992 31.2388 24.6802 29.2554 27.8208 25.2356C32.9211 18.7075 31.7637 9.28081 25.2356 4.18051Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

SwishFill32.displayName = 'Icon.SwishFill';

export default SwishFill32;

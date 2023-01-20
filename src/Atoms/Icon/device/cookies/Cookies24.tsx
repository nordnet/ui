import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Cookies24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 15V9h6v6H4Zm2-4h2v2H6v-2Z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M20 11h-8V9h8v2ZM12 15h6v-2h-6v2Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 20V4h24v16H0ZM2 6h20v12H2V6Z"
        clipRule="evenodd"
      />
    </IconBase>
  );
};

Cookies24.displayName = 'Icon.Cookies';

export default Cookies24;

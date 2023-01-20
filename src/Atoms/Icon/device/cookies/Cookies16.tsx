import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Cookies16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 10.5v-5h5v5H3Zm2-3h1v1H5v-1Z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13 7.5H9v-2h4v2ZM9 10.5h3v-2H9v2Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 14V2h16v12H0ZM2 4h12v8H2V4Z"
        clipRule="evenodd"
      />
    </IconBase>
  );
};

Cookies16.displayName = 'Icon.Cookies';

export default Cookies16;

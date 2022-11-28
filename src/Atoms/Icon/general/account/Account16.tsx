import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Account16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M13 9v2h-2V9h2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h13V4h-2V0H3Zm0 6a3 3 0 0 1-1-.17V13a1 1 0 0 0 1 1h11V6H3ZM2 3a1 1 0 0 0 1 1h9V2H3a1 1 0 0 0-1 1Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Account16.displayName = 'Icon.Account';

export default Account16;

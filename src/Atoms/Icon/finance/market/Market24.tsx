import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Market24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 1a3 3 0 00-3 3v19h19a3 3 0 003-3V1H4zM3 4a1 1 0 011-1h17v3.546l-7.11 6.222-5.02-3.012L3 15.206V4zm0 13.936V21h17a1 1 0 001-1V9.204l-6.89 6.028-4.98-2.988L3 17.936z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Market24.displayName = 'Icon.Market';

export default Market24;

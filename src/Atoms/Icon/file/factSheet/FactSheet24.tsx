import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const FactSheet24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M17 7h-4V5h4v2zM17 19H7v-2h10v2zM17 15H7v-2h10v2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 1h18v22H3V1zm2 20h14V3H5v18z"
        fill="currentColor"
      />
    </IconBase>
  );
};

FactSheet24.displayName = 'Icon.FactSheet';

export default FactSheet24;

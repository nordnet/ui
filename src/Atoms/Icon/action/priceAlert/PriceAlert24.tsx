import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PriceAlert24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1a2 2 0 00-1.846 1.229A7.503 7.503 0 004.5 9.5v3.963L3 16.099V20h6a3 3 0 106 0h6v-3.9l-1.5-2.637V9.5a7.503 7.503 0 00-5.654-7.271A2 2 0 0012 1zm1 19h-2a1 1 0 102 0zM12 4a5.5 5.5 0 00-5.5 5.5v4.492L5 16.628V18h14v-1.372l-1.5-2.636V9.5A5.5 5.5 0 0012 4z"
        fill="currentColor"
      />
    </IconBase>
  );
};

PriceAlert24.displayName = 'Icon.PriceAlert';

export default PriceAlert24;

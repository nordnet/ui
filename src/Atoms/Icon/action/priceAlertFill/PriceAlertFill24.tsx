import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PriceAlertFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M10.154 2.229a2 2 0 013.692 0A7.503 7.503 0 0119.5 9.5v3.963l1.5 2.636V20h-6a3 3 0 11-6 0H3v-3.9l1.5-2.637V9.5a7.503 7.503 0 015.654-7.271z"
        fill="currentColor"
      />
    </IconBase>
  );
};

PriceAlertFill24.displayName = 'Icon.PriceAlertFill';

export default PriceAlertFill24;

import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PriceAlertFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M9 1.083c2.838.476 5 2.944 5 5.917v3.586l1 1V14h-5a2 2 0 11-4 0H1v-2.414l1-1V7a6.002 6.002 0 015-5.917V0h2v1.083z"
        fill="currentColor"
      />
    </IconBase>
  );
};

PriceAlertFill16.displayName = 'Icon.PriceAlertFill';

export default PriceAlertFill16;

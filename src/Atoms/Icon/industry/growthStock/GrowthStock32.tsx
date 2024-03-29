import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const GrowthStock32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M15.265 28h2.309L28.781 8.59l.926 3.457 1.414-2.45-1.294-4.83-4.83 1.295-1.414 2.45 3.47-.93L15.265 28zM8.004 28l8.119-14h2.312l-8.12 14H8.005zM.991 28l5.715-10h2.303L3.295 28H.99z"
        fill="currentColor"
      />
    </IconBase>
  );
};

GrowthStock32.displayName = 'Icon.GrowthStock';

export default GrowthStock32;

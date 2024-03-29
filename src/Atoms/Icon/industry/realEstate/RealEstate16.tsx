import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const RealEstate16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={17}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.283.683L16 7.55V16h-2V8.449L8.235 3.317 2 8.471V14h3.03l-.04-4h6.002l.048 5.992-2 .016L9.008 12H7.01l.04 4H0V7.53L8.283.682z"
        fill="currentColor"
      />
    </IconBase>
  );
};

RealEstate16.displayName = 'Icon.RealEstate';

export default RealEstate16;

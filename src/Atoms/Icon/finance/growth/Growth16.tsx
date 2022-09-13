import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Growth16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M10 3V5.82843L12 3.82843V16H14V3.82843L16 5.82843V3L13 0L10 3Z M8 7H6V16H8V7Z M0 11H2V16H0V11Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Growth16.displayName = 'Icon.Growth';

export default Growth16;

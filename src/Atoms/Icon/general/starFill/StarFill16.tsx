import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const StarFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M8 .4L10.769 5 16 6.213l-3.52 4.055.464 5.35L8 13.522l-4.944 2.095.464-5.35L0 6.212l5.231-1.211L8 .4z"
        fill="currentColor"
      />
    </IconBase>
  );
};

StarFill16.displayName = 'Icon.StarFill';

export default StarFill16;

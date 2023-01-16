import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Transcript16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M6 1H0v2h6V1ZM16 5H0v2h16V5ZM0 9h10v2H0V9ZM14 13H0v2h14v-2Z" fill="currentColor" />
    </IconBase>
  );
};

Transcript16.displayName = 'Icon.Transcript';

export default Transcript16;

import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Add8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path d="M3 5v3h2V5h3V3H5V0H3v3H0v2h3z" fill="currentColor" />
    </IconBase>
  );
};

Add8.displayName = 'Icon.Add';

export default Add8;

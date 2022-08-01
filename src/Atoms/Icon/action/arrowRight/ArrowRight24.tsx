import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowRight24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="m19.17 13-6 6H16l7-7-7-7h-2.83l6 6H1v2h18.17Z" fill="currentColor" />
    </IconBase>
  );
};

ArrowRight24.displayName = 'Icon.ArrowRight';

export default ArrowRight24;

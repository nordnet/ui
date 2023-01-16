import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Play16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 1v14l12-7L3 1Zm2 3.482v7.036L11.03 8 5 4.482Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Play16.displayName = 'Icon.Play';

export default Play16;

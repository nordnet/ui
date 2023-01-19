import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Undo16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M8 3.5 9.5 5H6.672l-2.5-2.5 2.5-2.5H9.5L8 1.5a7 7 0 1 1-7 7h2a5 5 0 1 0 5-5Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Undo16.displayName = 'Icon.Undo';

export default Undo16;

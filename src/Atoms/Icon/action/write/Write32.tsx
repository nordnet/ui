import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Write32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M25.5858 2c.781-.781 2.0474-.781 2.8284 0L30 3.5858c.781.781.781 2.0473 0 2.8284L17.4142 19H13v-4.4142L25.5858 2Zm3 3L27 3.4142l-12 12V17h1.5858l12-12Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6 9c0-1.6569 1.3431-3 3-3h9l2-2H9C6.2386 4 4 6.2386 4 9v14c0 2.7614 2.2386 5 5 5h14c2.7614 0 5-2.2386 5-5V12l-2 2v9c0 1.6569-1.3431 3-3 3H9c-1.6569 0-3-1.3431-3-3V9Z"
      />
    </IconBase>
  );
};

Write32.displayName = 'Icon.Write';

export default Write32;

import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Write16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.4142 1c-.781-.781-2.0474-.781-2.8284 0L6 6.5858V10h3.4142L15 4.4142c.781-.781.781-2.0474 0-2.8284L14.4142 1ZM8 8v-.5858l5-5L13.5858 3l-5 5H8Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 5c0-.5523.4477-1 1-1h3l2-2H4C2.3432 2 1 3.3432 1 5v7c0 1.6569 1.3432 3 3 3h7c1.6569 0 3-1.3431 3-3V7l-2 2v3c0 .5523-.4477 1-1 1H4c-.5523 0-1-.4477-1-1V5Z"
      />
    </IconBase>
  );
};

Write16.displayName = 'Icon.Write';

export default Write16;

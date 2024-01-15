import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Write24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.8358 1.5c.781-.781 2.0474-.781 2.8284 0l.8358.8358c.781.781.781 2.0473 0 2.8284L13.1642 14.5H9.5v-3.6642L18.8358 1.5Zm2.25 2.25-.8358-.8358-8.75 8.75V12.5h.8358l8.75-8.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5 7c0-1.1046.8954-2 2-2h6l2-2H7C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V9l-2 2v6c0 1.1046-.8954 2-2 2H7c-1.1046 0-2-.8954-2-2V7Z"
      />
    </IconBase>
  );
};

Write24.displayName = 'Icon.Write';

export default Write24;

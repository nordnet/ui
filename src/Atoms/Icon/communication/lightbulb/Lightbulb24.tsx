import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Lightbulb24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M11 4V0h2v4h-2zM15 13a3 3 0 00-3-3v2a1 1 0 011 1h2zM8 22v2h8v-2H8zM3 4l2.828 2.828 1.415-1.414-2.829-2.828L3 4zM16.757 5.414l2.829-2.828L21 4l-2.828 2.828-1.415-1.414z"
        fill="currentColor"
      />
      <path
        d="M7 13a5 5 0 117.5 4.332l-.5.288V21h2v-2.255a7 7 0 10-8 0V21h2v-3.38l-.5-.288A4.998 4.998 0 017 13z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Lightbulb24.displayName = 'Icon.Lightbulb';

export default Lightbulb24;

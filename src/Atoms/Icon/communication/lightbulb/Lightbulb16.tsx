import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Lightbulb16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={12} height={16}>
      <path
        d="M2 6a4 4 0 1 1 5.6 3.668L7 9.93V13h2v-1.803a6 6 0 1 0-6 0V13h2V9.93l-.6-.262A4.001 4.001 0 0 1 2 6Z"
        fill="currentColor"
      />
      <path d="M7 6a1 1 0 0 0-1-1V3a3 3 0 0 1 3 3H7ZM3 16v-2h6v2H3Z" fill="currentColor" />
    </IconBase>
  );
};

Lightbulb16.displayName = 'Icon.Lightbulb';

export default Lightbulb16;

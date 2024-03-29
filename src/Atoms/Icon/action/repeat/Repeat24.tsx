import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Repeat24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M7.05 7.05a6.984 6.984 0 00-2.032 5.456H3.014a9 9 0 0115.35-6.87l.879.879V2.272l2 2V9.93h-5.657l-2-2h4.242l-.878-.879a7 7 0 00-9.9 0zM16.95 16.95a6.984 6.984 0 002.032-5.456h2.004a9 9 0 01-15.35 6.87l-.879-.879v4.243l-2-2V14.07h5.657l2 2H6.172l.878.879a7 7 0 009.9 0z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Repeat24.displayName = 'Icon.Repeat';

export default Repeat24;

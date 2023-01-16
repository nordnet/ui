import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SoundOff16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m1.707 15.707 14-14L14.293.293 10 4.586V1L3 5v6l.373.213-3.08 3.08 1.414 1.414ZM5 9.586V6.16l3-1.715v2.14l-3 3Z"
        fill="currentColor"
      />
      <path
        fill="currentColor"
        d="m10 9.414-2 2v.14l-.089-.051-1.466 1.466L10 15V9.414ZM2 11V5H0v6h2Z"
      />
    </IconBase>
  );
};

SoundOff16.displayName = 'Icon.SoundOff';

export default SoundOff16;

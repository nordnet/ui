import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SoundHigh16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 11V5l7-4v14l-7-4Zm2-1.16V6.16l3-1.714v7.108L5 9.839Z"
        fill="currentColor"
      />
      <path
        fill="currentColor"
        d="M2 11V5H0v6h2ZM14 8a3 3 0 0 0-3-3V3a5 5 0 0 1 0 10v-2a3 3 0 0 0 3-3Z"
      />
      <path fill="currentColor" d="M13 8a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2Z" />
    </IconBase>
  );
};

SoundHigh16.displayName = 'Icon.SoundHigh';

export default SoundHigh16;

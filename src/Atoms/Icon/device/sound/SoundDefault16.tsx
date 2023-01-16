import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SoundDefault16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 6.16v3.68l3 1.714V4.446L5 6.161ZM3 5v6l7 4V1L3 5ZM2 5v6H0V5h2Zm9 1a2 2 0 1 1 0 4v2a4 4 0 0 0 0-8v2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

SoundDefault16.displayName = 'Icon.SoundDefault';

export default SoundDefault16;

import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SlideDeck16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <g fill="none" fillRule="evenodd">
        <path d="M2 3h12v9h2V1H2v2Z" fill="currentColor" />
        <path d="M0 14V4h13v10H0Zm2-8h9v6H2V6Z" fill="currentColor" />
      </g>
    </IconBase>
  );
};

SlideDeck16.displayName = 'Icon.SlideDeck';

export default SlideDeck16;

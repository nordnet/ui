import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SlideDeck24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path fill="currentColor" d="M6 5h16v10h2V3H6v2Z" />
      <path fill="currentColor" d="M3 8h16v10h2V6H3v2Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 21V9h18v12H0Zm2-10h14v8H2v-8Z"
        clipRule="evenodd"
      />
    </IconBase>
  );
};

SlideDeck24.displayName = 'Icon.SlideDeck';

export default SlideDeck24;

import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Files24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path fill="currentColor" d="M6 1h16v18h-2V3H6V1Z" />
      <path fill="currentColor" d="M2 5h16v18h-2V7H4v16H2V5Z" />
      <path fill="currentColor" d="M14 21v2H6v-2h8ZM11 11h3V9h-3v2ZM6 19h8v-2H6v2Z" />
    </IconBase>
  );
};

Files24.displayName = 'Icon.Files';

export default Files24;

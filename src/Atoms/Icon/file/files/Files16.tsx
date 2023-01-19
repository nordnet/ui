import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Files16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path fill="currentColor" d="M4 0h12v12h-2V2H4V0Z" />
      <path fill="currentColor" d="M13 3H0v13h2V5h9v11h2V3Z" />
      <path fill="currentColor" d="M6 9h3V7H6v2ZM4 11v2h5v-2H4ZM4 14v2h5v-2H4Z" />
    </IconBase>
  );
};

Files16.displayName = 'Icon.Files';

export default Files16;

import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ExportIcon16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M5 3.086v2.828l2-2V12h2V3.914l2 2V3.086l-3-3-3 3z" fill="currentColor" />
      <path
        d="M2 13v-2H0v2a3 3 0 003 3h10a3 3 0 003-3v-2h-2v2a1 1 0 01-1 1H3a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ExportIcon16.displayName = 'Icon.ExportIcon';

export default ExportIcon16;

import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Clock16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M9 4v3h3v2H7V4h2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-2 0A6 6 0 112 8a6 6 0 0112 0z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Clock16.displayName = 'Icon.Clock';

export default Clock16;

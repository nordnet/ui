import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Test24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M20 1H2V23H4V3H18V15H20V1Z" fill="currentColor" />
      <path d="M13 13H6V15H13V13Z" fill="currentColor" />
      <path d="M6 5H10V7H6V5Z" fill="currentColor" />
      <path d="M6 11H16V9H6V11Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.58594 17H23.0002V23H9.58594L6.58594 20L9.58594 17ZM10.4144 19L9.41436 20L10.4144 21H18V19H10.4144ZM20 19V21H21.0002V19H20Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Test24.displayName = 'Icon.Test';

export default Test24;

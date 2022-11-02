import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Test16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M13 0H0V16H2V2H11V9H13V0Z" fill="currentColor" />
      <path d="M4 4H7V6H4V4Z" fill="currentColor" />
      <path d="M9 9H4V7H9V9Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0002 11H6.58594L4.08594 13.5L6.58594 16H16.0002V11ZM6.91436 13.5L7.41436 13H14.0002V14H7.41436L6.91436 13.5Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Test16.displayName = 'Icon.Test';

export default Test16;

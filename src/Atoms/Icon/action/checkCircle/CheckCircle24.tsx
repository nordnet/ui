import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const CheckCircle24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M9.54756 14.3316L6.41421 11.1983L5 12.6125L9.54756 17.1601L18.2934 8.41421L16.8792 7L9.54756 14.3316Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

CheckCircle24.displayName = 'Icon.CheckCircle';

export default CheckCircle24;

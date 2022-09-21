import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Area16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M5.02061 10.9794C2.20752 10.7365 0 8.37605 0 5.5C0 2.46243 2.46243 0 5.5 0C8.37605 0 10.7365 2.20752 10.9794 5.02061C13.7925 5.2635 16 7.62395 16 10.5C16 13.5376 13.5376 16 10.5 16C7.62395 16 5.2635 13.7925 5.02061 10.9794ZM7.01181 10.7896C7.15905 12.5871 8.66452 14 10.5 14C12.433 14 14 12.433 14 10.5C14 8.66452 12.5871 7.15905 10.7896 7.01181C10.2698 8.83394 8.83394 10.2698 7.01181 10.7896Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Area16.displayName = 'Icon.Area';

export default Area16;

import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SaveFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 1H7C5.3431 1 4 2.295 4 3.8923V23l8-4.8971L20 23V3.8923C20 2.2949 18.6569 1 17 1Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

SaveFill24.displayName = 'Icon.SaveFill';

export default SaveFill24;

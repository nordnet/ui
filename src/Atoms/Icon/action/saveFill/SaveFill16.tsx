import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SaveFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M2 3c0-1.6568 1.3432-3 3-3h6c1.6569 0 3 1.3432 3 3v13l-6-3-6 3V3Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

SaveFill16.displayName = 'Icon.SaveFill';

export default SaveFill16;

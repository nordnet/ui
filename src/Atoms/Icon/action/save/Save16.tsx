import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Save16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M2 3c0-1.6568 1.3432-3 3-3h6c1.6569 0 3 1.3432 3 3v13l-6-3-6 3V3Zm3-1c-.5523 0-1 .4477-1 1v9.7639l4-2 4 2V3c0-.5523-.4477-1-1-1H5Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Save16.displayName = 'Icon.Save';

export default Save16;

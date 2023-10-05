import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Check12: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={12} height={12}>
      <path
        d="M11.6536 3.16421L4.58248 10.2353L0.339844 5.99264L1.75406 4.57843L4.58248 7.40685L10.2393 1.75L11.6536 3.16421Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Check12.displayName = 'Icon.Check';

export default Check12;

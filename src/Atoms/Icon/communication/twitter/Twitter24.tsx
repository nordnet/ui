import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Twitter24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M13.895 10.47 21.335 2h-1.762l-6.464 7.353L7.951 2H2l7.802 11.12L2 22h1.763l6.82-7.766L16.034 22h5.95M4.4 3.302h2.707l12.465 17.46h-2.708"
        fill="currentColor"
      />
    </IconBase>
  );
};

Twitter24.displayName = 'Icon.Twitter';

export default Twitter24;

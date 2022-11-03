import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Mail16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 0H0v16h16V7.51l-2 1.43V14H2V8.94L0 7.51v-2l8 5.72 8-5.72V0ZM2 4.49V2h12v2.49L8 8.77 2 4.5Z"
        clipRule="evenodd"
      />
    </IconBase>
  );
};

Mail16.displayName = 'Icon.Mail';

export default Mail16;

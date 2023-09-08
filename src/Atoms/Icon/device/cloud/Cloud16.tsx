import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Cloud16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.2517 4.50673C5.25926 3.28284 6.78804 2.5 8.5 2.5C11.117 2.5 13.3061 4.32704 13.863 6.77566C15.1189 7.30718 16 8.5499 16 10C16 11.933 14.433 13.5 12.5 13.5H4.5C2.01472 13.5 0 11.4853 0 9C0 6.59803 1.8819 4.63561 4.2517 4.50673ZM8.5 4.5C7.28448 4.5 6.21307 5.11879 5.58415 6.0632L5.26152 6.54768L4.68091 6.5064C4.62131 6.50217 4.56099 6.5 4.5 6.5C3.11929 6.5 2 7.61929 2 9C2 10.3807 3.11929 11.5 4.5 11.5H12.5C13.3284 11.5 14 10.8284 14 10C14 9.27063 13.4784 8.66091 12.7875 8.52734L12.0566 8.38603L11.9823 7.64531C11.8052 5.87939 10.3131 4.5 8.5 4.5Z"
        fill="currentcolor"
      />
    </IconBase>
  );
};

Cloud16.displayName = 'Icon.Cloud';

export default Cloud16;

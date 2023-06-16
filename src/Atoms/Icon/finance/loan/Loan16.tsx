import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Loan16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0H4V8H0V16H12V8H6V2H14V16H16V0ZM2 14V10H10V14H2Z 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Loan16.displayName = 'Icon.Loan';

export default Loan16;

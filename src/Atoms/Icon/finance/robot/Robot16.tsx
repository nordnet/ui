import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Robot16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M10.25 9C10.9404 9 11.5 8.44036 11.5 7.75C11.5 7.05964 10.9404 6.5 10.25 6.5C9.55964 6.5 9 7.05964 9 7.75C9 8.44036 9.55964 9 10.25 9Z"
        fill="currentColor"
      />
      <path d="M11 11C11 12.1046 9.75 13 8 13C6.25 13 5 12.1046 5 11L11 11Z" fill="currentColor" />
      <path
        d="M7 7.75C7 8.44036 6.44036 9 5.75 9C5.05964 9 4.5 8.44036 4.5 7.75C4.5 7.05964 5.05964 6.5 5.75 6.5C6.44036 6.5 7 7.05964 7 7.75Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2.61805C9.30687 2.34339 9.5 1.94425 9.5 1.5C9.5 0.671573 8.82843 0 8 0C7.17157 0 6.5 0.671573 6.5 1.5C6.5 1.94425 6.69313 2.34339 7 2.61805V3H4C2.34315 3 1 4.34315 1 6V8H0V12H1V13C1 14.6569 2.34315 16 4 16H12C13.6569 16 15 14.6569 15 13V12H16V8H15V6C15 4.34315 13.6569 3 12 3H9V2.61805ZM13 13C13 13.5523 12.5523 14 12 14H4C3.44772 14 3 13.5523 3 13V6C3 5.44772 3.44772 5 4 5H12C12.5523 5 13 5.44772 13 6V13Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Robot16.displayName = 'Icon.Controls';

export default Robot16;

import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Pension24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M6 12.5C5.72386 12.5 5.5 12.2761 5.5 12H3.5C3.5 13.3807 4.61929 14.5 6 14.5V12.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13H0.553167C0.917089 15.5442 3.10515 17.5 5.75 17.5C8.6495 17.5 11 15.1495 11 12.25C11 12.1662 10.998 12.0828 10.9942 12H11C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12H13.0058C13.002 12.0828 13 12.1662 13 12.25C13 15.1495 15.3505 17.5 18.25 17.5C20.8949 17.5 23.0829 15.5442 23.4468 13H24V11H23.3503C22.7895 8.70399 20.7187 7 18.25 7C16.3348 7 14.6591 8.02552 13.7421 9.55739C13.251 9.20648 12.6496 9 12 9C11.3504 9 10.749 9.20648 10.2579 9.55739C9.34088 8.02552 7.6652 7 5.75 7C3.28126 7 1.2105 8.70399 0.649723 11H0V13ZM5.75 9C3.95507 9 2.5 10.4551 2.5 12.25C2.5 14.0449 3.95507 15.5 5.75 15.5C7.54493 15.5 9 14.0449 9 12.25C9 10.4551 7.54493 9 5.75 9ZM15 12.25C15 10.4551 16.4551 9 18.25 9C20.0449 9 21.5 10.4551 21.5 12.25C21.5 14.0449 20.0449 15.5 18.25 15.5C16.4551 15.5 15 14.0449 15 12.25Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Pension24.displayName = 'Icon.Pension';

export default Pension24;

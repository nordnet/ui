import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

// ! The Check12 icon is a snowflake, we usually do 8px, 16px, 24px or 32px.
// ! Used in rare cases, avoid if possible
const Check12: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={12} height={12}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m11.654 3.164-7.072 7.071L.34 5.993l1.414-1.415 2.828 2.829L10.24 1.75l1.415 1.414Z"
        clipRule="evenodd"
      />
    </IconBase>
  );
};

Check12.displayName = 'Icon.Check';

export default Check12;

import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Pension64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path d="M16 38c-4 0-6-3.79-6-6H8a8 8 0 0 0 8 8v-2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.003 26.801C26.939 21.643 21.895 18 16 18 8.947 18 2.97 23.715 2 30.5H0v3h2C2.97 40.285 8.947 46 16 46c7.732 0 14-6.268 14-14 0-1.105.895-3 2-3s2 1.895 2 3c0 7.732 6.268 14 14 14 7.053 0 13.03-5.715 14-12.5h2V31h-2c-.97-6.785-6.947-13-14-13-5.895 0-10.939 3.643-13.003 8.801A5.973 5.973 0 0 0 32 26a5.973 5.973 0 0 0-2.997.801ZM4 32c-.5-5.5 6.5-12.5 12-12 5.5-.5 12.5 6.5 12 12 .5 5.5-6.5 12.5-12 12-5.5.5-12.5-6.5-12-12Zm32.5 0C36 26.5 41.294 19.707 48 20c7.5.5 12.302 6.801 12 12 0 7.215-6.5 12.5-12 12-5.5.5-12-6.5-11.5-12Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Pension64;

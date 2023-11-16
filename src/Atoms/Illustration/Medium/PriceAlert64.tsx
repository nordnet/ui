import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const PriceAlert64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M40 23a5 5 0 0 0-5-5v-2a7 7 0 0 1 7 7h-2Z" />
        <path
          fillRule="evenodd"
          d="M35.96 8.437C43.997 10.242 50 17.42 50 26v10.764l4 8V54H37.917a6.002 6.002 0 0 1-11.834 0H10v-9.236l4-8V26c0-8.58 6.004-15.758 14.04-17.563a4 4 0 0 1 7.92 0Zm-2.18-.35a2 2 0 0 0-3.56 0 18.218 18.218 0 0 1 3.56 0ZM28.126 54a4.002 4.002 0 0 0 7.748 0h-7.748ZM16 26c0-8.837 7.163-16 16-16s16 7.163 16 16v11.236l4 8V52H12v-6.764l4-8V26Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h64v64H0z" />
        </clipPath>
      </defs>
    </IllustrationBase>
  );
};

export default PriceAlert64;

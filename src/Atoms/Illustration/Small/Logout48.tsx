import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Logout64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2a7 7 0 0 0-7 7v30a7 7 0 0 0 7 7h23V34h-2v10H16a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5h21v10h2V2H16Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="m41.157 23-5-5h2.828L45 24.015 39.015 30h-2.829l5-5H25v-2h16.157Z"
      />
      <clipPath id="a">
        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M0 0h48v48H0z" />
      </clipPath>
    </IllustrationBase>
  );
};

export default Logout64;

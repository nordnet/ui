import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const TestFail64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        fill="currentColor"
        d="M29 33h-2v-2h2v2Zm-2.3 3.7-1.4-1.4 1.4-1.4 1.4 1.4-1.4 1.4Zm1.4-8-1.4 1.4-1.4-1.4 1.4-1.4 1.4 1.4ZM19 33.4l-2.3 2.3-1.4-1.4 2.3-2.3-2.3-2.3 1.4-1.4 2.3 2.3 2.3-2.3 1.4 1.4-2.3 2.3 2.3 2.3-1.4 1.4-2.3-2.3Zm-2.3-11.7 2.3-2.3 2.3 2.3 1.4-1.4-2.3-2.3 2.3-2.3-1.4-1.4-2.3 2.3-2.3-2.3-1.4 1.4 2.3 2.3-2.3 2.3 1.4 1.4Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M24 41v10H14V41h10Zm-8 2v6h6v-6h-6Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M49 15.6 38.4 5H7v54h50V49h-8V15.6ZM47 49V17H37V7H9v50h19.1l-3.7-3 6.2-5H47Zm-1.4-34L39 8.4V15h6.6Zm-18 39 3.4-2.7v5.4L27.6 54ZM51 51H33v6h18v-6Zm2 6h2v-6h-2v6Z"
        clipRule="evenodd"
      />
    </IllustrationBase>
  );
};

export default TestFail64;

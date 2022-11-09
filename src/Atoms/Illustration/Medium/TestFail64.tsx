import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const TestFail64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        fill="currentColor"
        d="m29 33.0004-2.0001-.0002.0002-2 2 .0002-.0001 2Zm-2.2929 3.7111-1.4142-1.4144 1.4144-1.4141 1.4141 1.4144-1.4143 1.4141Zm1.4143-8.0042-1.4143 1.4141-1.4141-1.4143 1.4143-1.4141 1.4141 1.4143ZM19 33.4142l-2.2929 2.2929-1.4142-1.4142L17.5858 32l-2.2929-2.2929 1.4142-1.4142L19 30.5858l2.2929-2.2929 1.4142 1.4142L20.4142 32l2.2929 2.2929-1.4142 1.4142L19 33.4142Zm-2.2929-11.7071L19 19.4142l2.2929 2.2929 1.4142-1.4142L20.4142 18l2.2929-2.2929-1.4142-1.4142L19 16.5858l-2.2929-2.2929-1.4142 1.4142L17.5858 18l-2.2929 2.2929 1.4142 1.4142Z"
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
        d="M49 15.5858 38.4142 5 7 5.0001v54L57 59V49h-8V15.5858ZM47 49V17H37V7L9 7.0001v50h19.1494L24.3992 54l6.25-5H47Zm-1.4142-34L39 8.4142V15h6.5858Zm-17.985 39L31 51.2806v5.4388L27.6008 54ZM51 51H33v6h18v-6Zm2 6h2v-6h-2v6Z"
        clipRule="evenodd"
      />
    </IllustrationBase>
  );
};

export default TestFail64;

import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const TestSuccess64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        fill="currentColor"
        d="M31 46h-2v2h2v-2Zm.3-3.7 1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4Zm0 6.6-1.4 1.4 1.4 1.4 1.4-1.4-1.4-1.4ZM17.8 19.4l-2-2.1-1.5 1.4 3.5 3.5 5.7-5.6-1.4-1.4-4.3 4.2Zm-2 11.9 2 2.1 4.3-4.2 1.4 1.4-5.7 5.6-3.5-3.5 1.4-1.4Zm2 16.1-2-2.1-1.5 1.4 3.5 3.5 5.7-5.6-1.4-1.4-4.3 4.2Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M38.4 5 49 15.6v13.2l4.2-4.2 7 7L49 43v16H7V5h31.4ZM47 45l-5.3 5.3-8 .9.9-8L47 30.8V17H37V7H9v50h38V45ZM39 8.3l6.6 6.6H39V8.4Zm1.3 40L36 49l.4-4.3 3.9 3.8Zm1.6-1.2L37.7 43l12.7-12.8 4.2 4.3L42 47.2Zm14.1-14-4.2-4.3 1.4-1.4 4.3 4.3L56 33Z"
        clipRule="evenodd"
      />
    </IllustrationBase>
  );
};

export default TestSuccess64;

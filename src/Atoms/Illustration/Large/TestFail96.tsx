import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const TestFail96: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={96} height={96}>
      <path
        d="M40.5 49.5h3v-3h-3v3ZM40.06 55.067l-2.12-2.121 2.12-2.121 2.122 2.121-2.121 2.121ZM40.06 45.182l2.122-2.121-2.121-2.122-2.122 2.122 2.122 2.121ZM28.5 50.121l-3.44 3.44-2.12-2.122L26.378 48l-3.44-3.44 2.122-2.12 3.439 3.439 3.44-3.44 2.12 2.122L30.622 48l3.44 3.44-2.122 2.12-3.439-3.439ZM28.5 29.121l-3.44 3.44-2.12-2.122L26.378 27l-3.44-3.44 2.122-2.12 3.439 3.439 3.44-3.44 2.12 2.122L30.622 27l3.44 3.44-2.122 2.12-3.439-3.439Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 61.5v15H21v-15h15Zm-12 3v9h9v-9h-9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57.621 7.5 73.5 23.379V73.5h12v15h-75v-81h47.121Zm-15.397 78L36.599 81l9.375-7.5H70.5v-48h-15v-15h-42v75h28.724ZM58.5 12.621l9.879 9.879H58.5v-9.879Zm-12 72.458L41.401 81l5.099-4.08v8.16Zm3 .421h27v-9h-27v9Zm33 0h-3v-9h3v9Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default TestFail96;

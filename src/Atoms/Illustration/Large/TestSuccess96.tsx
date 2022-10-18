import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const TestSuccess96: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={96} height={96}>
      <path
        d="M46.5 69.006h-3v3h3v-3ZM46.94 63.44l2.12 2.12-2.12 2.122-2.122-2.121 2.121-2.122ZM46.94 73.325l-2.122 2.12 2.121 2.122 2.122-2.121-2.122-2.121ZM26.743 29.121 23.56 25.94l-2.122 2.122 5.304 5.303 8.485-8.485-2.121-2.122-6.364 6.364ZM23.56 46.94l3.183 3.181 6.364-6.364 2.12 2.122-8.484 8.485-5.304-5.303 2.122-2.122ZM26.743 71.121 23.56 67.94l-2.122 2.122 5.304 5.303 8.485-8.485-2.121-2.122-6.364 6.364Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57.621 7.5 73.5 23.379v19.82l6.32-6.32 10.606 10.607L73.5 64.412V88.5h-63v-81h47.121ZM70.5 67.412l-8.023 8.023-11.932 1.326 1.326-11.933L70.5 46.198V25.5h-15v-15h-42v75h57V67.412Zm-12-54.79 9.879 9.878H58.5v-9.879Zm1.93 60.022-6.49.721.722-6.49 5.768 5.769Zm2.42-1.824-6.365-6.364 19.092-19.092 6.364 6.364L62.85 70.82Zm21.212-21.213-6.364-6.364 2.122-2.121 6.364 6.364-2.122 2.121Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default TestSuccess96;

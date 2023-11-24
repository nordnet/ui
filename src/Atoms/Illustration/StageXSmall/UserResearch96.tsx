import React from 'react';
import { useTheme } from 'styled-components';

import { IllustrationBase, getColor } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const UserResearch96: React.FC<IllustrationProps> = (props) => {
  const theme = useTheme();
  const secondaryIllustrationColor = getColor(
    theme,
    theme.colorTokens.neutral.background_medium,
    props.secondaryColor,
  );
  return (
    <IllustrationBase {...props} width={96} height={64}>
      <path
        fill={secondaryIllustrationColor}
        fillRule="evenodd"
        d="M48 7c26.51 0 48 21.396 48 47.79V55H.001L0 54.79C0 28.66 21.063 7.427 47.206 7.005L48 7Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M62 15h12v-2H62v2ZM82 19H68v-2h14v2ZM76 15h6v-2h-6v2ZM66 19h-4v-2h4v2Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M58 23V9h28v14H58Zm2-12h24v10H60V11Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M48 11c2.874 0 5.59.673 8 1.871v2.27A15.927 15.927 0 0 0 48 13c-8.837 0-16 7.163-16 16 0 3.784 1.313 7.26 3.51 10H33.03A17.916 17.916 0 0 1 30 29c0-9.941 8.059-18 18-18ZM64 29c0-1.381-.175-2.721-.504-4h2.058A18.06 18.06 0 0 1 66 29c0 4.61-1.734 8.817-4.584 12.001l3.705 3.706 2.122-2.121 6.364 6.364-1.415 1.414-4.95-4.95-2.828 2.829 4.95 4.95-1.414 1.414-6.364-6.364 2.121-2.122-3.706-3.706A17.933 17.933 0 0 1 48 47a18.06 18.06 0 0 1-4-.446v-2.058c1.279.329 2.619.504 4 .504 8.837 0 16-7.163 16-16Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M48 29a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M38 34a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3h-2v-3a1 1 0 0 0-1-1H41a1 1 0 0 0-1 1v3h-2v-3ZM30 47H18v-2h12v2ZM24 51h14v-2H24v2ZM32 47h6v-2h-6v2ZM18 51h4v-2h-4v2Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 55V41h28v14H14Zm2-12h24v10H16V43Z"
        clipRule="evenodd"
      />
    </IllustrationBase>
  );
};

export default UserResearch96;

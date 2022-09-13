import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Auto16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M5 9C5.55228 9 6 8.55228 6 8C6 7.44772 5.55228 7 5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 1H3V4.25716C2.02273 5.06425 1.32903 6.20246 1.09069 7.5H0V10.5H1.37494C1.86616 11.7578 2.80706 12.7905 4 13.4003V15H7V14H9V15H12V13.4003C13.7808 12.4899 15 10.6373 15 8.5C15 8.24907 14.9832 8.00207 14.9507 7.76005C15.5756 7.42181 16 6.76047 16 6C16 4.89543 15.1046 4 14 4V5.33692C13.0046 3.92345 11.3602 3 9.5 3H6.94999C6.71836 1.85888 5.70948 1 4.5 1ZM3 8.5C3 6.567 4.567 5 6.5 5H9.5C11.433 5 13 6.567 13 8.5C13 10.433 11.433 12 9.5 12H6.5C4.567 12 3 10.433 3 8.5Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Auto16.displayName = 'Icon.Controls';

export default Auto16;

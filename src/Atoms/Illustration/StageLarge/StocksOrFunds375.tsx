import React from 'react';
import { useTheme } from 'styled-components';

import { IllustrationBase, getColor } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const StocksOrFunds375: React.FC<IllustrationProps> = (props) => {
  const theme = useTheme();
  const secondaryIllustrationColor = getColor(
    theme,
    theme.colorTokens.positive.icon_brand,
    props.secondaryColor,
  );
  return (
    <IllustrationBase {...props} width={375} height={240}>
      <path
        d="M188 56C98.1276 56 25.1936 129.306 24.5 220H351.5C350.806 129.306 277.872 56 188 56Z"
        fill={secondaryIllustrationColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M132.999 134.438L146.577 174.459L160.273 134.533L183.7 202.775L163.498 202.775L163.499 219.999H157.499L157.498 202.775H135.998L135.999 219.999H129.999L129.998 202.775H108.498L108.499 219.999H102.499L102.498 202.775L82.2969 202.775L105.724 134.533L119.42 174.457L132.999 134.438ZM253.992 45.8555L292.422 187.299L256.998 187.298L256.999 219.999H250.999L250.998 187.298L215.575 187.299L253.992 45.8555ZM105.722 153.017L90.6996 196.775H111.848L116.266 183.753L105.722 153.017ZM160.275 153.017L149.731 183.755L154.148 196.775H175.297L160.275 153.017ZM132.999 153.11L118.184 196.775H147.813L132.999 153.11ZM253.993 68.7422L223.422 181.299H284.574L253.993 68.7422Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default StocksOrFunds375;

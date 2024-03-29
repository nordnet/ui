import React from 'react';
import { useTheme } from 'styled-components';

import { IllustrationBase, getColor } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Diversification375: React.FC<IllustrationProps> = (props) => {
  const theme = useTheme();
  const secondaryIllustrationColor = getColor(
    theme,
    theme.colorTokens.negative.icon_brand,
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
        d="M278.5 60.9994C292.413 60.9994 303.281 75.7042 303.497 93.6084L303.5 94.1519V149.847C303.5 166.669 294.072 180.807 281.5 182.768L281.5 219.999H275.5L275.499 182.768C263.044 180.83 253.689 166.963 253.503 150.351L253.5 149.847V94.1519C253.5 76.0165 264.458 60.9994 278.5 60.9994ZM113 100.999C135.368 100.999 153.5 119.132 153.5 141.499C153.5 162.858 136.967 180.354 116.001 181.89L116 219.999H110L110 181.89C89.0333 180.355 72.5 162.858 72.5 141.499C72.5 119.132 90.6325 100.999 113 100.999ZM198.007 53.0977L234.928 188.499L200.999 188.499L201 219.999H195L194.999 188.499L161.072 188.499L198.007 53.0977ZM198.005 75.9014L168.928 182.499H227.072L198.005 75.9014ZM278.5 66.9994C268.356 66.9994 259.675 78.7566 259.503 93.6982L259.5 94.1519V149.847C259.5 165.017 268.242 176.999 278.5 176.999C288.644 176.999 297.325 165.242 297.497 150.301L297.5 149.847V94.1519C297.5 78.9816 288.758 66.9994 278.5 66.9994ZM113 106.999C93.9462 106.999 78.5 122.446 78.5 141.499C78.5 160.553 93.9462 175.999 113 175.999C132.054 175.999 147.5 160.553 147.5 141.499C147.5 122.446 132.054 106.999 113 106.999Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Diversification375;

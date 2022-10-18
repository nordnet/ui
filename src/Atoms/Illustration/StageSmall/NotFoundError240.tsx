import React from 'react';
import { useTheme } from 'styled-components';

import { IllustrationBase, getColor } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const NotFoundError240: React.FC<IllustrationProps> = (props) => {
  const theme = useTheme();
  const secondaryIllustrationColor = getColor(theme, theme.color.negative, props.secondaryColor);

  return (
    <IllustrationBase {...props} width={240} height={160}>
      <g fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M120 23C182.96 23 234 73.8157 234 136.5C234 136.667 234 136.834 233.999 137.001L6.00402 137L6 136.5C6 74.4425 56.0238 24.0175 118.115 23.0152L120 23Z"
          fill={secondaryIllustrationColor}
        />
        <path d="M201.751 113.003L207.838 105" stroke="currentColor" strokeWidth="4" />
        <path d="M206.062 119.7L215.527 116.303" stroke="currentColor" strokeWidth="4" />
        <path d="M193.21 112.012L192.379 101.991" stroke="currentColor" strokeWidth="4" />
        <path d="M62.5 32V120H150.5" stroke="currentColor" strokeWidth="4" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M192.5 133L178.5 133L182.5 137L196.5 137L196.5 123L192.5 119L192.5 133Z"
          fill="currentColor"
        />
        <path d="M62 75L98 39L194 135" stroke="currentColor" strokeWidth="4" />
        <line x1="77.5" y1="119" x2="77.5" y2="95" stroke="currentColor" strokeWidth="4" />
        <line x1="137.5" y1="119" x2="137.5" y2="103" stroke="currentColor" strokeWidth="4" />
        <line x1="117.5" y1="119" x2="117.5" y2="87" stroke="currentColor" strokeWidth="4" />
        <line x1="97.5" y1="119" x2="97.5" y2="71" stroke="currentColor" strokeWidth="4" />
      </g>
    </IllustrationBase>
  );
};

export default NotFoundError240;

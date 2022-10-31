import React from 'react';
import { useTheme } from 'styled-components';

import { IllustrationBase, getColor } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Shareville240: React.FC<IllustrationProps> = (props) => {
  const theme = useTheme();
  const primaryIllustrationColor = getColor(
    theme,
    theme.color.actionModalSharevilleIllustration,
    props.color,
  );
  const secondaryIllustrationColor = getColor(
    theme,
    theme.color.actionModalBackground,
    props.secondaryColor,
  );

  return (
    <IllustrationBase {...props} width={240} height={160}>
      <g fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M120 23C182.96 23 234 73.8157 234 136.5C234 136.667 234 136.834 233.999 137.001L6.00402 137L6 136.5C6 74.4425 56.0238 24.0175 118.115 23.0152L120 23Z"
          fill={secondaryIllustrationColor}
        />
        <path d="M158.251 79.0031L164.338 71" stroke={primaryIllustrationColor} strokeWidth="4" />
        <path
          d="M162.562 85.6996L172.027 82.3033"
          stroke={primaryIllustrationColor}
          strokeWidth="4"
        />
        <path
          d="M149.71 78.0121L148.879 67.9911"
          stroke={primaryIllustrationColor}
          strokeWidth="4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38 33H109V73H53L38 83V33Z"
          stroke={primaryIllustrationColor}
          strokeWidth="4"
        />
        <path
          d="M53.46 60.86C57.06 60.86 59.2 59.02 59.2 56.34C59.2 53.8 57.5 52.78 54.1 51.92C51.76 51.34 50.76 51.06 50.76 50.06C50.76 49.22 51.48 48.58 52.96 48.58C54.62 48.58 55.64 49.36 55.82 50.4H58.88C58.6 47.38 55.92 45.96 53.06 45.96C49.62 45.96 47.66 47.88 47.66 50.22C47.66 52.36 48.76 53.6 52.62 54.6C54.74 55.14 56.1 55.38 56.1 56.58C56.1 57.64 55.12 58.22 53.58 58.22C52.02 58.22 50.54 57.62 50.3 56.16H47.18C47.34 58.98 49.64 60.86 53.46 60.86ZM62.7 60.5L63.7 57.4H69.52L70.52 60.5H73.82L68.94 46.3H64.4L59.56 60.5H62.7ZM68.66 54.8H64.56L66.62 48.48L68.66 54.8ZM82.68 60.5L87.06 46.3H83.84L80.48 58.16L77.1 46.3H73.84L78.2 60.5H82.68ZM98.64 60.5V57.86H91.38V54.48H97.98V51.82H91.38V48.94H98.4V46.3H88.22V60.5H98.64Z"
          fill={primaryIllustrationColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M203 20H132V60H188L203 70V20Z"
          stroke={primaryIllustrationColor}
          strokeWidth="4"
        />
        <path
          d="M144.16 47.5L145.16 44.4H150.98L151.98 47.5H155.28L150.4 33.3H145.86L141.02 47.5H144.16ZM150.12 41.8H146.02L148.08 35.48L150.12 41.8ZM158.44 47.5L159.44 44.4H165.26L166.26 47.5H169.56L164.68 33.3H160.14L155.3 47.5H158.44ZM164.4 41.8H160.3L162.36 35.48L164.4 41.8ZM173.86 47.5V42.4H177.48C180.36 42.4 182.18 40.56 182.18 37.86C182.18 35.16 180.36 33.3 177.48 33.3H170.7V47.5H173.86ZM176.88 39.8H173.84V35.9H176.88C178.2 35.9 179.04 36.6 179.04 37.86C179.04 39.1 178.2 39.8 176.88 39.8ZM193.28 47.5V44.8H186.82V33.3H183.66V47.5H193.28Z"
          fill={primaryIllustrationColor}
        />
        <path d="M153 85H87V127H153V85Z" stroke={primaryIllustrationColor} strokeWidth="4" />
        <path d="M127 127H113V136H127V127Z" stroke={primaryIllustrationColor} strokeWidth="4" />
        <path
          d="M87 118H153"
          stroke={primaryIllustrationColor}
          strokeWidth="4"
          strokeLinecap="square"
        />
        <path
          d="M104 136H136"
          stroke={primaryIllustrationColor}
          strokeWidth="4"
          strokeLinecap="square"
        />
      </g>
    </IllustrationBase>
  );
};

export default Shareville240;

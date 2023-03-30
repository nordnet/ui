import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Theme } from '../../../theme/theme.types';
import { UnderlineAnimationProps } from './AnimatedUnderline.types';

const getLeftAndRight = (theme: Theme, gutter: UnderlineAnimationProps['gutter']) => {
  return gutter
    ? `
    left: ${theme.spacing.unit(gutter / 2)}px;
    right: ${theme.spacing.unit(gutter / 2)}px;
    `
    : '';
};

export const UnderlineAnimation = styled(motion.div)<UnderlineAnimationProps>`
  bottom: 0;
  height: 2px;
  position: absolute;

  &::after {
    background: ${(p) => p.theme.color.cta};
    content: '';
    position: absolute;
    bottom: 0;
    top: 0;

    ${(p) => getLeftAndRight(p.theme, p.gutter)}

    ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
      ${(p) => getLeftAndRight(p.theme, p.sm?.gutter)}
    }
  }
`;

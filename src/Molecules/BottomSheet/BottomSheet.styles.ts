import { darkTheme, lightTheme } from '@nordnet/design-tokens';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Button, Flexbox } from '../..';
import { Theme } from '../../theme/theme.types';
import { DRAG_BOTTOM_HEIGHT, TRANSITION_DURATION } from './constants';

const getNeutralColor = (colorToken: string, theme: Theme, invertedColors?: boolean) => {
  if (invertedColors) {
    return theme.isDarkMode
      ? lightTheme.color.neutral[colorToken]
      : darkTheme.color.neutral[colorToken];
  }
  return theme.colorTokens.neutral[colorToken];
};

const getActionColor = (colorToken: string, theme: Theme, invertedColors?: boolean) => {
  if (invertedColors) {
    return theme.isDarkMode
      ? lightTheme.color.action[colorToken]
      : darkTheme.color.action[colorToken];
  }
  return theme.colorTokens.action[colorToken];
};

export const StyledIconButton = styled(Button.Icon)<{
  $fullScreenMobile?: boolean;
  $invertedColors?: boolean;
}>`
  background-color: ${(p) => getNeutralColor('background_strong', p.theme, p.$invertedColors)};
  color: ${(p) => getNeutralColor('icon_default', p.theme, p.$invertedColors)};

  svg {
    color: ${(p) => getNeutralColor('icon_default', p.theme, p.$invertedColors)};
  }

  &:hover {
    background-color: ${(p) => getNeutralColor('background_strong', p.theme, p.$invertedColors)};

    svg {
      color: ${(p) => getActionColor('icon_hover', p.theme, p.$invertedColors)};
    }
  }

  &:active {
    background-color: ${(p) => getNeutralColor('background_weak', p.theme, p.$invertedColors)};

    svg {
      color: ${(p) => getActionColor('icon_pressed', p.theme, p.$invertedColors)};
    }
  }
`;

export const Backdrop = styled(Flexbox)`
  background-color: ${({ theme }) => theme.colorTokens.neutral.background_overlay};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.overlay};
`;

const getHeight = (height?: number | string, fullScreenMobile?: boolean) => {
  if (fullScreenMobile) {
    return `height: calc(100% + ${DRAG_BOTTOM_HEIGHT}px)`;
  }
  if (height && typeof height === 'number') {
    return `height: ${height + DRAG_BOTTOM_HEIGHT}px`;
  }
  if (height && typeof height === 'string') {
    return `height: calc(${height} + ${DRAG_BOTTOM_HEIGHT}px)`;
  }
  return '';
};

export const StyledBottomSheet = styled(motion.div)<{
  height?: number | string;
  $fullScreenMobile?: boolean;
  $invertedColors?: boolean;
}>`
  background-color: ${(p) => getNeutralColor('background_default', p.theme, p.$invertedColors)};
  border-radius: ${({ theme }) => `${theme.borderRadius20} ${theme.borderRadius20} 0 0`};
  margin-bottom: -${DRAG_BOTTOM_HEIGHT}px;
  border-bottom: ${DRAG_BOTTOM_HEIGHT}px solid
    ${(p) => getNeutralColor('background_default', p.theme, p.$invertedColors)};
  box-sizing: border-box;
  color: ${(p) => getNeutralColor('text_default', p.theme, p.$invertedColors)};
  ${(p) => getHeight(p.height, p.$fullScreenMobile)};
  transition: height ${TRANSITION_DURATION}s ease-out;
  left: 0;
  padding: ${(p) => p.theme.spacing.unit(2)}px ${(p) => p.theme.spacing.unit(4)}px
    ${(p) => p.theme.spacing.unit(3)}px;
  position: fixed;
  bottom: -100%;
  width: 100%;
  z-index: ${(p) => p.theme.zIndex.overlayInModal};
`;

export const Handle = styled.div`
  background-color: ${({ theme }) => theme.colorTokens.neutral.icon_disabled};
  border-radius: ${({ theme }) => theme.borderRadius20};
  height: 4px;
  margin-bottom: ${({ theme }) => theme.spacing.unit(1)}px;
  width: 54px;
`;

export const DragHandle = styled.div`
  display: flex;
  justify-content: center;
  touch-action: manipulation;
`;

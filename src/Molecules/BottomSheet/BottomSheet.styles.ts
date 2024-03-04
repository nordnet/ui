import { darkTheme, lightTheme } from '@nordnet/design-tokens';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Button, Flexbox } from '../..';
import { Theme } from '../../theme/theme.types';
import { TRANSITION_DURATION } from './constants';

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
    return 'height: 100%';
  }
  if (height && typeof height === 'number') {
    return `height: ${height}px`;
  }
  if (height && typeof height === 'string') {
    return `height: ${height}`;
  }
  return '';
};

export const StyledBottomSheet = styled(motion.div)<{
  height?: number | string;
  $fullScreenMobile?: boolean;
  $invertedColors?: boolean;
}>`
  background-color: ${(p) => getNeutralColor('background_default', p.theme, p.$invertedColors)};
  border-color: ${(p) => getNeutralColor('background_default', p.theme, p.$invertedColors)};
  border-radius: ${({ theme }) => `${theme.borderRadius20} ${theme.borderRadius20} 0 0`};
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
  margin-bottom: ${(p) => p.theme.spacing.unit(1)}px;
  width: 54px;
`;

export const DragHandle = styled.div`
  display: flex;
  justify-content: center;
  touch-action: manipulation;
`;

export const BottomDragArea = styled.div`
  margin-left: ${(p) => p.theme.spacing.unit(-5)}px;
  padding-right: ${(p) => p.theme.spacing.unit(10)}px;
  background: ${({ theme }) => theme.colorTokens.neutral.background_default};
  width: 100%;
  height: 100dvh;
`;

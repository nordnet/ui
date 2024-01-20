import { darkTheme, lightTheme } from '@nordnet/design-tokens';
import styled from 'styled-components';

import { Button, Flexbox } from '../..';
import { Theme } from '../../theme/theme.types';

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

export const StyledBottomSheet = styled(Flexbox)<{
  $fullScreenMobile?: boolean;
  $invertedColors?: boolean;
}>`
  background-color: ${(p) => getNeutralColor('background_default', p.theme, p.$invertedColors)};
  border-color: ${(p) => getNeutralColor('background_default', p.theme, p.$invertedColors)};
  border-radius: ${({ theme }) => `${theme.borderRadius20} ${theme.borderRadius20} 0 0`};
  bottom: 0;
  box-sizing: border-box;
  color: ${(p) => getNeutralColor('text_default', p.theme, p.$invertedColors)};
  display: block;
  height: ${(p) => (p.$fullScreenMobile ? '100%' : `${p.height}px`)};
  left: 0;
  padding: ${(p) => p.theme.spacing.unit(4)}px ${(p) => p.theme.spacing.unit(3)}px;
  position: absolute;
  width: 100%;
  z-index: ${(p) => p.theme.zIndex.overlayInModal};
`;

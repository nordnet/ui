import { darkTheme, lightTheme } from '@nordnet/design-tokens';
import styled from 'styled-components';

import { Button, Flexbox } from '../..';
import { Theme } from '../../theme/theme.types';

const getColor = (colorToken: string, theme: Theme, invertedColors?: boolean) => {
  if (invertedColors) {
    return theme.isDarkMode
      ? lightTheme.color.neutral[colorToken]
      : darkTheme.color.neutral[colorToken];
  }
  return theme.colorTokens.neutral[colorToken];
};

export const StyledIconButton = styled(Button.Icon)<{
  $fullScreenMobile?: boolean;
  $invertedColors?: boolean;
}>`
  background-color: ${(p) => getColor('background_strong', p.theme, p.$invertedColors)};
  color: ${(p) => getColor('icon_default', p.theme, p.$invertedColors)};
  svg {
    color: ${(p) => getColor('icon_default', p.theme, p.$invertedColors)};
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
  background-color: ${(p) => getColor('background_default', p.theme, p.$invertedColors)};
  border-color: ${(p) => getColor('background_default', p.theme, p.$invertedColors)};
  border-radius: ${({ theme }) => `${theme.borderRadius20} ${theme.borderRadius20} 0 0`};
  bottom: 0;
  box-sizing: border-box;
  color: ${(p) => getColor('text_default', p.theme, p.$invertedColors)};
  display: block;
  height: ${(p) => (p.$fullScreenMobile ? '100%' : `${p.height}px`)};
  left: 0;
  padding: ${(p) => p.theme.spacing.unit(4)}px ${(p) => p.theme.spacing.unit(3)}px;
  position: absolute;
  width: 100%;
  z-index: ${(p) => p.theme.zIndex.overlayInModal};
`;

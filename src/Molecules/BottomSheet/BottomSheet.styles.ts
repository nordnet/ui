import styled from 'styled-components';

import { Flexbox } from '../..';

export const Backdrop = styled(Flexbox)`
  background-color: ${({ theme }) => theme.colorTokens.neutral.background_overlay};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const StyledBottomSheet = styled(Flexbox)<{
  fullScreenMobile?: boolean;
}>`
  background-color: ${({ theme }) => theme.colorTokens.neutral.background_content};
  border-color: ${({ theme }) => theme.colorTokens.neutral.background_content};
  border-radius: ${({ theme }) => `${theme.borderRadius20} ${theme.borderRadius20} 0 0`};
  bottom: 0;
  box-sizing: border-box;
  display: block;
  left: 0;
  padding: ${(p) => p.theme.spacing.unit(4)}px ${(p) => p.theme.spacing.unit(3)}px;
  position: absolute;
  width: 100%;
  z-index: ${(p) => p.theme.zIndex.overlayInModal};
  height: ${(p) => (p.fullScreenMobile ? '100%' : p.height)};
`;

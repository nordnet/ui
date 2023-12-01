import styled from 'styled-components';
import { Flexbox, Button } from '../..';
import { CLOSE_ICON_SIZE } from './consts';
import { ColsTrimmerProps } from './CoachMarks.types';
import Bubble from './Bubble';

export const SVG = styled.svg`
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  fill: ${(p) => p.theme.color.modalBackdrop};
  z-index: ${(p) => p.theme.zIndex.modal};
  transition:
    all 0.3s ease-out,
    height 0s 0s,
    opacity 0.3s 0s;
`;

export const TitleWrapper = styled.div<ColsTrimmerProps>`
  padding-right: ${(p) => (p.$hasIcon ? 0 : p.theme.spacing.unit(CLOSE_ICON_SIZE))}px;
`;

export const FooterFlex = styled(Flexbox)`
  margin-top: auto;
`;

export const IconFlex = styled(Flexbox)`
  margin-bottom: ${(p) => p.theme.spacing.unit(1)}px;
`;

export const NavigationButtonsContainer = styled(Flexbox)<{ $hasSingleButton?: boolean }>`
  margin-left: auto;
  min-width: ${(p) =>
    p.$hasSingleButton ? `${p.theme.spacing.unit(19)}px` : `${p.theme.spacing.unit(44)}px`};
`;

export const Content = styled.div`
  color: ${(p) => p.theme.color.bubbleSecondaryText};
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: ${(p) => p.theme.spacing.unit(5)}px;
  right: ${(p) => p.theme.spacing.unit(5)}px;
  ${(p) => p.theme.media.lessThan(p.theme.breakpoints.sm)} {
    right: ${(p) => p.theme.spacing.unit(3)}px;
  }
`;

export const StyledBubble = styled(Bubble)<{ $feedbackWidgetMode?: boolean }>`
  ${(p) =>
    p.$feedbackWidgetMode &&
    `
      position: fixed;
      bottom: 40px;
      right: 40px;
      z-index: 501;
      filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.4));
    `}
`;

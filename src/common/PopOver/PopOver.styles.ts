import styled from 'styled-components';
import { Props } from './PopOver.types';
import { TooltipContent } from './TooltipContent';

type StyledSpanProps = {
  $inModal: Props['inModal'];
  $pointerEvents?: Props['pointerEvents'];
};

export const StyledSpan = styled.span<StyledSpanProps>`
  z-index: ${(p) => (p.$inModal ? p.theme.zIndex.overlayInModal : p.theme.zIndex.overlay)};

  ${(p) => (p.$pointerEvents ? '' : 'pointer-events: none;')}
  &[data-popper-placement^='top'] {
    padding-bottom: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='bottom'] {
    padding-top: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='left'] {
    padding-right: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='right'] {
    padding-left: ${(p) => p.theme.spacing.unit(3)}px;
  }
`;

// styled to allow consumers to use it as styling-identifier directly from PopOver.components.TooltipContent
export const StyledTooltipContent = styled(TooltipContent)``;

export const bottomSheetStyles = {
  left: 0,
  bottom: 0,
  width: '100%',
  position: 'fixed',
  padding: 0,
  transform: 'none',
};

export const hideArrowStyles = {
  display: 'none',
};

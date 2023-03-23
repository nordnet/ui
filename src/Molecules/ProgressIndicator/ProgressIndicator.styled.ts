import styled from 'styled-components';
import { Button } from '../..';

export const CompletionBar = styled.div<{ completion: number; noButtons: boolean }>`
  height: ${(p) => p.theme.spacing.unit(1)}px;
  position: relative;
  width: 100%;
  border-radius: 100px;

  overflow: hidden;
  background: ${(p) => p.theme.color.progressIndicatorBarEmpty};
  margin: ${(p) => (p.noButtons ? '7px' : 0)} auto; /* text height - bar height || 18 - 4 / 2 = 7  */

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    transition: transform 333ms;
    transform: scaleX(${(p) => p.completion});
    background: ${(p) => p.theme.color.progressIndicatorBar};
    transform-origin: left;
    width: 100%;
    height: 100%;
    display: block;
    content: '';
  }
`;

export const StyledButton = styled(Button.Icon)<{
  $visible?: boolean;
  $hide: boolean;
  $isMobile?: boolean;
}>`
  display: ${(p) => (p.$hide ? 'none' : 'flex')};
  visibility: ${(p) => (p.$visible ? 'visible' : 'hidden')};
  background-color: ${(p) =>
    p.$isMobile ? p.theme.color.progressIndicatorBarEmpty : 'transparent'};
  min-height: ${(p) => !p.$isMobile && '16px'};
  height: ${(p) => !p.$isMobile && '16px'};
  padding: ${(p) => !p.$isMobile && '0'};

  &:hover {
    background-color: ${(p) =>
      p.$isMobile ? p.theme.color.progressIndicatorBarEmpty : 'transparent'};
  }
`;

export const StyledButtonPill = styled(Button.Pill)`
  min-width: max-content;
`;

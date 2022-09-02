import styled from 'styled-components';
import { Box } from '../..';

export const CompletionBar = styled.div<{ completion: number }>`
  height: ${(p) => p.theme.spacing.unit(1)}px;
  position: relative;
  width: 100%;
  border-radius: 100px;
  overflow: hidden;
  background: ${(p) => p.theme.color.progressIndicatorBarEmpty};
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
export const HiddenText = styled(Box)`
  overflow: hidden;
  width: 0;
  opacity: 0;
  transform: rotateX(90deg);
  transition: width 333ms, opacity 333ms, transform 333ms;
  display: none;
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
    display: block;
  }
`;

export const StyledButton = styled.button<{ visible?: boolean; charWidth: number; $hide: boolean }>`
  display: ${(p) => (p.$hide ? 'none' : 'flex')};
  background: transparent;
  align-items: center;
  cursor: pointer;
  line-height: 1;
  border: none;
  visibility: ${(p) => (p.visible ? 'hidden' : 'visible')};
  svg {
    transition: color 333ms;
  }
  &:hover {
    svg {
      color: ${(p) => p.theme.color.cta};
    }
    ${HiddenText} {
      width: ${(p) => p.charWidth}ch;
      opacity: 1;
      transform: rotateX(0deg);
    }
  }
`;

export const Container = styled(Box)`
  padding: ${(p) => p.theme.spacing.unit(3)}px ${(p) => p.theme.spacing.unit(5)}px;
  background: ${(p) => p.theme.color.progressIndicatorBackground};
`;

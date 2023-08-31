import { ColorFn } from 'Molecules/Slider/Slider.types';
import styled, { css } from 'styled-components';

import { Props } from './DropdownBubble.types';
import { Theme } from '../../theme/theme.types';

export const TRIANGLE_SIZE = 8;
export const TOP_OFFSET = 11;

const leftAndRightCss = css<Props>`
  ${(p) => {
    switch (p.position) {
      case 'left':
        return 'left: 12px;';
      case 'center':
        return `left: calc(50% - ${TRIANGLE_SIZE}px);`;
      case 'right':
      default:
        return 'right: 12px;';
    }
  }}
`;

const bottomAndTopPlacementCss = css<Props>`
  ${(p) => {
    switch (p.placement) {
      case 'top':
        return `transform: translateY(-${TOP_OFFSET}px);`;
      case 'bottom':
      default:
        return `transform: translateY(${TOP_OFFSET}px);`;
    }
  }}
`;

const commonTriangleCss = css<any>`
  position: absolute;
  width: 0;
  height: 0;
  content: '';
  speak: none;
  border-left: ${TRIANGLE_SIZE}px solid transparent;
  border-right: ${TRIANGLE_SIZE}px solid transparent;
`;

const getTrianglePositionAndColor = ({
  theme,
  defaultColor,
  placement,
  color,
  offset = 0,
}: {
  theme: Theme;
  defaultColor: string;
  placement?: 'top' | 'bottom';
  color?: ColorFn;
  offset?: number;
}) => {
  const customColor = (color && color(theme)) || defaultColor;
  switch (placement) {
    case 'top':
      return `
        top: ${offset ? `calc(100% - ${offset}px)` : '100%'};
        border-top: ${TRIANGLE_SIZE}px solid;
        border-top-color: ${customColor};
      `;
    case 'bottom':
    default:
      return `
        bottom: ${offset ? `calc(100% - ${offset}px)` : '100%'};
        border-bottom: ${TRIANGLE_SIZE}px solid;
        border-bottom-color: ${customColor};
      `;
  }
};

const getColor = (theme: Theme, defaultColor: string, color?: ColorFn) =>
  (color && color(theme)) || defaultColor;

const triangleCss = css`
  &:before {
    ${leftAndRightCss}
    ${commonTriangleCss}
    ${(p) =>
      getTrianglePositionAndColor({
        theme: p.theme,
        defaultColor: p.invertedColors
          ? p.theme.color.bubbleBorderInverted
          : p.theme.color.bubbleBorder,
        placement: p.placement,
        color: p.borderColor,
      })}
  }
  &:after {
    ${leftAndRightCss}
    ${commonTriangleCss}
    ${(p) =>
      getTrianglePositionAndColor({
        theme: p.theme,
        defaultColor: p.invertedColors
          ? p.theme.color.bubbleBackgroundInverted
          : p.theme.color.bubbleBackground,
        placement: p.placement,
        color: p.backgroundColor,
        offset: 1,
      })}
  }
`;

export const DropdownBubble = styled.div<Props>`
  position: relative;
  ${(p) => (p.maxHeight ? `max-height: ${p.maxHeight};` : '')}
  display: flex;
  flex-direction: column;
  min-height: 0;
  border: 1px solid
    ${(p) =>
      getColor(
        p.theme,
        p.invertedColors ? p.theme.color.bubbleBorderInverted : p.theme.color.bubbleBorder,
        p.borderColor,
      )};
  background-color: ${(p) =>
    getColor(
      p.theme,
      p.invertedColors ? p.theme.color.bubbleBackgroundInverted : p.theme.color.bubbleBackground,
      p.backgroundColor,
    )};
  box-shadow: 0 2px 4px 0 rgba(40, 40, 35, 0.15);
  color: ${(p) =>
    getColor(
      p.theme,
      p.invertedColors ? p.theme.color.textLight : p.theme.color.text,
      p.textColor,
    )};
  border-radius: ${(p) => p.theme.borderRadius4};
  ${bottomAndTopPlacementCss}
  ${triangleCss}
`;

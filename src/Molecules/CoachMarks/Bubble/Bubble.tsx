import React from 'react';
import styled, { css, ThemedStyledProps } from 'styled-components';

import { Component, Props, CardProps } from './Bubble.types';
import { Theme } from '../../../theme/theme.types';
import { BORDER_SIZE } from './consts';
import { isFunction } from '../../../common/utils';

const getColor = (props: ThemedStyledProps<CardProps, Theme>) => {
  const { barColor, theme } = props;

  if (isFunction(barColor)) {
    return barColor(theme);
  }

  return 'transparent';
};

const barStyles = css<CardProps>`
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: ${(p) => p.theme.spacing.unit(1)}px;
    background: ${(p) => getColor(p)};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Card = styled.div<CardProps>`
  width: 350px;
  min-height: ${(p) => p.theme.spacing.unit(35)}px;
  padding: ${(p) => p.theme.spacing.unit(5)}px;
  background: ${(p) => p.theme.color.bubbleBackground};
  border: ${BORDER_SIZE}px solid ${(p) => p.theme.color.bubbleBorder};
  position: fixed;
  z-index: ${(p) => p.theme.zIndex.modal + 1};
  display: flex;
  box-sizing: border-box;
  ${(p) => (p.barColor ? barStyles : ``)}

  ${({ theme }) => theme.media.lessThan(theme.breakpoints.sm)} {
    ${(p) =>
      p.bottomSheet
        ? `
          // !important to override popper inline styles
          width: 100% !important;
          transform: none !important;
          inset: auto auto 0px 0px !important;
          position: fixed !important;
        `
        : ''}
  }
`;

export const Bubble: Component = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, style, barColor, bottomSheet }, ref) => (
    <Card
      className={className}
      style={style}
      ref={ref}
      barColor={barColor}
      bottomSheet={bottomSheet}
    >
      {children}
    </Card>
  ),
);

import React from 'react';
import styled, { css } from 'styled-components';
import { Component, InternalProps, Props } from './BubbleArrow.types';
import { TRIANGLE_INDENTATION, TRIANGLE_SIZE } from './consts';
import { BORDER_SIZE } from '../Bubble/consts';

const arrowUp = css<{ noBorder?: boolean }>`
  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid
      ${(p) => (p.noBorder ? 'transparent' : p.theme.color.bubbleBorder)};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: ${BORDER_SIZE * 2}px;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid
      ${(p) => p.theme.color.bubbleBackground};
  }
`;

const arrowRight = css<{ noBorder?: boolean }>`
  &::before {
    border-top: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid transparent;
    border-left: ${TRIANGLE_SIZE}px solid
      ${(p) => (p.noBorder ? 'transparent' : p.theme.color.bubbleBorder)};
  }

  &::after {
    left: 0;
    top: ${BORDER_SIZE * 2}px;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${(p) => p.theme.color.bubbleBackground};
  }
`;

const arrowDown = css<{ noBorder?: boolean }>`
  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-top: ${TRIANGLE_SIZE}px solid
      ${(p) => (p.noBorder ? 'transparent' : p.theme.color.bubbleBorder)};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: 0;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${(p) => p.theme.color.bubbleBackground};
  }
`;

const arrowLeft = css<{ noBorder?: boolean }>`
  &::before {
    border-top: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid
      ${(p) => (p.noBorder ? 'transparent' : p.theme.color.bubbleBorder)};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: ${BORDER_SIZE * 2}px;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid
      ${(p) => p.theme.color.bubbleBackground};
  }
`;

const Arrow = styled.div<InternalProps>`
  ${({ theme }) => theme.media.lessThan(theme.breakpoints.sm)} {
    ${(p) =>
      p.bottomSheet
        ? `
          display: none;
        `
        : ''}
  }

  position: absolute;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  ${(p) => (p.$bubblePlacement === 'left' ? arrowRight : '')}
  ${(p) => (p.$bubblePlacement === 'top' ? arrowDown : '')}
  ${(p) => (p.$bubblePlacement === 'right' ? arrowLeft : '')}
  ${(p) => (p.$bubblePlacement === 'bottom' ? arrowUp : '')}
`;

const getArrowPositionStyles = (bubblePlacement: Props['bubblePlacement']) => {
  if (bubblePlacement === 'top') {
    return {
      left: TRIANGLE_INDENTATION,
      top: '100%',
    };
  }

  if (bubblePlacement === 'right') {
    return {
      left: 0 - TRIANGLE_SIZE,
      top: TRIANGLE_INDENTATION,
    };
  }

  if (bubblePlacement === 'left') {
    return {
      left: '100%',
      top: TRIANGLE_INDENTATION,
    };
  }

  // position === bottom
  return {
    left: TRIANGLE_INDENTATION,
    top: 0 - TRIANGLE_SIZE,
  };
};

export const BubbleArrow: Component = React.forwardRef<HTMLDivElement, Props>(
  ({ bubblePlacement, bottomSheet, noBorder }, ref) => {
    const arrowPositionStyles = getArrowPositionStyles(bubblePlacement);

    return (
      <Arrow
        $bubblePlacement={bubblePlacement}
        style={arrowPositionStyles}
        ref={ref}
        bottomSheet={bottomSheet}
        noBorder={noBorder}
      />
    );
  },
);

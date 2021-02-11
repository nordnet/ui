import React from 'react';
import styled, { css } from 'styled-components';
import { Component, Props, InternalProps } from './BubbleArrow.types';
import { BORDER_SIZE, TRIANGLE_INDENTATION, TRIANGLE_SIZE } from '../consts';

const arrowUp = css`
  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid ${(p) => p.theme.color.bubbleBorder};
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

const arrowRight = css`
  &::before {
    border-top: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid transparent;
    border-left: ${TRIANGLE_SIZE}px solid ${(p) => p.theme.color.bubbleBorder};
  }

  &::after {
    left: 0;
    top: ${BORDER_SIZE * 2}px;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${(p) => p.theme.color.bubbleBackground};
  }
`;

const arrowDown = css`
  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-top: ${TRIANGLE_SIZE}px solid ${(p) => p.theme.color.bubbleBorder};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: 0;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${(p) => p.theme.color.bubbleBackground};
  }
`;

const arrowLeft = css`
  &::before {
    border-top: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid ${(p) => p.theme.color.bubbleBorder};
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
  ${(p) =>
    p.$bubblePlacement === 'right' ? arrowLeft : ''}
  ${(p) =>
    p.$bubblePlacement === 'bottom' ? arrowUp : ''}
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

const BubbleArrow: Component = ({ bubblePlacement }) => {
  const arrowPositionStyles = getArrowPositionStyles(bubblePlacement);

  return <Arrow $bubblePlacement={bubblePlacement} style={arrowPositionStyles} />;
};

export default BubbleArrow;

import React from 'react';
import styled, { css } from 'styled-components';
import { Portal } from '../../..';
import { InternalProps, TriangleComponent, Props } from './Triangle.types';

const TRIANGLE_SIZE = 10;
const BORDER_SIZE = 1;
const OFFSET = 4;

const arrowUp = css`
  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid ${p => p.theme.color.bubbleBorder};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: ${BORDER_SIZE * 2}px;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${p => p.theme.color.bubbleBackground};
  }
`;

const arrowRight = css`
  &::before {
    border-top: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid transparent;
    border-left: ${TRIANGLE_SIZE}px solid ${p => p.theme.color.bubbleBorder};
  }

  &::after {
    left: 0;
    top: ${BORDER_SIZE * 2}px;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${p => p.theme.color.bubbleBackground};
  }
`;

const arrowDown = css`
  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-top: ${TRIANGLE_SIZE}px solid ${p => p.theme.color.bubbleBorder};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: 0;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${p => p.theme.color.bubbleBackground};
  }
`;

const arrowLeft = css`
  &::before {
    border-top: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid ${p => p.theme.color.bubbleBorder};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: ${BORDER_SIZE * 2}px;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${p => p.theme.color.bubbleBackground};
  }
`;

const TriangleEl = styled.div<InternalProps>`
  position: absolute;
  left: ${p => p.left}px;
  top: ${p => p.top}px;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
  }

  &::before {
    z-index: 1;
    left: 0;
    top: 0;
  }

  &::after {
    z-index: 2;
  }

  ${p => (p.arrowDirection === 'right' ? arrowRight : '')}
  ${p => (p.arrowDirection === 'down' ? arrowDown : '')}
  ${p => (p.arrowDirection === 'left' ? arrowLeft : '')}
  ${p => (p.arrowDirection === 'up' ? arrowUp : '')}
`;

const getPosition = (
  triggerRect: Props['triggerRect'],
  toolTipPosition: Props['toolTipPosition'],
) => {
  if (toolTipPosition === 'top') {
    return {
      left: triggerRect && triggerRect.left - TRIANGLE_SIZE + triggerRect.width / 2,
      top: triggerRect && window.scrollY + triggerRect.top - TRIANGLE_SIZE - OFFSET,
    };
  }

  if (toolTipPosition === 'right') {
    return {
      left: triggerRect && triggerRect.right + OFFSET,
      top: triggerRect && window.scrollY + triggerRect.top - TRIANGLE_SIZE + triggerRect.height / 2,
    };
  }

  if (toolTipPosition === 'left') {
    return {
      left: triggerRect && triggerRect.left - TRIANGLE_SIZE - OFFSET,
      top: triggerRect && window.scrollY + triggerRect.top - TRIANGLE_SIZE + triggerRect.height / 2,
    };
  }

  // position === bottom
  return {
    left: triggerRect && triggerRect.left - TRIANGLE_SIZE + triggerRect.width / 2,
    top: triggerRect && triggerRect.bottom + window.scrollY + 4,
  };
};

const getDirection = (toolTipPosition: Props['toolTipPosition']) => {
  if (toolTipPosition === 'top') {
    return 'down';
  }
  if (toolTipPosition === 'right') {
    return 'left';
  }
  if (toolTipPosition === 'left') {
    return 'right';
  }

  return 'up';
};

export const Triangle: TriangleComponent = ({ triggerRect, toolTipPosition }) => {
  const chosenPosition = getPosition(triggerRect, toolTipPosition);
  const arrowDirection = getDirection(toolTipPosition);

  return (
    // The Triangle. We position it relative to the trigger, not the popup
    // so that collisions don't have a triangle pointing off to nowhere.
    // Using a Portal may seem a little extreme, but we can keep the
    // positioning logic simpler here instead of needing to consider
    // the popup's position relative to the trigger and collisions
    <Portal>
      <TriangleEl
        left={chosenPosition.left}
        top={chosenPosition.top}
        arrowDirection={arrowDirection}
      />
    </Portal>
  );
};

Triangle.displayName = 'Tooltip';

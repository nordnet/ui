import React from 'react';
import styled from 'styled-components';
import { Portal } from '../../..';
import { InternalProps, TriangleComponent } from './Triangle.types';

const TRIANGLE_SIZE = 10;
const BORDER_SIZE = 1;

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
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid ${p => p.theme.color.bubbleBorder};
  }

  &::after {
    z-index: 2;
    left: ${BORDER_SIZE * 2}px;
    top: ${BORDER_SIZE * 2}px;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${p => p.theme.color.bubbleBackground};
  }
`;

export const Triangle: TriangleComponent = ({ triggerRect, position }) => {
  return (
    // The Triangle. We position it relative to the trigger, not the popup
    // so that collisions don't have a triangle pointing off to nowhere.
    // Using a Portal may seem a little extreme, but we can keep the
    // positioning logic simpler here instead of needing to consider
    // the popup's position relative to the trigger and collisions
    <Portal>
      <TriangleEl
        left={triggerRect && triggerRect.left - TRIANGLE_SIZE + triggerRect.width / 2}
        top={triggerRect && triggerRect.bottom + window.scrollY + 4}
      />
    </Portal>
  );
};

Triangle.displayName = 'Tooltip';

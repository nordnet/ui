import React, { cloneElement } from 'react';
import styled from 'styled-components';
import { useTooltip, TooltipPopup } from '@reach/tooltip';
import { TooltipComponent, InternalTriangleProps, Props } from './Tooltip.types';
import { Typography, Portal } from '../..';

const TRIANGLE_SIZE = 10;
const BORDER_SIZE = 1;
const OFFSET = TRIANGLE_SIZE + 3;

const StyledTooltip = styled(TooltipPopup)`
  z-index: 1;
  pointer-events: none;
  position: absolute;
  padding: ${p => p.theme.spacing.unit(1)}px ${p => p.theme.spacing.unit(2)}px;
  box-shadow: 0 10px 16px ${p => p.theme.color.shadowModal};
  background: ${p => p.theme.color.bubbleBackground};
  border: solid ${BORDER_SIZE}px ${p => p.theme.color.bubbleBorder};
  max-width: 200px;
`;

const Triangle = styled.div<InternalTriangleProps>`
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
    top: ${BORDER_SIZE * 2}px;
    left: ${BORDER_SIZE * 2}px;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${p => p.theme.color.bubbleBackground};
  }
`;

const getXCord = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  const collisions = {
    right: window.innerWidth < triggerRect.left + tooltipRect.width,
    left: triggerRect.left - tooltipRect.width < 0,
  };

  const centered = !collisions.right && !collisions.left;
  const directionRight = collisions.right && !collisions.left;

  if (centered) {
    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    const tooltipLeft = triggerCenter - tooltipRect.width / 2;
    const tooltipMaxLeft = window.innerWidth - tooltipRect.width - 2;

    return Math.min(Math.max(2, tooltipLeft), tooltipMaxLeft) + window.scrollX;
  }

  if (directionRight) {
    return triggerRect.right - tooltipRect.width + window.pageXOffset;
  }

  return triggerRect.left + window.pageXOffset;
};

const getYCord = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  const collisions = {
    top: triggerRect.top - tooltipRect.height < 0,
    bottom: window.innerHeight < triggerRect.bottom + tooltipRect.height + OFFSET,
  };

  const centered = !collisions.bottom && !collisions.top;
  const directionUp = collisions.bottom && !collisions.top;

  if (centered) {
    const triggerCenter = triggerRect.top + triggerRect.height / 2;
    const tooltipTop = triggerCenter - tooltipRect.height / 2;
    const tooltipMaxTop = window.innerHeight - tooltipRect.height - 2;

    return Math.min(Math.max(2, tooltipTop), tooltipMaxTop) + window.scrollY;
  }

  if (directionUp) {
    return triggerRect.top - OFFSET - tooltipRect.height + window.pageYOffset;
  }

  return triggerRect.top + OFFSET + triggerRect.height + window.pageYOffset;
};

const positionAuto = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  const left = getXCord(triggerRect, tooltipRect);
  const top = getYCord(triggerRect, tooltipRect);

  return {
    left: `${left}px`,
    top: `${top}px`,
  };
};

const positionTop = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  const left = getXCord(triggerRect, tooltipRect);

  return {
    left: `${left}px`,
    top: `${triggerRect.top - OFFSET - tooltipRect.height + window.pageYOffset}px`,
  };
};

const positionBottom = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  const left = getXCord(triggerRect, tooltipRect);

  return {
    left: `${left}px`,
    top: `${triggerRect.top + OFFSET + triggerRect.height + window.pageYOffset}px`,
  };
};

const positionLeft = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  const top = getYCord(triggerRect, tooltipRect);

  return {
    left: `${triggerRect.left -
      tooltipRect.width -
      OFFSET -
      TRIANGLE_SIZE * 2 -
      window.pageXOffset}px`,
    top: `${top}px`,
  };
};

const positionRight = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  const top = getYCord(triggerRect, tooltipRect);

  return {
    left: `${triggerRect.right + OFFSET + TRIANGLE_SIZE * 2 + window.pageXOffset}px`,
    top: `${top}px`,
  };
};

const getPosition = (position: Props['position']) => {
  switch (position) {
    case 'top':
      return positionTop;
    case 'right':
      return positionRight;
    case 'bottom':
      return positionBottom;
    case 'left':
      return positionLeft;
    default:
      return positionAuto;
  }
};

export const Tooltip: TooltipComponent = ({ children, label, ariaLabel, position = 'auto' }) => {
  // get the props from useTooltip
  const [trigger, tooltip] = useTooltip();

  // destructure off what we need to position the triangle
  const { isVisible, triggerRect } = tooltip;
  const chosenPosition = getPosition(position);

  return (
    <>
      {cloneElement(children, trigger)}

      {isVisible && (
        // The Triangle. We position it relative to the trigger, not the popup
        // so that collisions don't have a triangle pointing off to nowhere.
        // Using a Portal may seem a little extreme, but we can keep the
        // positioning logic simpler here instead of needing to consider
        // the popup's position relative to the trigger and collisions
        <Portal>
          <Triangle
            left={triggerRect && triggerRect.left - TRIANGLE_SIZE + triggerRect.width / 2}
            top={triggerRect && triggerRect.bottom + window.scrollY + 4}
          />
        </Portal>
      )}
      <StyledTooltip
        {...tooltip}
        label={<Typography type="tertiary">{label}</Typography>}
        ariaLabel={ariaLabel}
        position={chosenPosition}
      />
    </>
  );
};

Tooltip.displayName = 'Tooltip';

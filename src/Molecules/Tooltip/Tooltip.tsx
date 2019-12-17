import React, { cloneElement } from 'react';
import styled from 'styled-components';
import { useTooltip, TooltipPopup } from '@reach/tooltip';
import { TooltipComponent, Props } from './Tooltip.types';
import { Typography } from '../..';
import Triangle from './Triangle';
import {
  getCollisions,
  leftAfter,
  leftAuto,
  leftBefore,
  topAuto,
  topOver,
  topUnder,
} from './utils';
import { BORDER_SIZE } from './consts';

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

const positionOver = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return {
    left: `${leftAuto(triggerRect, tooltipRect)}px`,
    top: `${topOver(triggerRect, tooltipRect)}px`,
  };
};

const positionUnder = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return {
    left: `${leftAuto(triggerRect, tooltipRect)}px`,
    top: `${topUnder(triggerRect, tooltipRect)}px`,
  };
};

const positionBefore = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return {
    left: `${leftBefore(triggerRect, tooltipRect)}px`,
    top: `${topAuto(triggerRect, tooltipRect)}px`,
  };
};

const positionAfter = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return {
    left: `${leftAfter(triggerRect, tooltipRect)}px`,
    top: `${topAuto(triggerRect, tooltipRect)}px`,
  };
};

const positionAuto = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  const collisions = getCollisions(triggerRect, tooltipRect);
  const left = `${leftAuto(triggerRect, tooltipRect)}px`;

  return collisions.top
    ? {
        left,
        top: `${topUnder(triggerRect, tooltipRect)}px`,
      }
    : {
        left,
        top: `${topOver(triggerRect, tooltipRect)}px`,
      };
};

const getToolTipPosition = (position: Props['position']) => {
  switch (position) {
    case 'top':
      return positionOver;
    case 'right':
      return positionAfter;
    case 'bottom':
      return positionUnder;
    case 'left':
      return positionBefore;
    default:
      return positionAuto;
  }
};

export const Tooltip: TooltipComponent = ({ children, label, ariaLabel, position = 'auto' }) => {
  const [trigger, tooltip] = useTooltip();
  const { isVisible, triggerRect } = tooltip;
  const tooltipPosition = getToolTipPosition(position);

  return (
    <>
      {cloneElement(children, trigger)}

      {isVisible && <Triangle triggerRect={triggerRect} tooltipPosition={position} />}
      <StyledTooltip
        {...tooltip}
        label={<Typography type="tertiary">{label}</Typography>}
        ariaLabel={ariaLabel}
        position={tooltipPosition}
      />
    </>
  );
};

Tooltip.displayName = 'Tooltip';

import React, { cloneElement } from 'react';
import styled from 'styled-components';
import { useTooltip, TooltipPopup } from '@reach/tooltip';
import { TooltipComponent, Props } from './Tooltip.types';
import { Typography } from '../..';
import Triangle from './Triangle';
import { leftAfter, leftCenter, leftBefore, topCenter, topOver, topUnder } from './utils';
import { BORDER_SIZE } from './consts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledTooltip = styled(({ overlayTooltip, ...rest }) => <TooltipPopup {...rest} />)`
  z-index: ${({ overlayTooltip }) =>
    overlayTooltip ? ({ theme }) => theme.zIndex.overlayTooltip : 1};
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
    left: `${leftCenter(triggerRect, tooltipRect)}px`,
    top: `${topOver(triggerRect, tooltipRect)}px`,
  };
};

const positionUnder = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return {
    left: `${leftCenter(triggerRect, tooltipRect)}px`,
    top: `${topUnder(triggerRect, tooltipRect)}px`,
  };
};

const positionBefore = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return {
    left: `${leftBefore(triggerRect, tooltipRect)}px`,
    top: `${topCenter(triggerRect, tooltipRect)}px`,
  };
};

const positionAfter = (triggerRect: ClientRect, tooltipRect: ClientRect) => {
  return {
    left: `${leftAfter(triggerRect, tooltipRect)}px`,
    top: `${topCenter(triggerRect, tooltipRect)}px`,
  };
};

const getToolTipPosition = (position: Props['position']) => {
  switch (position) {
    case 'top':
      return positionOver;
    case 'right':
      return positionAfter;
    case 'left':
      return positionBefore;
    case 'bottom':
    default:
      return positionUnder;
  }
};

export const Tooltip: TooltipComponent = ({
  children,
  label,
  ariaLabel,
  overlayTooltip = false,
  position = 'auto',
}) => {
  const [trigger, tooltip] = useTooltip();
  const { isVisible, triggerRect } = tooltip;
  const tooltipPosition = getToolTipPosition(position);

  return (
    <>
      {cloneElement(children, trigger)}

      {isVisible && (
        <Triangle
          triggerRect={triggerRect}
          tooltipPosition={position}
          overlayTooltip={overlayTooltip}
        />
      )}
      <StyledTooltip
        {...tooltip}
        label={<Typography type="tertiary">{label}</Typography>}
        ariaLabel={ariaLabel}
        position={tooltipPosition}
        overlayTooltip={overlayTooltip}
      />
    </>
  );
};

Tooltip.displayName = 'Tooltip';

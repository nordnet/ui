import React from 'react';
import styled from 'styled-components';

import { getHeight, getKnobSize } from '../../Slider/utils';
import { Component, InternalProps } from './RangeSliderTrack.types';

const HoverArea = styled.div<InternalProps>`
  position: relative;
  width: 100%;
  height: ${(p) => `${getHeight(p.$variant)}px`};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  padding: ${(p) => `${p.theme.spacing.unit(2)}px 0`};
`;

const Track = styled.div<InternalProps>`
  position: relative;
  width: 100%;
  height: ${(p) => `${getHeight(p.$variant)}px`};
  background: ${(p) => p.theme.colorTokens.neutral.background_skeleton};
  border-radius: ${(p) => `${getKnobSize(p.$variant)}px`};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
`;

const RangeSliderTrack: Component = ({
  children,
  disabled,
  variant,
  readOnly,
  sliderColor,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseUp,
  onTouchStart,
}) => {
  return (
    <HoverArea
      $disabled={disabled || readOnly}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      $sliderColor={sliderColor}
      $variant={variant}
    >
      <Track $disabled={disabled || readOnly} $variant={variant}>
        {children}
      </Track>
    </HoverArea>
  );
};

export default RangeSliderTrack;

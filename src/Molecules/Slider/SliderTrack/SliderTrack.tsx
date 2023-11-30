import React from 'react';
import styled from 'styled-components';
import Color from 'color';

import { getHeight, getKnobSize } from '../utils';
import { Component, InternalProps } from './SliderTrack.types';

const HoverArea = styled.div<InternalProps>`
  position: relative;
  width: 100%;
  height: ${(p) => `${getHeight(p.$variant)}px`};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  padding: ${(p) => `${p.theme.spacing.unit(2)}px 0`};

  &:hover {
    & > div > div:nth-last-child(1) {
      border: ${(p) => {
        const knobColor = p.$sliderColor
          ? Color(p.$sliderColor(p.theme)).darken(0.1)
          : p.theme.colorTokens.action.background_hover;
        return (
          !p.$disabled && `${knobColor ? `${p.theme.spacing.unit(1)}px solid ${knobColor}` : ''}`
        );
      }};
      background: ${(p) => {
        const knobColor = p.$sliderColor
          ? Color(p.$sliderColor(p.theme)).darken(0.1)
          : p.theme.colorTokens.action.background_hover;
        return !p.$disabled ? `${knobColor}  ` : '';
      }};
    }
  }
`;

const Track = styled.div<InternalProps>`
  position: relative;
  width: 100%;
  height: ${(p) => `${getHeight(p.$variant)}px`};
  background: ${(p) => p.theme.colorTokens.neutral.background_skeleton};
  border-radius: ${(p) => `${getKnobSize(p.$variant)}px`};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
`;

const SliderTrack: Component = ({
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

export default SliderTrack;

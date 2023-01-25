import React from 'react';
import styled from 'styled-components';
import Color from 'color';

import { getHeight, getKnobSize } from '../utils';
import { Component, InternalProps } from './SliderTrack.types';

const HoverArea = styled.div<InternalProps>`
  position: relative;
  width: 100%;
  height: ${(p) => `${p.theme.spacing.unit(1)}px`};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  padding: ${(p) => `${p.theme.spacing.unit(1)}px;`};

  & :hover {
    & > div > div:nth-last-child(1) {
      border: ${(p) => {
        const knobColor = p.$sliderColor ? p.$sliderColor(p.theme) : p.theme.color.sliderColor;
        return (
          !p.$disabled &&
          `${knobColor ? `${p.theme.spacing.unit(1)}px solid ${Color(knobColor).darken(0.1)}` : ''}`
        );
      }};
      background: ${(p) => {
        const knobColor = p.$sliderColor ? p.$sliderColor(p.theme) : p.theme.color.sliderColor;
        return !p.$disabled && `${knobColor ? Color(knobColor).darken(0.1) : ''}`;
      }};
    }
  }
`;

const Track = styled.div<InternalProps>`
  position: relative;
  width: 100%;
  height: ${(p) => `${getHeight(p.$variant)}px`};
  background: ${(p) =>
    p.$disabled ? p.theme.color.sliderDisabled : p.theme.color.sliderBackgroundColor};
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
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      $sliderColor={sliderColor}
    >
      <Track $disabled={disabled || readOnly} $variant={variant}>
        {children}
      </Track>
    </HoverArea>
  );
};

export default SliderTrack;

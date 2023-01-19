import React from 'react';
import Color from 'color';
import styled from 'styled-components';

import { Component, Props } from './SliderKnob.types';
import { InternalProps } from '../Slider.types';
import { VARIANT_TYPES } from '../constants';
import { getKnobSize } from '../utils';

const Handle = styled('div')<InternalProps>`
  box-sizing: border-box;
  position: absolute;
  width: ${(p) => `${getKnobSize(p.$variant)}px`};
  height: ${(p) => `${getKnobSize(p.$variant)}px`};
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  background: ${(p) =>
    p.$variant === VARIANT_TYPES.PLAYER ? 'transparent' : p.theme.color.sliderKnobBackground};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  border-width: ${(p) => p.theme.spacing.unit(1)}px;
  border-style: solid;
  border-color: ${(p) => (p.$sliderColor ? p.$sliderColor(p.theme) : p.theme.color.sliderColor)};
  ${(p) => (p.$disabled ? `border-color: ${p.theme.color.sliderDisabled};` : '')};
  ${(p) => (p.$variant === VARIANT_TYPES.PLAYER ? 'border-color: transparent' : '')};
  transition: transform 0.16s ease-out;

  &:active {
    background: ${(p) => {
      const knobColor = p.$sliderColor ? p.$sliderColor(p.theme) : p.theme.color.sliderColor;
      return !p.$disabled && `${knobColor ? Color(knobColor).darken(0.1) : ''}`;
    }};

    transform: ${(p) => {
      return p.$variant === VARIANT_TYPES.PLAYER
        ? 'translateY(-50%)'
        : 'translateY(-50%) scale3d(0.85, 0.85, 0.85)';
    }};
  }
`;

const SliderKnob: Component = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      disabled,
      max,
      min,
      onClick,
      onKeyDown,
      onMouseDown,
      onMouseUp,
      onTouchStart,
      sliderColor,
      style,
      value,
      variant,
    },
    ref,
  ) => {
    return (
      <Handle
        $disabled={disabled}
        $sliderColor={sliderColor}
        $variant={variant}
        aria-orientation="horizontal"
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        ref={ref}
        tabIndex={0}
        role="slider"
        style={style}
      />
    );
  },
);

export default SliderKnob;

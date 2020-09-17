import React from 'react';
import Color from 'color';
import styled from 'styled-components';
import { Component, Props } from './SliderThumb.types';
import { InternalProps } from '../Slider.types';
import { THUMB_BIG_PX, THUMB_SMALL_PX, VARIANT_TYPES } from '../constants';

const Handle = styled('div')<InternalProps>`
  box-sizing: border-box;
  position: absolute;
  width: ${(p) => (p.$variant === VARIANT_TYPES.SMALL ? `${THUMB_SMALL_PX}` : `${THUMB_BIG_PX}`)}px;
  height: ${(p) =>
    p.$variant === VARIANT_TYPES.SMALL ? `${THUMB_SMALL_PX}` : `${THUMB_BIG_PX}`}px;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  background: ${(p) => p.theme.color.sliderThumbBackground};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'grab')};
  border-width: ${(p) => p.theme.spacing.unit(1)}px;
  border-style: solid;
  border-color: ${(p) => (p.$sliderColor ? p.$sliderColor(p.theme) : p.theme.color.sliderColor)};
  ${(p) => (p.$disabled ? `border-color: ${p.theme.color.sliderDisabled};` : '')}
  transition: transform 0.16s ease-out;

  &:active {
    background: ${(p) => {
      const thumbColor = p.$sliderColor ? p.$sliderColor(p.theme) : '';
      return !p.$disabled && `${thumbColor ? Color(thumbColor).darken(0.1) : ''}`;
    }};
    transform: translateY(-50%) scale3d(0.8, 0.8, 0.8);
  }

  &:focus {
    border: ${(p) => {
      const thumbColor = p.$sliderColor ? p.$sliderColor(p.theme) : '';
      return (
        !p.$disabled &&
        `${thumbColor ? `${p.theme.spacing.unit(1)}px solid ${Color(thumbColor).darken(0.1)}` : ''}`
      );
    }};
    background: ${(p) => {
      const thumbColor = p.$sliderColor ? p.$sliderColor(p.theme) : '';
      return !p.$disabled && `${thumbColor ? Color(thumbColor).darken(0.1) : ''}`;
    }};
  }
`;

const SliderThumb: Component = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      disabled,
      max,
      min,
      onClick,
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
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        ref={ref}
        role="slider"
        style={style}
      />
    );
  },
);

export default SliderThumb;

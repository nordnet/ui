import React from 'react';
import Color from 'color';
import styled, { css } from 'styled-components';
import { Component } from './SliderThumb.types';
import { InternalProps } from '../Slider.types';
import { THUMB_BIG, THUMB_SMALL, VARIANT_TYPES } from '../constants';

const pressedThumbStyle = css<InternalProps>`
  &:active {
    background: ${(p) => {
      const thumbColor = p.$sliderColor ? p.$sliderColor(p.theme) : '';
      return !p.$disabled && `${thumbColor ? Color(thumbColor).darken(0.1) : ''}`;
    }};
    height: ${(p) => (p.$variant === VARIANT_TYPES.SMALL ? THUMB_SMALL - 4 : THUMB_BIG - 6)}px;
    width: ${(p) => (p.$variant === VARIANT_TYPES.SMALL ? THUMB_SMALL - 4 : THUMB_BIG - 6)}px;
  }
`;

const focusedThumbStyle = css<InternalProps>`
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
    border-radius: 50%;
  }
`;

const StyledThumb = styled('div')<InternalProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${(p) => (p.$variant === VARIANT_TYPES.SMALL ? `${THUMB_SMALL}` : `${THUMB_BIG}`)}px;
  height: ${(p) => (p.$variant === VARIANT_TYPES.SMALL ? `${THUMB_SMALL}` : `${THUMB_BIG}`)}px;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  background: ${(p) => p.theme.color.sliderThumbBackground};
  border: ${(p) =>
    `${p.theme.spacing.unit(1)}px solid ${
      p.$sliderColor && !p.$disabled ? p.$sliderColor(p.theme) : p.theme.color.sliderColor
    }`};
  border: ${(p) =>
    p.$disabled ? `${p.theme.spacing.unit(1)}px solid ${p.theme.color.sliderDisabled}` : ''};
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'grab')};
  ${focusedThumbStyle}
  ${pressedThumbStyle}
`;

const SliderThumb: Component = ({
  disabled,
  max,
  min,
  onClick,
  onKeyDown,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  ref,
  sliderColor,
  style,
  value,
  variant,
}) => {
  return (
    <StyledThumb
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
      role="slider"
      style={style}
    />
  );
};

export default SliderThumb;

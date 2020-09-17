import React, { KeyboardEvent, MouseEvent, TouchEvent, useRef } from 'react';
import styled from 'styled-components';
import { Component, getLeftFn, InternalProps } from './Slider.types';
import { THUMB_BIG_PX, THUMB_SMALL_PX, VARIANT_TYPES } from './constants';
import { SliderThumb } from './SliderThumb';
import { SliderTrack } from './SliderTrack';
import { SliderTrackHighlight } from './SliderTrackHighlight';

const clamp = (val: number, min: number, max: number) => {
  if (val < min) {
    return min;
  }

  if (val > max) {
    return max;
  }

  return val;
};

const getPercentage = (current: number, min: number, max: number) =>
  ((current - min) / (max - min)) * 100;

const getValue = (percentage: number, min: number, max: number) =>
  ((max - min) / 100) * percentage + min;

const getLeft: getLeftFn = (percentage, variant) => {
  return `calc(${percentage}% - ${
    variant === 'big' ? `${THUMB_BIG_PX}` : `${THUMB_SMALL_PX}`
  }px * ${percentage * 0.01})`;
};

const Container = styled.div<InternalProps>`
  display: flex;
  align-items: center;
  height: ${(p) =>
    p.$variant === VARIANT_TYPES.SMALL ? `${THUMB_SMALL_PX}px` : `${THUMB_BIG_PX}px`};
`;

const Slider: Component = ({
  disabled,
  max,
  min,
  onChange,
  sliderColor,
  step,
  value,
  variant = 'big',
}) => {
  const trackRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const thumbRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const diff = useRef() as React.MutableRefObject<number>;

  const initialPercentage = getPercentage(value, min, max);

  const handleChange = (val: number) => {
    if (!disabled) {
      const start = 0;
      const end = trackRef.current.offsetWidth - thumbRef.current.offsetWidth;
      const newX = clamp(val, start, end);

      const newPercentage = getPercentage(newX, start, end);
      const newValue = getValue(newPercentage, min, max);

      if (newValue % step === 0) {
        thumbRef.current.style.left = getLeft(newPercentage, variant);
      }

      if (typeof onChange === 'function') {
        onChange(newValue - (newValue % step));
      }
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    const newX = event.clientX - diff.current - trackRef.current.getBoundingClientRect().left;
    handleChange(newX);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove as () => void);
  };

  const handleMouseDown = (event: MouseEvent) => {
    diff.current = event.clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener('mousemove', handleMouseMove as () => void);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchMove = (event: TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();

    const newX =
      event.touches[0].clientX - diff.current - trackRef.current.getBoundingClientRect().left;
    handleChange(newX);
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchend', handleTouchEnd);
    document.removeEventListener('touchmove', handleTouchMove as () => void);
  };

  const handleTouchStart = (event: TouchEvent) => {
    diff.current = event.touches[0].clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener('touchmove', handleTouchMove as () => void);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleThumbClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const handleTrackClick = (event: MouseEvent) => {
    const newX = event.clientX - trackRef.current.getBoundingClientRect().left;
    handleChange(newX);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!disabled) {
      const increase =
        (event.key && ['ArrowRight', 'ArrowUp'].includes(event.key)) ||
        (event.keyCode && [38, 39].includes(event.keyCode));
      const decrease =
        (event.key && ['ArrowLeft', 'ArrowDown'].includes(event.key)) ||
        (event.keyCode && [37, 40].includes(event.keyCode));

      let newX = value;
      if (increase) {
        newX = value + step;
      }
      if (decrease) {
        newX = value - step;
      }
      if (newX >= min && newX <= max) {
        if (typeof onChange === 'function') {
          onChange(newX);
        }
      }
    }
  };

  return (
    <Container
      $disabled={disabled}
      $sliderColor={sliderColor}
      $variant={variant}
      onClick={handleTrackClick}
      ref={trackRef}
      tabIndex={-1}
    >
      <SliderTrack variant={variant}>
        <SliderTrackHighlight sliderColor={sliderColor} value={value} variant={variant} />
        <SliderThumb
          disabled={disabled}
          max={max}
          min={min}
          onClick={handleThumbClick}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          ref={thumbRef}
          sliderColor={sliderColor}
          style={{ left: getLeft(initialPercentage, variant) }}
          value={value}
          variant={variant}
        />
      </SliderTrack>
    </Container>
  );
};

export default Slider;

import React, { KeyboardEvent, MouseEvent, TouchEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { Component, InternalProps } from './Slider.types';
import { THUMB_BIG_PX, THUMB_SMALL_PX, VARIANT_TYPES } from './constants';
import { SliderThumb } from './SliderThumb';
import { SliderTrack } from './SliderTrack';
import { SliderTrackHighlight } from './SliderTrackHighlight';
import { isNumber, isFunction } from '../../common/utils';

const clamp = (val: number, min: number, max: number) => {
  if (val < min) {
    return min;
  }

  if (val > max) {
    return max;
  }

  return val;
};

const getDecimalPrecision = (num: number) => {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
};

const roundValueToStep = (value: number, step: number, min: number) => {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
};

const percentToValue = (percent: number, min: number, max: number) => {
  return (max - min) * percent + min;
};

const valueToPercent = (value: number, min: number, max: number) => {
  return ((value - min) * 100) / (max - min);
};

const Container = styled.div<InternalProps>`
  display: flex;
  align-items: center;
  height: ${(p) =>
    p.$variant === VARIANT_TYPES.SMALL ? `${THUMB_SMALL_PX}px` : `${THUMB_BIG_PX}px`};
`;

const Slider: Component = ({
  defaultValue,
  disabled,
  max,
  min,
  onChange,
  sliderColor,
  step,
  value: controlledValue,
  variant = 'big',
}) => {
  const trackRef: React.Ref<HTMLDivElement> = useRef(null);
  const thumbRef: React.Ref<HTMLDivElement> = useRef(null);
  const isControlled = isNumber(controlledValue);
  const [valueInternal, setValueInternal] = useState(defaultValue || min);
  const value = isControlled ? controlledValue! : valueInternal;
  const trackPercent = valueToPercent(value, min, max);
  const handlePosition = `calc(${trackPercent}% - ${
    variant === 'big' ? `${THUMB_BIG_PX}` : `${THUMB_SMALL_PX}`
  }px * ${trackPercent * 0.01})`;

  const getNewValue = (clickPosition: number) => {
    if (!trackRef.current || !handlePosition) {
      return null;
    }

    const { left, width } = trackRef.current.getBoundingClientRect();
    const diff = clickPosition - left;
    const percent = diff / width;
    const newValue = percentToValue(percent, min, max);
    const newValueRounded = roundValueToStep(newValue, step, min);

    return clamp(newValueRounded, min, max);
  };

  const handleChange = (clickPosition: number) => {
    if (!disabled) {
      const newValue = getNewValue(clickPosition);

      if (newValue !== null) {
        setValueInternal(newValue);

        if (isFunction(onChange)) {
          onChange(newValue - (newValue % step));
        }
      }
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const pointerPosition = event.clientX;

    handleChange(pointerPosition);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove as () => void);
  };

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove as () => void);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchMove = (event: TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const touchPosition = event.touches[0].clientX;

    handleChange(touchPosition);
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchend', handleTouchEnd);
    document.removeEventListener('touchmove', handleTouchMove as () => void);
  };

  const handleTouchStart = () => {
    document.addEventListener('touchmove', handleTouchMove as () => void);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleThumbClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const handleTrackClick = (event: MouseEvent) => {
    const pointerPosition = event.clientX;

    handleChange(pointerPosition);
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
        if (isFunction(onChange)) {
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
          style={{ left: handlePosition }}
          value={value}
          variant={variant}
        />
      </SliderTrack>
    </Container>
  );
};

export default Slider;

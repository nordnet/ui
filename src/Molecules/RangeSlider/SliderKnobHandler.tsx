import React, { KeyboardEvent, MouseEvent, TouchEvent } from 'react';
import { SliderKnobHandlerComponent } from './SliderKnobHandler.types';
import { getKnobSize } from '../Slider/utils';
import { SliderKnob } from '../Slider/SliderKnob';

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

const SliderKnobHandler: SliderKnobHandlerComponent = ({
  disabled,
  handleRef,
  max,
  min,
  onChange,
  readOnly,
  sliderColor,
  step,
  trackRef,
  value,
  variant = 'big',
}) => {
  const trackPercent = valueToPercent(value, min, max);
  const handlePosition = `calc(${trackPercent}% - ${getKnobSize(variant) / 2}px)`;

  const updateValue = (newValue: number) => {
    onChange(newValue);
  };

  const getNewValue = (pointerPosition: number) => {
    const trackClientRect = trackRef?.current?.getBoundingClientRect();
    if (!trackClientRect || !pointerPosition) {
      return null;
    }

    const { left, width } = trackClientRect;
    const diff = pointerPosition - left;
    const percent = diff / width;

    const newValue = percentToValue(percent, min, max);
    const newValueRounded = roundValueToStep(newValue, step, min);

    return clamp(newValueRounded, min, max);
  };

  const handleChange = (pointerPosition: number) => {
    const trackClientRect = trackRef?.current?.getBoundingClientRect();
    if (!disabled && !readOnly && trackClientRect) {
      const newValue = getNewValue(pointerPosition);

      if (newValue !== null) {
        updateValue(newValue);
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

  const handleKnobClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!disabled) {
      const increase = event.key && ['ArrowRight', 'ArrowUp'].includes(event.key);
      const decrease = event.key && ['ArrowLeft', 'ArrowDown'].includes(event.key);

      let newValue = value;
      if (increase) {
        newValue = value + step;
      }
      if (decrease) {
        newValue = value - step;
      }
      updateValue(clamp(newValue, min, max));
    }
  };

  return (
    <SliderKnob
      disabled={disabled}
      max={max}
      min={min}
      onClick={handleKnobClick}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      ref={handleRef}
      sliderColor={sliderColor}
      style={{
        left: handlePosition,
      }}
      value={value}
      variant={variant}
    />
  );
};

export default SliderKnobHandler;

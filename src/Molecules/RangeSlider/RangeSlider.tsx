import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Component, InternalProps } from './RangeSlider.types';
import { getKnobSize } from '../Slider/utils';
import { SliderTrack } from './SliderTrack';
import { SliderTrackHighlight } from '../Slider/SliderTrackHighlight';
import { isFunction, isNumber } from '../../common/utils';
import SliderKnobHandler from './SliderKnobHandler';
import { KnobType } from './constants';

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

const roundValueToStep = (value: number, step: number, oldValue: number) => {
  const nearest = Math.round((value - oldValue) / step) * step + oldValue;
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
  height: ${(p) => `${getKnobSize(p.$variant)}px`};
  margin: 0 ${(p) => `${getKnobSize(p.$variant) / 2}px`};
`;

const RangeSlider: Component = ({
  defaultHighValue,
  defaultLowValue,
  disabled,
  max,
  min,
  onChange,
  readOnly,
  showTooltip,
  sliderColor,
  step,
  variant = 'big',
}) => {
  const trackRef: React.Ref<HTMLDivElement> = useRef(null);
  const [initialized, setInitialized] = useState(false); // trackRef is not set first render, need to force a re-render

  const lowHandleRef: React.Ref<HTMLDivElement> = useRef(null);
  const highHandleRef: React.Ref<HTMLDivElement> = useRef(null);

  const [lowValue, setLowValue] = useState(isNumber(defaultLowValue) ? defaultLowValue : min || 0);
  const minTrackPercent = valueToPercent(lowValue, min, max);

  const [highValue, setHighValue] = useState(
    isNumber(defaultHighValue) ? defaultHighValue : max || 0,
  );
  const maxTrackPercent = valueToPercent(highValue, min, max);

  const updateValue = (newValue: number, type: string = KnobType.LOW) => {
    switch (type) {
      case KnobType.LOW:
        if (newValue > highValue) {
          return;
        }
        setLowValue(newValue);
        if (isFunction(onChange)) {
          onChange({ low: newValue, high: highValue });
        }
        break;
      case KnobType.HIGH:
        if (newValue < lowValue) {
          return;
        }
        setHighValue(newValue);
        if (isFunction(onChange)) {
          onChange({ low: lowValue, high: newValue });
        }
        break;
      default:
        break;
    }
  };

  const handleTrackClick = (event: MouseEvent) => {
    const pointerPosition = event.clientX;

    if (!disabled && !readOnly) {
      if (!trackRef.current || !pointerPosition) {
        return null;
      }

      const { left, width } = trackRef.current.getBoundingClientRect();
      const diff = pointerPosition - left;
      const percent = diff / width;

      const newValue = percentToValue(percent, min, max);
      const difflowValue = Math.abs(newValue - lowValue);
      const diffhighValue = Math.abs(newValue - highValue);

      const newValueRounded = roundValueToStep(
        newValue,
        step,
        difflowValue < diffhighValue ? lowValue : highValue,
      );

      const clampedValue = clamp(newValueRounded, min, max);
      if (clampedValue !== null) {
        updateValue(clampedValue, difflowValue < diffhighValue ? KnobType.LOW : KnobType.HIGH);

        if (difflowValue < diffhighValue) {
          lowHandleRef.current?.focus();
        } else {
          highHandleRef.current?.focus();
        }
      }
    }
    return null;
  };

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

  return (
    <Container
      $disabled={disabled}
      $sliderColor={sliderColor}
      $variant={variant}
      onClick={handleTrackClick}
      ref={trackRef}
      tabIndex={-1}
    >
      <SliderTrack variant={variant} sliderColor={sliderColor} readOnly={readOnly}>
        <SliderTrackHighlight
          sliderColor={sliderColor}
          startValue={minTrackPercent}
          value={maxTrackPercent}
          variant={variant}
        />
        {!readOnly && (
          <>
            <SliderKnobHandler
              disabled={disabled}
              handleRef={lowHandleRef}
              max={max}
              min={min}
              onChange={(value) => {
                updateValue(value, KnobType.LOW);
              }}
              readOnly={readOnly}
              showTooltip={showTooltip}
              sliderColor={sliderColor}
              step={step}
              trackRef={trackRef}
              type={KnobType.LOW}
              value={lowValue}
              variant={variant}
            />
            <SliderKnobHandler
              disabled={disabled}
              handleRef={highHandleRef}
              max={max}
              min={min}
              onChange={(value) => {
                updateValue(value, KnobType.HIGH);
              }}
              readOnly={readOnly}
              showTooltip={showTooltip}
              sliderColor={sliderColor}
              step={step}
              trackRef={trackRef}
              type={KnobType.HIGH}
              value={highValue}
              variant={variant}
            />
          </>
        )}
      </SliderTrack>
    </Container>
  );
};

export default RangeSlider;

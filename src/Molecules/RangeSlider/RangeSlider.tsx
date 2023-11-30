import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Component, InternalProps } from './RangeSlider.types';
import { getKnobSize } from '../Slider/utils';
import { RangeSliderTrack } from './RangeSliderTrack';
import { SliderTrackHighlight } from '../Slider/SliderTrackHighlight';
import { isFunction, isNumber } from '../../common/utils';
import SliderKnobHandler from './SliderKnobHandler';
import { KnobType } from './constants';
import { clamp, percentToValue, roundValueToStep, valueToPercent } from './utils';

const Container = styled.div<InternalProps>`
  display: flex;
  align-items: center;
  height: ${(p) => `${getKnobSize(p.$variant)}px`};
  margin: 0 ${(p) => `${getKnobSize(p.$variant) / 2}px`};
`;

const RangeSlider: Component = ({
  defaultHighValue,
  defaultLowValue,
  disabled: disabledProp,
  max,
  min,
  onChange,
  readOnly,
  sliderColor,
  step,
  variant = 'big',
}) => {
  const trackRef: React.Ref<HTMLDivElement> = useRef(null);
  const [initialized, setInitialized] = useState(false); // trackRef is not set first render, need to force a re-render
  const [activeHandle, setActiveHandle] = useState(KnobType.LOW);

  // disable slider if min > max or step <= 0 or defaultLowValue > defaultHighValue
  const disabled =
    disabledProp ||
    min > max ||
    step <= 0 ||
    !isNumber(defaultLowValue) ||
    !isNumber(defaultHighValue) ||
    defaultLowValue > defaultHighValue;

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

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

  const handleTrackClick = (event: React.MouseEvent) => {
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
        if (
          difflowValue < diffhighValue ||
          (clampedValue < lowValue && activeHandle === KnobType.LOW)
        ) {
          updateValue(clampedValue, KnobType.LOW);
          lowHandleRef.current?.focus();
        } else if (
          difflowValue > diffhighValue ||
          (clampedValue > highValue && activeHandle === KnobType.HIGH)
        ) {
          updateValue(clampedValue, KnobType.HIGH);
          highHandleRef.current?.focus();
        }
      }
    }
    return null;
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
      <RangeSliderTrack
        variant={variant}
        sliderColor={sliderColor}
        readOnly={readOnly}
        disabled={disabled}
      >
        <SliderTrackHighlight
          disabled={disabled}
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
              knobType={KnobType.LOW}
              max={max}
              min={min}
              onChange={(value) => {
                if (value <= highValue) {
                  updateValue(value, KnobType.LOW);
                }
              }}
              readOnly={readOnly}
              setActiveHandle={setActiveHandle}
              sliderColor={sliderColor}
              step={step}
              trackRef={trackRef}
              value={lowValue}
              variant={variant}
              zIndex={activeHandle === KnobType.LOW ? 2 : 1}
            />
            <SliderKnobHandler
              disabled={disabled}
              handleRef={highHandleRef}
              knobType={KnobType.HIGH}
              max={max}
              min={min}
              onChange={(value) => {
                if (value >= lowValue) {
                  updateValue(value, KnobType.HIGH);
                }
              }}
              readOnly={readOnly}
              setActiveHandle={setActiveHandle}
              sliderColor={sliderColor}
              step={step}
              trackRef={trackRef}
              value={highValue}
              variant={variant}
              zIndex={activeHandle === KnobType.HIGH ? 2 : 1}
            />
          </>
        )}
      </RangeSliderTrack>
    </Container>
  );
};

export default RangeSlider;

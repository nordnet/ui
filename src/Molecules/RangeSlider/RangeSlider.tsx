import React, { MouseEvent, useRef, useState } from 'react';
import styled from 'styled-components';

import { Component, InternalProps } from './RangeSlider.types';
import { getKnobSize } from '../Slider/utils';
import { SliderTrack } from '../Slider/SliderTrack';
import { SliderTrackHighlight } from '../Slider/SliderTrackHighlight';
import { isFunction, isNumber } from '../../common/utils';
import SliderKnobHandler from './SliderKnobHandler';

const KnobPointerType = {
  low: 'low',
  high: 'high',
};

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

const getNewValue = (
  clickPosition: number,
  track: HTMLElement | null,
  props: {
    min: number;
    max: number;
    step: number;
  },
) => {
  if (!track || !clickPosition) {
    return null;
  }

  const { min, max, step } = props;
  const { left, width } = track.getBoundingClientRect();

  const diff = clickPosition - left;
  const percent = diff / width;

  const newValue = percentToValue(percent, min, max);
  const newValueRounded = roundValueToStep(newValue, step, min);

  return clamp(newValueRounded, min, max);
};

const Container = styled.div<InternalProps>`
  display: flex;
  align-items: center;
  height: ${(p) => `${getKnobSize(p.$variant)}px`};
  margin: 0 ${(p) => `${getKnobSize(p.$variant) / 2}px`};
`;

const RangeSlider: Component = ({
  defaultLowValue,
  defaultHighValue,
  disabled,
  max,
  min,
  onChange,
  readOnly,
  showTooltip,
  sliderColor,
  step,
  value: controlledValue,
  variant = 'big',
}) => {
  const trackRef: React.Ref<HTMLDivElement> = useRef(null);
  const handleRef: React.Ref<HTMLDivElement> = useRef(null);

  const [minValueInternal, setMinValueInternal] = useState(defaultLowValue || min);
  const [maxValueInternal, setMaxValueInternal] = useState(defaultHighValue || max);

  const isControlled = isNumber(controlledValue);
  const maxTrackValue = isControlled ? controlledValue! : maxValueInternal;
  const maxTrackPercent = valueToPercent(maxTrackValue, min, max);

  const minTrackValue = isControlled ? controlledValue! : minValueInternal;
  const minTrackPercent = valueToPercent(minTrackValue, min, max);

  const updateValue = (newValue: number, type: string = KnobPointerType.low) => {
    switch (type) {
      case KnobPointerType.low:
        if (newValue > maxValueInternal) {
          return;
        }
        setMinValueInternal(newValue);
        if (isFunction(onChange)) {
          onChange({ low: newValue, high: maxValueInternal });
        }
        break;
      case KnobPointerType.high:
        if (newValue < minValueInternal) {
          return;
        }
        setMaxValueInternal(newValue);
        if (isFunction(onChange)) {
          onChange({ low: minValueInternal, high: newValue });
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (clickPosition: number) => {
    if (!disabled && !readOnly) {
      const newValue = getNewValue(clickPosition, trackRef.current, {
        min,
        max,
        step,
      });

      if (newValue !== null) {
        updateValue(newValue);
      }
    }
  };

  // const handleHover = (pos: number) => {
  //   if (!disabled && !readOnly) {
  //     const newValue = getNewValue(pos, trackRef.current, {
  //       min,
  //       max,
  //       step,
  //     });
  //     if (newValue) {
  //       setHoverPosition(newValue);
  //     }
  //     if (!hoverVisible) {
  //       setHoverVisible(true);
  //     }
  //   }
  // };

  // const handleMouseMove = (event: MouseEvent) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   const pointerPosition = event.clientX;
  //   handleChange(pointerPosition);
  // };

  // const handleMouseHover = () => {
  //   // const pointerPosition = event.clientX;
  //   setHoverVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setHoverVisible(false);
  // };

  // const handleMouseUp = () => {
  //   document.removeEventListener('mouseup', handleMouseUp);
  //   document.removeEventListener('mousemove', handleMouseMove as () => void);
  // };

  // const handleMouseDown = () => {
  //   document.addEventListener('mousemove', handleMouseMove as () => void);
  //   document.addEventListener('mouseup', handleMouseUp);
  // };

  // const handleTouchMove = (event: TouchEvent) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   const touchPosition = event.touches[0].clientX;
  //   handleHover(touchPosition);
  //   handleChange(touchPosition);
  // };

  // const handleTouchEnd = () => {
  //   document.removeEventListener('touchend', handleTouchEnd);
  //   document.removeEventListener('touchmove', handleTouchMove as () => void);
  //   setHoverVisible(false);
  // };

  // const handleTouchStart = () => {
  //   document.addEventListener('touchmove', handleTouchMove as () => void);
  //   document.addEventListener('touchend', handleTouchEnd);
  // };

  // const handleKnobClick = (event: MouseEvent) => {
  //   event.stopPropagation();
  // };

  const handleTrackClick = (event: MouseEvent) => {
    const pointerPosition = event.clientX;
    handleRef.current?.focus();

    handleChange(pointerPosition);
  };

  // const handleKeyDown = (event: KeyboardEvent) => {
  //   if (!disabled) {
  //     const increase = event.key && ['ArrowRight', 'ArrowUp'].includes(event.key);
  //     const decrease = event.key && ['ArrowLeft', 'ArrowDown'].includes(event.key);

  //     let newValue = maxTrackValue;
  //     if (increase) {
  //       newValue = maxTrackValue + step;
  //     }
  //     if (decrease) {
  //       newValue = maxTrackValue - step;
  //     }

  //     updateValue(clamp(newValue, min, max));
  //   }
  // };
  const trackerBoundingClientRect: any = trackRef?.current?.getBoundingClientRect();
  return (
    <Container
      $disabled={disabled}
      $sliderColor={sliderColor}
      $variant={variant}
      onClick={handleTrackClick}
      ref={trackRef}
      tabIndex={-1}
    >
      <SliderTrack
        variant={variant}
        sliderColor={sliderColor}
        readOnly={readOnly}
        // onMouseDown={handleMouseDown}
        // onMouseLeave={handleMouseLeave}
        // onMouseMove={handleMouseHover}
        // onMouseUp={handleMouseUp}
        // onTouchStart={handleTouchStart}
      >
        <SliderTrackHighlight
          sliderColor={sliderColor}
          startValue={minTrackPercent}
          value={maxTrackPercent}
          variant={variant}
        />
        {!readOnly && (
          <>
            <SliderKnobHandler
              max={max}
              min={min}
              step={step}
              value={minValueInternal}
              showTooltip={showTooltip}
              disabled={disabled}
              readOnly={readOnly}
              sliderColor={sliderColor}
              variant={variant}
              onChange={(value) => {
                updateValue(value, KnobPointerType.low);
              }}
              type={KnobPointerType.low}
              trackerBoundingClientRect={trackerBoundingClientRect}
            />
            <SliderKnobHandler
              max={max}
              min={min}
              step={step}
              value={maxValueInternal}
              showTooltip={showTooltip}
              disabled={disabled}
              readOnly={readOnly}
              sliderColor={sliderColor}
              variant={variant}
              onChange={(value) => {
                updateValue(value, KnobPointerType.high);
              }}
              type={KnobPointerType.high}
              trackerBoundingClientRect={trackerBoundingClientRect}
            />
          </>
        )}
      </SliderTrack>
    </Container>
  );
};

export default RangeSlider;

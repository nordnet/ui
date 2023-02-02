import React, { KeyboardEvent, MouseEvent, TouchEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { Component, InternalProps } from './Slider.types';
import DropdownBubble, { TRIANGLE_SIZE } from '../../Atoms/DropdownBubble';
import Typography from '../../Atoms/Typography';
import { getKnobSize, getHeight } from './utils';
import { SliderKnob } from './SliderKnob';
import { SliderTrack } from './SliderTrack';
import { SliderTrackHighlight } from './SliderTrackHighlight';
import { isFunction, isNumber } from '../../common/utils';

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

const StyledDropdownBubble = styled(DropdownBubble)<InternalProps>`
  transform: ${(p) =>
    `translate(-50%, calc(-100% - ${
      getKnobSize(p.$variant) / 2 + TRIANGLE_SIZE + getHeight(p.$variant) / 2
    }px))`};
  padding: 6px 8px;
`;

const Slider: Component = ({
  defaultValue,
  disabled,
  formatter = (value: number) => value.toString(),
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
  const isControlled = isNumber(controlledValue);
  const [hoverPosition, setHoverPosition] = useState<number | null>(null);
  const [hoverVisible, setHoverVisible] = useState<boolean>(false);
  const [valueInternal, setValueInternal] = useState(defaultValue || min);
  const value = isControlled ? controlledValue! : valueInternal;
  const trackPercent = valueToPercent(value, min, max);
  const handlePosition = `calc(${trackPercent}% - ${getKnobSize(variant) / 2}px)`;

  const updateValue = (newValue: number) => {
    if (!isControlled) {
      setValueInternal(newValue);
    }

    if (isFunction(onChange)) {
      onChange(newValue);
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

  const handleHover = (pos: number) => {
    if (!disabled && !readOnly) {
      const newValue = getNewValue(pos, trackRef.current, {
        min,
        max,
        step,
      });
      if (newValue) {
        setHoverPosition(newValue);
      }
      if (!hoverVisible) {
        setHoverVisible(true);
      }
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const pointerPosition = event.clientX;
    handleChange(pointerPosition);
  };

  const handleMouseHover = (event: MouseEvent) => {
    const pointerPosition = event.clientX;
    handleHover(pointerPosition);
  };

  const handleMouseLeave = () => {
    setHoverVisible(false);
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
    handleHover(touchPosition);
    handleChange(touchPosition);
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchend', handleTouchEnd);
    document.removeEventListener('touchmove', handleTouchMove as () => void);
    setHoverVisible(false);
  };

  const handleTouchStart = () => {
    document.addEventListener('touchmove', handleTouchMove as () => void);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleKnobClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const handleTrackClick = (event: MouseEvent) => {
    const pointerPosition = event.clientX;
    handleRef.current?.focus();

    handleChange(pointerPosition);
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
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseHover}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
      >
        <SliderTrackHighlight sliderColor={sliderColor} value={trackPercent} variant={variant} />
        {!readOnly && (
          <AnimatePresence>
            {showTooltip && hoverVisible && (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { ease: 'easeInOut', duration: 0.16 },
                }}
              >
                <StyledDropdownBubble
                  $variant={variant}
                  position="center"
                  placement="top"
                  invertedColors
                  style={{
                    position: 'absolute',
                    ...(hoverPosition && {
                      marginLeft: `${valueToPercent(hoverPosition, min, max)}% `,
                    }),
                  }}
                >
                  {hoverPosition && (
                    <Typography type="tertiary" color={(t) => t.color.textLight}>
                      {formatter(hoverPosition)}
                    </Typography>
                  )}
                </StyledDropdownBubble>
              </motion.div>
            )}
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
          </AnimatePresence>
        )}
      </SliderTrack>
    </Container>
  );
};

export default Slider;

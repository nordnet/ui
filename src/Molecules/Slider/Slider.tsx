import React, { useRef, FC, MouseEvent, TouchEvent, KeyboardEvent } from 'react';
import styled, { withTheme, css } from 'styled-components';
import { Props, getLeftFn, InternalProps } from './Slider.types';
import { THUMB_BIG, THUMB_SMALL, VARIANT_TYPES } from './constants';
import { SliderThumb } from './SliderThumb';

const height = css<InternalProps>`
  height: ${(p) =>
    p.$variant === VARIANT_TYPES.SMALL
      ? `${p.theme.spacing.unit(1)}`
      : `${p.theme.spacing.unit(3)}`}px;
`;

const cursor = css<InternalProps>`
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'default')};
`;

const Container = styled.div<InternalProps>`
  height: ${(p) => (p.$variant === VARIANT_TYPES.SMALL ? THUMB_SMALL : THUMB_BIG)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledSliderWrapper = styled.div<InternalProps>`
  background: linear-gradient(
    to right,
    ${(p) => (p.$sliderColor && !p.$disabled ? p.$sliderColor(p.theme) : p.theme.color.sliderColor)}
      0% 50%,
    ${(p) => p.theme.color.sliderBackgroundColor} 50% 100%
  );
  background: ${(p) => p.$disabled && p.theme.color.sliderDisabled};
  ${height};
  max-width: 100%;
  /* TODO: move this into a prop */
  /* border-radius: 10px; */
  width: 100%;
  ${cursor}
`;

const StyledSlider = styled.div<InternalProps>`
  max-width: 100%;
  ${height};
  position: relative;
  width: calc(
    100% - ${(p) => (p.$variant === VARIANT_TYPES.SMALL ? `${THUMB_SMALL}` : `${THUMB_BIG}`)}px
  );
  margin: 0 auto;
  ${cursor};
`;

const getPercentage = (current: number, min: number, max: number) =>
  ((current - min) / (max - min)) * 100;

const getValue = (percentage: number, min: number, max: number) =>
  ((max - min) / 100) * percentage + min;

const getLeft: getLeftFn = (percentage, variant) => {
  return `calc(${percentage}% - ${
    variant === 'big' ? `${THUMB_BIG / 2 + 1}` : `${THUMB_SMALL / 2}` // + 1 to make left side of the slider look
    // good when magnified
  }px)`;
};

const Slider: FC<Props> = ({
  onChange,
  value,
  max,
  min,
  step,
  sliderColor,
  theme,
  variant = 'big',
  disabled,
}) => {
  const initialPercentage = getPercentage(value, min, max);
  const linearGradient: number = ((value - min) / (max - min)) * 100;

  const sliderRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const thumbRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const diff = useRef() as React.MutableRefObject<number>;

  const handleChange = (val: number) => {
    if (!disabled) {
      let newX = val;
      const start = 0;
      const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;

      if (newX < start) {
        newX = start;
      }
      if (newX > end) {
        newX = end;
      }

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

    const newX = event.clientX - diff.current - sliderRef.current.getBoundingClientRect().left;
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
      event.touches[0].clientX - diff.current - sliderRef.current.getBoundingClientRect().left;
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

  const handleSliderClick = (event: MouseEvent) => {
    const newX = event.clientX - sliderRef.current.getBoundingClientRect().left;
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

  const sliderBackground = {
    background: `linear-gradient(to right, ${
      sliderColor ? sliderColor(theme) : theme.color.sliderColor
    } ${linearGradient}% , ${theme.color.sliderBackgroundColor} ${linearGradient}%)`,
  };

  const disabledBackground = {
    background: `${theme.color.sliderDisabled}`,
  };

  return (
    <Container $variant={variant}>
      <StyledSliderWrapper $sliderColor={sliderColor} $variant={variant} $disabled={disabled}>
        <StyledSlider
          ref={sliderRef}
          style={disabled ? disabledBackground : sliderBackground}
          onClick={handleSliderClick}
          $sliderColor={sliderColor}
          $variant={variant}
          $disabled={disabled}
        >
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
        </StyledSlider>
      </StyledSliderWrapper>
    </Container>
  );
};

export default withTheme(Slider);

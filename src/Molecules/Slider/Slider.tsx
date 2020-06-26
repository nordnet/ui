import React, { useRef, FC, MouseEvent, TouchEvent, KeyboardEvent } from 'react';
import Color from 'color';
import styled, { withTheme, css } from 'styled-components';
import { Props, getLeftFn, SliderTypes } from './Slider.types';
import { Theme } from '../../theme/theme.types';

const THUMB_BIG = 30;
const THUMB_SMALL = 20;
const VARIANT_TYPES = { ROUND: 'round', SQUARE: 'square' };

const pressedThumbStyle = css<SliderTypes>`
  &:active {
    background: ${p => {
      const thumbColor = p.leftColor ? p.leftColor(p.theme) : '';
      return `${thumbColor ? Color(thumbColor).darken(0.1) : ''}`;
    }};
    height: ${p => p.theme.spacing.unit(4)}px;
    width: ${p => p.theme.spacing.unit(4)}px;
  }
`;

const StyledSliderWrapper = styled('div').withConfig({
  shouldForwardProp: prop => !['variant', 'leftColor', 'rightColor'].includes(prop),
})<SliderTypes>`
  background: linear-gradient(
    to right,
    ${p => (p.leftColor ? p.leftColor(p.theme) : p.theme.color.sliderLeftColor)} 0% 50%,
    ${p => (p.rightColor ? p.rightColor(p.theme) : p.theme.color.sliderRightColor)} 50% 100%
  );
  height: ${p =>
    p.variant === VARIANT_TYPES.ROUND
      ? `${p.theme.spacing.unit(1)}px`
      : `${p.theme.spacing.unit(4.25)}px`};
  max-width: 100%;
  width: 100%;
`;

const StyledSlider = styled('div').withConfig({
  shouldForwardProp: prop => !['variant', 'leftColor', 'rightColor'].includes(prop),
})<SliderTypes>`
  max-width: 100%;
  height: ${p =>
    p.variant === VARIANT_TYPES.ROUND
      ? `${p.theme.spacing.unit(1)}px`
      : `${p.theme.spacing.unit(4.25)}px`};
  margin: ${p => p.theme.spacing.unit(1.25)}px auto;
  position: relative;
  width: calc(100% - ${p => (p.variant === VARIANT_TYPES.ROUND ? THUMB_SMALL : THUMB_BIG)}px);
`;

const StyledThumb = styled('div').withConfig({
  shouldForwardProp: prop => !['variant', 'leftColor', 'rightColor'].includes(prop),
})<SliderTypes>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${p => (p.variant === VARIANT_TYPES.ROUND ? THUMB_SMALL : THUMB_BIG)}px;
  height: ${p => (p.variant === VARIANT_TYPES.ROUND ? THUMB_SMALL : THUMB_BIG)}px;
  top: 50%;
  border-radius: ${p => (p.variant === VARIANT_TYPES.ROUND ? '50%' : 0)};
  transform: translateY(-50%);
  background: ${p => p.theme.color.bubbleBackground};
  border: ${p =>
    p.variant === VARIANT_TYPES.ROUND && p.leftColor
      ? `4px solid ${p.leftColor(p.theme)}`
      : `1px solid ${p.theme.color.sliderThumbBorder}`};
  cursor: grab;
  &:focus {
    background: ${p =>
      p.variant === VARIANT_TYPES.ROUND && p.leftColor
        ? p.leftColor(p.theme)
        : p.theme.color.bubbleBackground};
    border: ${p =>
      p.leftColor && p.rightColor ? `1px solid ${p.theme.color.sliderThumbActive}` : 'none'};
  }
  ${p => p.variant === VARIANT_TYPES.ROUND && pressedThumbStyle}
`;

const HamburgerSlice = (theme: Theme) => `
  background: ${theme.color.sliderThumbBackground};
  height: 2px;
  position: absolute;
  width: 12px;
`;

const StyledIcon = styled.div`
  &:before {
    ${p => HamburgerSlice(p.theme)}
    content: '';
    top: -6px;
  }

  ${p => HamburgerSlice(p.theme)}

  &:after {
    ${p => HamburgerSlice(p.theme)}
    content: '';
    top: 6px;
  }
`;

const getPercentage = (current: number, min: number, max: number) =>
  ((current - min) / (max - min)) * 100;

const getValue = (percentage: number, min: number, max: number) =>
  ((max - min) / 100) * percentage + min;

const getLeft: getLeftFn = (percentage, variant) =>
  `calc(${percentage}% - ${variant === 'square' ? THUMB_BIG / 2 : THUMB_SMALL / 2}px)`;

const Slider: FC<Props> = ({
  onChange,
  value,
  max,
  min,
  step,
  leftColor,
  rightColor,
  theme,
  variant = 'square',
}) => {
  const initialPercentage = getPercentage(value, min, max);
  const linearGradient: number = ((value - min) / (max - min)) * 100;

  const sliderRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const thumbRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const diff = useRef() as React.MutableRefObject<number>;

  const handleChange = (val: number) => {
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
  };

  const gradient = {
    background: `linear-gradient(to right, ${
      leftColor ? leftColor(theme) : theme.color.sliderLeftColor
    } ${linearGradient}% , ${
      rightColor ? rightColor(theme) : theme.color.sliderRightColor
    } ${linearGradient}%)`,
  };
  return (
    <StyledSliderWrapper leftColor={leftColor} rightColor={rightColor}>
      <StyledSlider
        ref={sliderRef}
        style={gradient}
        onClick={handleSliderClick}
        leftColor={leftColor}
        rightColor={rightColor}
      >
        <StyledThumb
          leftColor={leftColor}
          rightColor={rightColor}
          tabIndex={0}
          ref={thumbRef}
          onClick={handleThumbClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onKeyDown={handleKeyDown}
          style={{ left: getLeft(initialPercentage, variant) }}
          role="slider"
          aria-valuemin={min}
          aria-valuenow={value}
          aria-valuemax={max}
          variant={variant}
        >
          {variant === VARIANT_TYPES.SQUARE && <StyledIcon />}
        </StyledThumb>
      </StyledSlider>
    </StyledSliderWrapper>
  );
};

export default withTheme(Slider);

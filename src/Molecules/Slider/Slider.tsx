import React, { useRef, FC, MouseEvent, TouchEvent, KeyboardEvent } from 'react';
import styled, { withTheme } from 'styled-components';
import { Props } from './Slider.types';
import { Theme } from '../../theme/theme.types';

const THUMB_BIG = 30;
const THUMB_SMALL = 20;

const StyledSliderWrapper = styled.div<{
  leftColor: Props['leftColor'];
  rightColor: Props['rightColor'];
  sliderColor: Props['sliderColor'];
}>`
  background: linear-gradient(
    to right,
    ${p => (p.leftColor ? p.leftColor(p.theme) : p.sliderColor(p.theme))} 0% 50%,
    ${p => (p.rightColor ? p.rightColor(p.theme) : p.theme.color.sliderRightColor)} 50% 100%
  );
  height: ${p =>
    p.leftColor && p.rightColor
      ? `${p.theme.spacing.unit(4.25)}px`
      : `${p.theme.spacing.unit(1)}px`};
  max-width: 100%;
  width: 100%;
`;

const StyledSlider = styled.div<{
  leftColor: Props['leftColor'];
  rightColor: Props['rightColor'];
}>`
  max-width: 100%;
  height: ${p =>
    p.leftColor && p.rightColor
      ? `${p.theme.spacing.unit(4.25)}px`
      : `${p.theme.spacing.unit(1)}px`};
  margin: ${t => t.theme.spacing.unit(1.25)}px auto;
  position: relative;
  width: calc(100% - ${p => (p.leftColor && p.rightColor ? THUMB_BIG : THUMB_SMALL)}px);
`;

const StyledThumb = styled('div').withConfig({
  shouldForwardProp: prop => !['sliderColor'].includes(prop),
})<{
  sliderColor: Props['sliderColor'];
  leftColor: Props['leftColor'];
  rightColor: Props['rightColor'];
}>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${p => (p.leftColor && p.rightColor ? THUMB_BIG : THUMB_SMALL)}px;
  height: ${p => (p.leftColor && p.rightColor ? THUMB_BIG : THUMB_SMALL)}px;
  top: 50%;
  border-radius: ${p => (p.sliderColor ? '50%' : 0)};
  transform: translateY(-50%);
  background: ${p => p.theme.color.bubbleBackground};
  border: ${p =>
    p.sliderColor
      ? `4px solid ${p.sliderColor(p.theme)}`
      : `1px solid ${p.theme.color.sliderThumbBorder}`};
  cursor: grab;
  &:focus {
    background: ${p => (p.sliderColor ? p.sliderColor(p.theme) : p.theme.color.bubbleBackground)};
    border: ${p =>
      p.leftColor && p.rightColor ? `1px solid ${p.theme.color.sliderThumbActive}` : 'none'};
  }
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

const getLeft = (percentage: number) => `calc(${percentage}% - ${THUMB_BIG / 2}px)`;

const Slider: FC<Props> = ({
  onChange,
  value,
  max,
  min,
  step,
  leftColor,
  rightColor,
  theme,
  sliderColor,
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
      thumbRef.current.style.left = getLeft(newPercentage);
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
      leftColor ? leftColor(theme) : sliderColor(theme)
    } ${linearGradient}% , ${
      rightColor ? rightColor(theme) : theme.color.sliderRightColor
    } ${linearGradient}%)`,
  };

  return (
    <StyledSliderWrapper leftColor={leftColor} rightColor={rightColor} sliderColor={sliderColor}>
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
          sliderColor={sliderColor}
          tabIndex={0}
          ref={thumbRef}
          onClick={handleThumbClick}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onKeyDown={handleKeyDown}
          style={{ left: getLeft(initialPercentage) }}
          role="slider"
          aria-valuemin={min}
          aria-valuenow={value}
          aria-valuemax={max}
        >
          {leftColor && rightColor && <StyledIcon />}
        </StyledThumb>
      </StyledSlider>
    </StyledSliderWrapper>
  );
};

export default withTheme(Slider);

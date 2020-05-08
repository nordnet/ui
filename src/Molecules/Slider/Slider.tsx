import React, { useRef, FC, MouseEvent, TouchEvent, KeyboardEvent } from 'react';
import styled, { withTheme } from 'styled-components';
import { Props } from './Slider.types';
import { Theme } from '../../theme/theme.types';

const THUMB_WIDTH = 30;

const StyledSliderWrapper = styled.div<{
  leftColor: Props['leftColor'];
  rightColor: Props['rightColor'];
}>`
  background: linear-gradient(
    to right,
    ${p => (p.leftColor ? p.leftColor(p.theme) : p.theme.color.sliderLeftColor)} 0% 50%,
    ${p => (p.rightColor ? p.rightColor(p.theme) : p.theme.color.sliderRightColor)} 50% 100%
  );
  height: 15px;
  max-width: 100%;
  width: 100%;
`;

const StyledSlider = styled.div`
  max-width: 100%;
  height: 15px;
  margin: 5px auto;
  position: relative;
  width: calc(100% - ${THUMB_WIDTH}px);
`;

const StyledThumb = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${THUMB_WIDTH}px;
  height: ${THUMB_WIDTH}px;
  top: 50%;
  transform: translateY(-50%);
  background: ${p => p.theme.color.sliderThumbColor};
  border: 1px solid ${p => p.theme.color.sliderThumbBorder};
  cursor: grab;
  &:focus {
    border: 1px solid ${p => p.theme.color.sliderThumbActive};
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

const getLeft = (percentage: number) => `calc(${percentage}% - ${THUMB_WIDTH / 2}px)`;

const Slider: FC<Props> = ({ onChange, value, max, min, step, leftColor, rightColor, theme }) => {
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
      <StyledSlider ref={sliderRef} style={gradient} onClick={handleSliderClick}>
        <StyledThumb
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
          <StyledIcon />
        </StyledThumb>
      </StyledSlider>
    </StyledSliderWrapper>
  );
};

export default withTheme(Slider);

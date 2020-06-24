import React, { useRef, FC, MouseEvent, TouchEvent, KeyboardEvent } from 'react';
import styled, { withTheme } from 'styled-components';
import { Props } from './Range.types';

const THUMB_WIDTH = 30;

const StyledSliderWrapper = styled.div`
  height: 15px;
  max-width: 100%;
  width: 100%;
`;

const StyledRange = styled.div<{
  sliderColor: Props['sliderColor'];
}>`
  background: ${p => (p.sliderColor ? p.sliderColor(p.theme) : p.theme.color.sliderLeftColor)};
  color: ${p => (p.sliderColor ? p.sliderColor(p.theme) : p.theme.color.sliderLeftColor)};
  max-width: 100%;
  height: 15px;
  margin: 5px auto;
  position: relative;
  width: calc(100% - ${THUMB_WIDTH}px);
`;

const StyledThumb = styled.div<{
  sliderColor: Props['sliderColor'];
}>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${THUMB_WIDTH}px;
  height: ${THUMB_WIDTH}px;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  background: ${p => (p.sliderColor ? p.sliderColor(p.theme) : p.theme.color.sliderLeftColor)};
  color: ${p => (p.sliderColor ? p.sliderColor(p.theme) : p.theme.color.sliderLeftColor)};
  border: 3px solid black;
  cursor: grab;
  &:focus {
    border: 1px solid
      ${p => (p.sliderColor ? p.sliderColor(p.theme) : p.theme.color.sliderLeftColor)};
  }
`;

const getPercentage = (current: number, min: number, max: number) =>
  ((current - min) / (max - min)) * 100;

const getValue = (percentage: number, min: number, max: number) =>
  ((max - min) / 100) * percentage + min;

const getLeft = (percentage: number) => `calc(${percentage}% - ${THUMB_WIDTH / 2}px)`;

const Range: FC<Props> = ({ onChange, value, max, min, step, sliderColor }) => {
  const initialPercentage = getPercentage(value, min, max);

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

  return (
    <StyledSliderWrapper>
      <StyledRange ref={sliderRef} sliderColor={sliderColor} onClick={handleSliderClick}>
        <StyledThumb
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
        />
      </StyledRange>
    </StyledSliderWrapper>
  );
};

export default withTheme(Range);

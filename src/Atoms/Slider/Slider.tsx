import React from 'react';
import styled from 'styled-components';
import { SliderComponent, StyledProps } from './Slider.types';
import { Box } from '../Box/Box';
import { Typography } from '../Typography/Typography';

/* stylelint-disable */
const StyledRangeSlider = styled.input<StyledProps>`
  background: linear-gradient(
    to right,
    ${p => p.theme.color.slider} 0% ${p => p.linearGradient}%,
    ${p => p.theme.color.sliderBackground} ${p => p.linearGradient}% 100%
  );
  -webkit-appearance: none;
  margin: 0 auto;
  padding: 0;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    height: 18px;
  }

  &::-webkit-slider-thumb {
    background: ${p => p.theme.color.sliderWhite};
    -webkit-appearance: none;
    border: 1px solid #ccc;
    cursor: -moz-grab;
    cursor: -webkit-grab;
    height: 30px;
    margin-top: -6px;
    width: 30px;
  }

  &:focus::-webkit-slider-thumb {
    border: 1px solid ${p => p.theme.color.sliderBorder};
    -webkit-box-shadow: 0px 0px 5px ${p => p.theme.color.sliderBorder};
    box-shadow: 0px 0px 5px ${p => p.theme.color.sliderBorder};
  }

  &::-moz-range-thumb {
    border-radius: 0;
    border: 1px solid #ccc;
    cursor: pointer;
    height: 30px;
    width: 30px;
  }

  &:focus::-moz-range-thumb {
    border: 1px solid ${p => p.theme.color.sliderBorder};
    box-shadow: 0px 0px 5px ${p => p.theme.color.sliderBorder};
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 18px 0;
    color: transparent;
    height: 18px;
    width: 100%;
  }

  &:focus::-ms-thumb {
    border: 1px solid ${p => p.theme.color.sliderBorder};
    box-shadow: 0px 0px 5px ${p => p.theme.color.sliderBorder};
  }
`;
/* stylelint-enable */

const Slider: SliderComponent = ({ onChange, initialValue, min, max, step }) => {
  const [value, setValue] = React.useState(initialValue);

  // @ts-ignore
  const linearGradient: number = ((value - min) / (max - min)) * 100;

  return (
    <React.Fragment>
      <Box>
        <StyledRangeSlider
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => {
            const valueAsNumber = Number(e.target.value);
            onChange(valueAsNumber);
            setValue(valueAsNumber);
          }}
          linearGradient={linearGradient}
        />
      </Box>
      <Box>
        <Typography type="title3">{value}</Typography>
      </Box>
    </React.Fragment>
  );
};

export default Slider;

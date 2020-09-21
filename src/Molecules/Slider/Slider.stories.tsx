import React, { useState } from 'react';
import { number, withKnobs } from '@storybook/addon-knobs';
import Slider from '.';
import { Typography, Number } from '../..';

export default {
  title: 'Molecules | Slider',
  decorators: [withKnobs],
};

const getSliderProps = ({ min = 0, max = 100, step = 1 }) => ({
  min: number('Minimum', min),
  max: number('Maximum', max),
  step: number('Step size', step),
});

export const Default = () => {
  const Example = () => {
    const [value, setValue] = useState(0);

    const handleChange = (v: number) => setValue(v);

    return (
      <>
        <Slider
          onChange={handleChange}
          defaultValue={50}
          {...getSliderProps({ min: 0, max: 100, step: 1 })}
        />
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </>
    );
  };
  return <Example />;
};

export const MinimumValue = () => {
  const Example = () => {
    const [value, setValue] = useState(0);

    const handleChange = (v: number) => setValue(v);

    return (
      <>
        <Slider
          onChange={handleChange}
          defaultValue={0}
          {...getSliderProps({ min: 0, max: 100, step: 1 })}
          sliderColor={(t) => t.color.sliderColor}
        />
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </>
    );
  };
  return <Example />;
};

export const MaximumValue = () => {
  const Example = () => {
    const [value, setValue] = useState(0);

    const handleChange = (v: number) => setValue(v);

    return (
      <>
        <Slider
          onChange={handleChange}
          defaultValue={100}
          {...getSliderProps({ min: 0, max: 100, step: 1 })}
          sliderColor={(t) => t.color.sliderColor}
        />
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </>
    );
  };
  return <Example />;
};

export const NegativeToPositive = () => {
  const Example = () => {
    const [value, setValue] = useState(0);

    const handleChange = (v: number) => setValue(v);

    return (
      <>
        <Slider
          onChange={handleChange}
          defaultValue={0}
          {...getSliderProps({ min: -50, max: 50, step: 1 })}
          sliderColor={(t) => t.color.negative}
        />
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </>
    );
  };
  return <Example />;
};

export const CustomColors = () => {
  return (
    <Slider
      defaultValue={50}
      {...getSliderProps({ min: 0, max: 100, step: 1 })}
      sliderColor={(t) => t.color.positive}
    />
  );
};

export const SmallVariant = () => {
  const Example = () => {
    const [value, setValue] = useState(0);

    const handleChange = (v: number) => setValue(v);

    return (
      <>
        <Slider
          onChange={handleChange}
          defaultValue={50}
          {...getSliderProps({ min: 0, max: 100, step: 1 })}
          sliderColor={(t) => t.color.sliderColor}
          variant="small"
        />
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </>
    );
  };
  return <Example />;
};

export const Disabled = () => {
  const Example = () => {
    const [value, setValue] = useState(0);

    const handleChange = (v: number) => setValue(v);

    return (
      <>
        <Slider
          onChange={handleChange}
          defaultValue={50}
          {...getSliderProps({ min: 0, max: 100, step: 1 })}
          sliderColor={(t) => t.color.sliderDisabled}
          disabled
        />
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </>
    );
  };
  return <Example />;
};

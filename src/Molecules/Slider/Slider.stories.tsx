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
  const ControlledExample = () => {
    const [value, setValue] = useState(50);

    const handleChange = (v: number) => setValue(v);

    return (
      <>
        <Slider
          onChange={handleChange}
          value={value}
          {...getSliderProps({ min: 0, max: 100, step: 1 })}
        />
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </>
    );
  };
  return <ControlledExample />;
};

export const MinimumValue = () => {
  const ControlledExample = () => {
    const [value, setValue] = useState(0);

    const handleChange = (v: number) => setValue(v);

    return (
      <>
        <Slider
          onChange={handleChange}
          value={value}
          {...getSliderProps({ min: 0, max: 100, step: 1 })}
        />
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </>
    );
  };
  return <ControlledExample />;
};

export const MaximumValue = () => {
  const ControlledExample = () => {
    const [value, setValue] = useState(100);

    const handleChange = (v: number) => setValue(v);

    return (
      <>
        <Slider
          onChange={handleChange}
          value={value}
          {...getSliderProps({ min: 0, max: 100, step: 1 })}
        />
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </>
    );
  };
  return <ControlledExample />;
};

export const NegativeToPositive = () => {
  const ControlledExample = () => {
    const [value, setValue] = useState(0);

    const handleChange = (v: number) => setValue(v);

    return (
      <>
        <Slider
          onChange={handleChange}
          value={value}
          {...getSliderProps({ min: -50, max: 50, step: 1 })}
        />
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </>
    );
  };
  return <ControlledExample />;
};

export const CustomColors = () => {
  const ControlledExample = () => {
    const [value, setValue] = useState(50);

    const handleChange = (v: number) => setValue(v);

    return (
      <>
        <Slider
          onChange={handleChange}
          value={value}
          {...getSliderProps({ min: 0, max: 100, step: 1 })}
          leftColor={t => t.color.positive}
          rightColor={t => t.color.negative}
        />
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </>
    );
  };
  return <ControlledExample />;
};

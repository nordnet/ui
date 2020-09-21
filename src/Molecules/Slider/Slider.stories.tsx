import React, { useState } from 'react';
import { number, withKnobs } from '@storybook/addon-knobs';
import Slider from '.';
import { Typography, Number, Input } from '../..';

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
    const [value, setValue] = useState(50);

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
          {...getSliderProps({ min: 0, max: 10, step: 1 })}
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
    const [value, setValue] = useState(100);

    const handleChange = (v: number) => setValue(v);

    return (
      <>
        <Slider
          onChange={handleChange}
          defaultValue={100}
          {...getSliderProps({ min: 50, max: 100, step: 1 })}
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
          sliderColor={(t) => (value > 0 ? t.color.positive : t.color.negative)}
        />
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </>
    );
  };
  return <Example />;
};

export const SmallVariant = () => {
  const Example = () => {
    const [value, setValue] = useState(50);

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
    const [value, setValue] = useState(50);

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

export const Controlled = () => {
  const ControlledExample = () => {
    const start = 50;
    const [value, setValue] = useState(start);

    const handleChange = (v: string) => setValue(parseInt(v, 10));

    return (
      <>
        <Slider value={value} {...getSliderProps({ min: 0, max: 100, step: 1 })} />

        <Input.Number
          id="unique-id"
          label="Controlled from outside"
          defaultValue={start}
          onChange={handleChange}
          min="0"
          max="100"
          step="1"
        />
      </>
    );
  };
  return <ControlledExample />;
};

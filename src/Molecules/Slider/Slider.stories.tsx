import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Slider from '.';
import { Box, Input, Number, Typography } from '../..';
import { Props } from './Slider.types';
import { secondsToTimeString } from '../../common/utils';

export default {
  title: 'Molecules / Slider',
  component: Slider,
} as Meta;

const Template: StoryFn<Props> = (args) => {
  const [value, setValue] = useState(args.defaultValue);
  const handleChange = (v: number) => setValue(v);

  return (
    <Box p={20}>
      <Slider {...args} onChange={handleChange} />
      <Typography>
        <Number value={value} maximumDecimals={2} /> Kronor
      </Typography>
    </Box>
  );
};

export const Default = {
  render: Template,

  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
  },
};

export const MinimumValue = {
  render: Template,

  args: {
    ...Default.args,
    defaultValue: 0,
    max: 10,
    sliderColor: (t) => t.color.sliderColor,
  },
};

export const MaximumValue = {
  render: Template,

  args: {
    ...Default.args,
    defaultValue: 100,
    min: 50,
    sliderColor: (t) => t.color.sliderColor,
  },
};

const TemplateMultiColor: StoryFn<Props> = (args) => {
  const [value, setValue] = useState(args.defaultValue!);
  const handleChange = (v: number) => setValue(v);

  return (
    <Box p={20}>
      <Slider
        {...args}
        onChange={handleChange}
        sliderColor={(t) => (value > 0 ? t.color.positive : t.color.negative)}
      />
      <Typography>
        <Number value={value} maximumDecimals={2} /> Kronor
      </Typography>
    </Box>
  );
};

export const NegativeToPositive = {
  render: TemplateMultiColor,

  args: {
    defaultValue: 0,
    min: -50,
    max: 50,
    step: 1,
  },
};

export const SmallVariant = {
  render: Template,

  args: {
    ...Default.args,
    variant: 'small',
  },
};

const PlayerTemplate: StoryFn<Props> = (args) => {
  return (
    <Box p={20}>
      <Slider {...args} />
    </Box>
  );
};

export const PlayerVariant = {
  render: PlayerTemplate,

  args: {
    ...Default.args,
    defaultValue: 1800,
    min: 0,
    max: 4000,
    step: 1,
    variant: 'player',
    formatter: secondsToTimeString,
    showTooltip: true,
  },
};

export const Disabled = {
  render: Template,

  args: {
    ...Default.args,
    disabled: true,
  },
};

const TemplateControlled: StoryFn<Props> = (args) => {
  const start = 50;
  const [value, setValue] = useState(start);
  const handleChange = (v: string) => setValue(parseInt(v, 10));

  return (
    <Box p={20}>
      <Slider {...args} value={value} />
      <Input.Number
        id="unique-id"
        label="Controlled from outside"
        defaultValue={start}
        onChange={handleChange}
        min={args.min}
        max={args.max}
        step={args.step}
      />
    </Box>
  );
};

export const Controlled = {
  render: TemplateControlled,

  args: {
    min: 0,
    max: 100,
    step: 1,
  },
};

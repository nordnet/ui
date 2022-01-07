import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import Slider from '.';
import { Input, Number, Typography } from '../..';
import { Props } from './Slider.types';

export default {
  title: 'Molecules / Slider',
  component: Slider,
} as Meta;

const Template: Story<Props> = (args) => {
  const [value, setValue] = useState(args.defaultValue);
  const handleChange = (v: number) => setValue(v);

  return (
    <>
      <Slider {...args} onChange={handleChange} />
      <Typography>
        <Number value={value} maximumDecimals={2} /> Kronor
      </Typography>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  defaultValue: 50,
  min: 0,
  max: 100,
  step: 1,
};

export const MinimumValue = Template.bind({});
MinimumValue.args = {
  ...Default.args,
  defaultValue: 0,
  max: 10,
  sliderColor: (t) => t.color.sliderColor,
};

export const MaximumValue = Template.bind({});
MaximumValue.args = {
  ...Default.args,
  defaultValue: 100,
  min: 50,
  sliderColor: (t) => t.color.sliderColor,
};

const TemplateMultiColor: Story<Props> = (args) => {
  const [value, setValue] = useState(args.defaultValue!);
  const handleChange = (v: number) => setValue(v);

  return (
    <>
      <Slider
        {...args}
        onChange={handleChange}
        sliderColor={(t) => (value > 0 ? t.color.positive : t.color.negative)}
      />
      <Typography>
        <Number value={value} maximumDecimals={2} /> Kronor
      </Typography>
    </>
  );
};

export const NegativeToPositive = TemplateMultiColor.bind({});
NegativeToPositive.args = {
  defaultValue: 0,
  min: -50,
  max: 50,
  step: 1,
};

export const SmallVariant = Template.bind({});
SmallVariant.args = {
  ...Default.args,
  variant: 'small',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

const TemplateControlled: Story<Props> = (args) => {
  const start = 50;
  const [value, setValue] = useState(start);
  const handleChange = (v: string) => setValue(parseInt(v, 10));

  return (
    <>
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
    </>
  );
};

export const Controlled = TemplateControlled.bind({});
Controlled.args = {
  min: 0,
  max: 100,
  step: 1,
};

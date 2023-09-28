import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import RangeSlider from './RangeSlider';
import { Box, Input, Number, Typography } from '../..';
import { Props } from './RangeSlider.types';
import { secondsToTimeString } from '../../common/utils';

export default {
  title: 'Molecules / RangeSlider',
  component: RangeSlider,
} as Meta;

const Template: Story<Props> = (args) => {
  const [value, setValue] = useState({ low: args.defaultLowValue, high: args.defaultHighValue });
  const handleChange = (v: any) => setValue(v);

  return (
    <Box p={20}>
      <RangeSlider {...args} onChange={handleChange} />
      <Typography>
        <Number value={value.low} maximumDecimals={2} />-{' '}
        <Number value={value.high} maximumDecimals={2} /> Kronor
      </Typography>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  defaultLowValue: 20,
  defaultHighValue: 40,
  min: 0,
  max: 100,
  step: 1,
  showTooltip: true,
};

export const MinimumValue = Template.bind({});
MinimumValue.args = {
  ...Default.args,
  defaultLowValue: 0,
  max: 10,
  sliderColor: (t) => t.color.sliderColor,
};

export const MaximumValue = Template.bind({});
MaximumValue.args = {
  ...Default.args,
  defaultLowValue: 100,
  min: 50,
  sliderColor: (t) => t.color.sliderColor,
};

const TemplateMultiColor: Story<Props> = (args) => {
  const [value, setValue] = useState({ low: args.defaultLowValue, high: args.defaultHighValue });
  const handleChange = (v: any) => setValue(v);

  return (
    <Box p={20}>
      <RangeSlider
        {...args}
        onChange={handleChange}
        sliderColor={(t) => (value?.low && value.low > 0 ? t.color.positive : t.color.negative)}
      />
      <Typography>
        <Number value={value.low} maximumDecimals={2} />-{' '}
        <Number value={value.high} maximumDecimals={2} /> Kronor
      </Typography>
    </Box>
  );
};

export const NegativeToPositive = TemplateMultiColor.bind({});
NegativeToPositive.args = {
  defaultLowValue: 0,
  min: -50,
  max: 50,
  step: 1,
};

export const SmallVariant = Template.bind({});
SmallVariant.args = {
  ...Default.args,
  variant: 'small',
};

const PlayerTemplate: Story<Props> = (args) => {
  return (
    <Box p={20}>
      <RangeSlider {...args} />
    </Box>
  );
};

export const PlayerVariant = PlayerTemplate.bind({});
PlayerVariant.args = {
  ...Default.args,
  defaultLowValue: 180,
  defaultHighValue: 280,
  min: 0,
  max: 4000,
  step: 1,
  variant: 'player',
  formatter: secondsToTimeString,
  showTooltip: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  defaultLowValue: 20,
  disabled: true,
};

const TemplateControlled: Story<Props> = (args) => {
  const start = 50;
  const [value, setValue] = useState(start);
  const handleChange = (v: string) => setValue(parseInt(v, 10));

  return (
    <Box p={20}>
      <RangeSlider {...args} value={value} />
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

export const Controlled = TemplateControlled.bind({});
Controlled.args = {
  defaultLowValue: 20,
  min: 0,
  max: 100,
  step: 1,
};

import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import RangeSlider from './RangeSlider';
import { Box, Number, Typography } from '../..';
import { Props } from './RangeSlider.types';

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
  min: 10,
  max: 100,
  sliderColor: (t) => t.color.sliderColor,
};

export const MaximumValue = Template.bind({});
MaximumValue.args = {
  ...Default.args,
  defaultLowValue: 0,
  defaultHighValue: 100,
  min: 50,
  max: 100,
  sliderColor: (t) => t.color.sliderColor,
};

export const ErrorSlider = Template.bind({});
ErrorSlider.args = {
  ...Default.args,
  defaultLowValue: 20,
  defaultHighValue: 100,
  min: 0,
  max: 50,
  step: 1,
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
        <Number value={value.high} maximumDecimals={2} /> SEK
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

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  defaultLowValue: 20,
  disabled: true,
};

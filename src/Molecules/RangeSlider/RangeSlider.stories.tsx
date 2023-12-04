import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import RangeSlider from '.';
import { Box, Flexbox, Number, Typography } from '../..';
import { Props } from './RangeSlider.types';

const meta: Meta<typeof RangeSlider> = {
  component: RangeSlider,
  title: 'Molecules / RangeSlider',
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

const Template = (args: Props) => {
  const [value, setValue] = useState({ low: args.defaultLowValue, high: args.defaultHighValue });
  const handleChange = (v: { low: number; high: number }) => setValue(v);

  return (
    <Box p={20}>
      <div style={{ border: '1px solid red' }}>
        <RangeSlider {...args} onChange={handleChange} />
      </div>
      <Typography>
        <Flexbox container justifyContent="space-between" gap={4}>
          <Flexbox item>
            <Number value={value.low} maximumDecimals={2} />
          </Flexbox>
          <Flexbox item>
            <Number value={value.high} maximumDecimals={2} /> SEK
          </Flexbox>
        </Flexbox>
      </Typography>
    </Box>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    defaultLowValue: 20,
    defaultHighValue: 40,
    min: 0,
    max: 100,
    step: 1,
  },
};

export const Minimum: Story = {
  render: Template,
  args: {
    ...Default.args,
    defaultLowValue: 0,
    defaultHighValue: 5,
    min: 0,
    max: 10,
  },
};

export const NoDefaultValues: Story = {
  render: Template,
  args: {
    min: 0,
    max: 10,
    step: 1,
  },
};

export const Maximum: Story = {
  render: Template,
  args: {
    ...Default.args,
    defaultLowValue: 5,
    defaultHighValue: 10,
    min: 0,
    max: 10,
  },
};

export const ValuesOutsideRange: Story = {
  // used to verify that the values are clamped to the min/max values and not rendered outside the range
  render: Template,
  args: {
    ...Default.args,
    defaultLowValue: -50,
    defaultHighValue: 50,
    min: -10,
    max: 10,
  },
};

const TemplateCustomColor = (args: Props) => {
  const [value, setValue] = useState({ low: args.defaultLowValue, high: args.defaultHighValue });
  const handleChange = (v: { low: number; high: number }) => setValue(v);
  return (
    <Box p={20}>
      <RangeSlider {...args} sliderColor={(t) => t.color.positive} onChange={handleChange} />
      <Typography>
        <Flexbox container justifyContent="space-between" gap={4}>
          <Flexbox item>
            <Number value={value.low} maximumDecimals={2} />
          </Flexbox>
          <Flexbox item>
            <Number value={value.high} maximumDecimals={2} /> SEK
          </Flexbox>
        </Flexbox>
      </Typography>
    </Box>
  );
};

export const CustomColor: Story = {
  render: TemplateCustomColor,
  args: {
    defaultLowValue: -30,
    defaultHighValue: 30,
    min: -50,
    max: 50,
    step: 1,
  },
};

export const SmallVariant: Story = {
  render: Template,
  args: {
    ...Default.args,
    variant: 'small',
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    ...Default.args,
    disabled: true,
  },
};

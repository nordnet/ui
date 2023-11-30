import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import Slider from '.';
import { Box, Input, Number, Typography } from '../..';
import { Props } from './Slider.types';
import { secondsToTimeString } from '../../common/utils';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Molecules / Slider',
};

export default meta;
type Story = StoryObj<typeof Slider>;

const Template = (args: Props) => {
  const [value, setValue] = useState(args.defaultValue);
  const handleChange = (v: number) => setValue(v);

  return (
    <IntlProvider locale="en">
      <Box p={20}>
        <div style={{ border: '1px solid red' }}>
          <Slider {...args} onChange={handleChange} />
        </div>
        <Typography>
          <Number value={value} maximumDecimals={2} /> Kronor
        </Typography>
      </Box>
    </IntlProvider>
  );
};

export const Default: Story = {
  render: Template,

  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
  },
};

export const MinimumValue: Story = {
  render: Template,

  args: {
    ...Default.args,
    defaultValue: 0,
    max: 10,
    sliderColor: (t) => t.color.sliderColor,
  },
};

export const MaximumValue: Story = {
  render: Template,

  args: {
    ...Default.args,
    defaultValue: 100,
    min: 50,
    sliderColor: (t) => t.color.sliderColor,
  },
};

const TemplateMultiColor = (args: Props) => {
  const [value, setValue] = useState(args.defaultValue!);
  const handleChange = (v: number) => setValue(v);

  return (
    <IntlProvider locale="en">
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
    </IntlProvider>
  );
};

export const NegativeToPositive: Story = {
  render: TemplateMultiColor,

  args: {
    defaultValue: 0,
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

const PlayerTemplate = (args: Props) => {
  return (
    <Box p={20}>
      <Slider {...args} />
    </Box>
  );
};

export const PlayerVariant: Story = {
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

export const Disabled: Story = {
  render: Template,

  args: {
    ...Default.args,
    disabled: true,
  },
};

const TemplateControlled = (args: Props) => {
  const start = 50;
  const [value, setValue] = useState(start);
  const handleChange = (v: string) => setValue(parseInt(v, 10));

  return (
    <IntlProvider locale="en">
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
    </IntlProvider>
  );
};

export const Controlled: Story = {
  render: TemplateControlled,

  args: {
    min: 0,
    max: 100,
    step: 1,
  },
};

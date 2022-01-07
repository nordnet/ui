import React from 'react';
import { Meta, Story } from '@storybook/react';

import docs from './LineScale.mdx';
import LineScale from '.';
import { Props } from './LineScale.types';

export default {
  title: 'Molecules / LineScale',
  component: LineScale,
  parameters: {
    docs: {
      page: docs,
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <LineScale {...args} />;

export const LineScaleAtLeftEdge = Template.bind({});
LineScaleAtLeftEdge.args = {
  value: 0,
  valueLabel: '0.00',
  averageValue: 0,
  averageValueLabel: 'Average for category 0.00',
  minLabel: '0',
  maxLabel: '100',
};

export const LineScaleAlmostAtLeftEdge = Template.bind({});
LineScaleAlmostAtLeftEdge.args = {
  value: 1,
  valueLabel: '1.00',
  averageValue: 1,
  averageValueLabel: 'Average for category 1.00',
  minLabel: '0',
  maxLabel: '100',
};

export const LineScaleNearLeftEdge = Template.bind({});
LineScaleNearLeftEdge.args = {
  value: 5,
  valueLabel: '5.00',
  averageValue: 5,
  averageValueLabel: 'Average for category 5.00',
  minLabel: 'Lowest value',
  maxLabel: 'Highest value',
};

export const LineScaleNearLeftEdgeWithBiggerLabel = Template.bind({});
LineScaleNearLeftEdgeWithBiggerLabel.args = {
  value: 5,
  valueLabel: '5.00',
  averageValue: 5,
  averageValueLabel: 'Average for category 5.00',
  minLabel: '0',
  maxLabel: '100',
};

export const LineScaleInTheMiddle = Template.bind({});
LineScaleInTheMiddle.args = {
  value: 50,
  valueLabel: '50',
  valueColor: '#FF0000',
  averageValue: 50,
  averageValueLabel: 'Average for category 50.00',
  minLabel: '0',
  maxLabel: '100',
};

export const LineScaleNearRightEdge = Template.bind({});
LineScaleNearRightEdge.args = {
  value: 95,
  valueLabel: '95.00',
  averageValue: 95,
  averageValueLabel: 'Average for category 95.00',
  minLabel: '0',
  maxLabel: '100',
};

export const LineScaleNearRightEdgeWithBiggerLabel = Template.bind({});
LineScaleNearRightEdgeWithBiggerLabel.args = {
  ...LineScaleNearRightEdge.args,
  valueLabel: 'Latest 95.00',
};

export const LineScaleAlmostAtRightEdge = Template.bind({});
LineScaleAlmostAtRightEdge.args = {
  value: 99,
  valueLabel: '99.00',
  averageValue: 99,
  averageValueLabel: 'Average for category 99.00',
  minLabel: 'Lowest value',
  maxLabel: 'Highest value',
};

export const LineScaleAtRightEdge = Template.bind({});
LineScaleAtRightEdge.args = {
  value: 100,
  valueLabel: '100.00',
  averageValue: 100,
  averageValueLabel: 'Average for category 100.00',
  minLabel: '0',
  maxLabel: '100',
};

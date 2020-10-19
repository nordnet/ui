import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import docs from './LineScale.mdx';
import LineScale from '.';

export default {
  title: 'Molecules / LineScale',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const getLineScaleProps = ({
  value = 50,
  valueLabel = '50',
  valueColor = '#FF0000',
  averageValue = 50,
  averageValueLabel = 'Average for category 50.00',
  minLabel = '0',
  maxLabel = '100',
} = {}) => ({
  value: number('Value', value),
  valueLabel: text('Value label', valueLabel),
  valueColor: text('Value color', valueColor),
  averageValue: number('Average value', averageValue),
  averageValueLabel: text('Average value label', averageValueLabel),
  minLabel: text('Min value label', minLabel),
  maxLabel: text('Max value label', maxLabel),
});

export const LineScaleAtLeftEdge = () => (
  <LineScale
    value={0}
    valueLabel="0.00"
    averageValue={0}
    averageValueLabel="Average for category 0.00"
    minLabel="0"
    maxLabel="100"
  />
);

export const LineScaleAlmostAtLeftEdge = () => (
  <LineScale
    value={1}
    valueLabel="1.00"
    averageValue={1}
    averageValueLabel="Average for category 1.00"
    minLabel="0"
    maxLabel="100"
  />
);

export const LineScaleNearLeftEdge = () => (
  <LineScale
    value={5}
    valueLabel="5.00"
    averageValue={5}
    averageValueLabel="Average for category 5.00"
    minLabel="Lowest value"
    maxLabel="Highest value"
  />
);

export const LineScaleNearLeftEdgeWithBiggerLabel = () => (
  <LineScale
    value={5}
    valueLabel="Latest 5.00"
    averageValue={5}
    averageValueLabel="Average for category 5.00"
    minLabel="0"
    maxLabel="100"
  />
);

export const LineScaleInTheMiddleWithKnobs = () => <LineScale {...getLineScaleProps()} />;

export const LineScaleNearRightEdgeWithBiggerLabel = () => (
  <LineScale
    value={95}
    valueLabel="Latest 95.00"
    averageValue={95}
    averageValueLabel="Average for category 95.00"
    minLabel="0"
    maxLabel="100"
  />
);

export const LineScaleNearRightEdge = () => (
  <LineScale
    value={95}
    valueLabel="95.00"
    averageValue={95}
    averageValueLabel="Average for category 95.00"
    minLabel="0"
    maxLabel="100"
  />
);

export const LineScaleAlmostAtRightEdge = () => (
  <LineScale
    value={99}
    valueLabel="99.00"
    averageValue={99}
    averageValueLabel="Average for category 99.00"
    minLabel="Lowest value"
    maxLabel="Highest value"
  />
);

export const LineScaleAtRightEdge = () => (
  <LineScale
    value={100}
    valueLabel="100.00"
    averageValue={100}
    averageValueLabel="Average for category 100.00"
    minLabel="0"
    maxLabel="100"
  />
);

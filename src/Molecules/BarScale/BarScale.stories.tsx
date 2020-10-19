import React from 'react';
import { boolean, text, number } from '@storybook/addon-knobs';
import { Flexbox } from '../..';
import docs from './BarScale.mdx';
import BarScale from '.';

export default {
  title: 'Molecules / BarScale',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const getBarScaleProps = ({
  value = 0,
  indicatorText = 'Hello world',
  showValue = false,
  max = 7,
} = {}) => ({
  value: number('Value', value),
  indicatorText: text('Indicator text', indicatorText),
  showValue: boolean('showValue', showValue),
  max: number('max', max),
});

export const BarScaleWithValueAndText = () => (
  <BarScale
    {...getBarScaleProps({
      value: 2,
      indicatorText: 'text',
    })}
  />
);

export const BarScaleWithLongText = () => (
  <BarScale
    {...getBarScaleProps({
      value: 1,
      indicatorText: 'Long Long Long Long text',
      showValue: true,
    })}
  />
);

export const BarScaleWithXAxis = () => (
  <BarScale
    {...getBarScaleProps({
      value: 6,
      indicatorText: 'some text',
    })}
    axisLabel={
      <Flexbox container justifyContent="space-between">
        <Flexbox item>Low</Flexbox>
        <Flexbox item>Medium</Flexbox>
        <Flexbox item>High</Flexbox>
      </Flexbox>
    }
  />
);

export const BarScaleWithoutShowValue = () => (
  <BarScale
    {...getBarScaleProps({
      value: 6,
      indicatorText: 'text',
      showValue: false,
    })}
  />
);

export const BarScaleWithMax = () => (
  <BarScale
    {...getBarScaleProps({
      value: 6,
      indicatorText: 'text',
      showValue: false,
      max: 7,
    })}
  />
);

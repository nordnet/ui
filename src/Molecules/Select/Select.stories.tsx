// Button.stories.ts|tsx
import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Display } from '../../common/Display';

import { Select, Option } from '.';

const options = [
  {
    label: 'Red',
    value: '#D32F2F',
  },
  {
    label: 'Green',
    value: '#4CAF50',
  },
  {
    label: 'Blue',
    value: '#2196F3',
  },
];

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Molecules/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Primary: ComponentStory<typeof Select> = () => (
  <Select>
    {options.map((option) => (
      <Option value={option.value}>{option.label}</Option>
    ))}
  </Select>
);

export const DifferentSizes: ComponentStory<typeof Select> = () => (
  <Display
    items={[
      {
        title: 'Default (medium) size',
        component: (
          <Select size="m">
            {options.map((option) => (
              <Option value={option.value}>{option.label}</Option>
            ))}
          </Select>
        ),
      },
      {
        title: 'Small size',
        component: (
          <Select size="s">
            {options.map((option) => (
              <Option value={option.value}>{option.label}</Option>
            ))}
          </Select>
        ),
      },
    ]}
  />
);

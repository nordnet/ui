// Button.stories.ts|tsx
import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select, Option } from '.';

const StyledDiv = styled.div`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
`;

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
  <StyledDiv>
    <Select>
      {options.map((option) => (
        <Option value={option.value}>{option.label}</Option>
      ))}
    </Select>
  </StyledDiv>
);

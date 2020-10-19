import React from 'react';
import { DropdownBubble, Typography } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms / DropdownBubble',
  parameters: {
    component: DropdownBubble,
  },
};

export const defaultStory = () => (
  <DropdownBubble>
    <Typography type="hero">Hello world!</Typography>
  </DropdownBubble>
);

export const differentTrianglePosition = () => (
  <Display
    items={[
      {
        component: (
          <DropdownBubble position="left">
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'left',
      },
      {
        component: (
          <DropdownBubble position="right">
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'right',
      },
      {
        component: (
          <DropdownBubble position="center">
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'center',
      },
    ]}
  />
);

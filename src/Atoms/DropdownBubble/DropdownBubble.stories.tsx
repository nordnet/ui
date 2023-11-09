import React from 'react';
import { DropdownBubble, Typography } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms / DropdownBubble',
  parameters: {
    component: DropdownBubble,
  },
};

export const DefaultStory = () => (
  <DropdownBubble>
    <Typography type="hero">Hello world!</Typography>
  </DropdownBubble>
);

export const DifferentPlacementAndTrianglePosition = () => (
  <Display
    items={[
      {
        component: (
          <DropdownBubble position="left" triangle>
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'Placement Bottom, Arrow Left',
      },
      {
        component: (
          <DropdownBubble position="right" triangle>
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'Placement Bottom, Arrow Right',
      },
      {
        component: (
          <DropdownBubble position="center" triangle>
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'Placement Bottom, Arrow Center',
      },
      {
        component: (
          <DropdownBubble position="left" placement="top" triangle>
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'Placement Top, Arrow Left',
      },
      {
        component: (
          <DropdownBubble position="right" placement="top" triangle>
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'Placement Top, Arrow Right',
      },
      {
        component: (
          <DropdownBubble position="center" placement="top" triangle>
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'Placement Top, Arrow Center',
      },
    ]}
  />
);

export const DifferentColors = () => (
  <Display
    items={[
      {
        component: (
          <DropdownBubble
            position="center"
            placement="top"
            backgroundColor={(c) => c.color.backgroundBlack}
            borderColor={(c) => c.color.functionRed}
            textColor={(c) => c.color.textLight}
          >
            Custom background, border and text colors
          </DropdownBubble>
        ),
        title: 'Custom background',
      },
      {
        component: (
          <DropdownBubble position="center" placement="top" invertedColors>
            Inverted colors
          </DropdownBubble>
        ),
        title: 'Inverted colors',
      },
    ]}
  />
);

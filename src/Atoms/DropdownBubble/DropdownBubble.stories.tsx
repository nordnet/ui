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

export const differentPlacementAndTrianglePosition = () => (
  <Display
    items={[
      {
        component: (
          <DropdownBubble position="left">
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'Placement Bottom, Arrow Left',
      },
      {
        component: (
          <DropdownBubble position="right">
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'Placement Bottom, Arrow Right',
      },
      {
        component: (
          <DropdownBubble position="center">
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'Placement Bottom, Arrow Center',
      },
      {
        component: (
          <DropdownBubble position="left" placement="top">
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'Placement Top, Arrow Left',
      },
      {
        component: (
          <DropdownBubble position="right" placement="top">
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'Placement Top, Arrow Right',
      },
      {
        component: (
          <DropdownBubble position="center" placement="top">
            <Typography type="hero">Hello world!</Typography>
          </DropdownBubble>
        ),
        title: 'Placement Top, Arrow Center',
      },
    ]}
  />
);

export const differentColors = () => (
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

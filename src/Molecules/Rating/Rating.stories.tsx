import React from 'react';
import { Meta, Story } from '@storybook/react';

import docs from './Rating.mdx';
import Rating from '.';
import { Props } from './Rating.types';

export default {
  title: 'Molecules / Rating',
  parameters: {
    docs: {
      page: docs,
    },
  },
  component: Rating,
} as Meta;

const Template: Story<Props> = (args) => <Rating {...args} />;

export const Rating0 = Template.bind({});
Rating0.args = {
  rating: 0,
};

export const Rating1 = Template.bind({});
Rating1.args = {
  rating: 1,
};

export const Rating5 = Template.bind({});
Rating5.args = {
  rating: 5,
};

export const RatingNotDefined = Template.bind({});
RatingNotDefined.args = {
  rating: undefined,
};

export const RatingWithSize = Template.bind({});
RatingWithSize.args = {
  rating: 3,
  size: 4,
};

import React from 'react';
import { Meta, Story } from '@storybook/react';

import docs from './Rating.mdx';
import Rating from '.';
import { Props } from './Rating.types';
import Flexbox from '../../Atoms/Flexbox';
import Typography from '../../Atoms/Typography';
import Icon from '../../Atoms/Icon';

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
  size: 3,
};

export const RatingWithStringSize = Template.bind({});
RatingWithStringSize.args = {
  rating: 3,
  size: 'xl',
};

export const RatingOutOf3 = Template.bind({});
RatingOutOf3.args = {
  rating: 2,
  outOf: 3,
};

export const DifferentColor = Template.bind({});
DifferentColor.args = {
  rating: 2,
  outOf: 3,
};

export const AllTypes = () => {
  return (
    <Flexbox
      container
      alignItems="center"
      justifyContent="center"
      width="100%"
      gap={4}
      height="100vh"
    >
      <Rating
        rating={2}
        outOf={3}
        activeIcon={<Icon.Account16 color={(t) => t.color.starRatingBlue} />}
        inactiveIcon={<Icon.AddCircleFill16 color={(t) => t.color.starRatingBlueOff} />}
      />
      <Rating rating={0} />
      <Rating rating={17} outOf={18} />
    </Flexbox>
  );
};

export const RatingOutOf3WithLabel = () => (
  <Flexbox
    container
    alignItems="center"
    justifyContent="center"
    width="100%"
    gutter={4}
    height="100vh"
  >
    <Flexbox container direction="column" alignItems="center" justifyContent="center">
      <Typography type="secondary" weight="bold">
        12345
      </Typography>
      <Typography type="tertiary">label</Typography>
    </Flexbox>
    <Flexbox container direction="column" alignItems="center" justifyContent="center">
      <Rating outOf={3} rating={2} height="20px" />
      <Typography type="tertiary">this rating has a custom height</Typography>
    </Flexbox>
  </Flexbox>
);

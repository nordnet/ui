import React from 'react';
import { Avatar } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Molecules / Avatar',
};

export const basicUsage = () => <Avatar>ASK</Avatar>;

basicUsage.story = {
  name: 'Basic usage',
  parameters: {
    component: Avatar,
  },
};

export const differentSizes = () => (
  <Display
    items={[
      { title: 'Size `s`', component: <Avatar size="s">ASK</Avatar> },
      { title: 'Size `m` (default)', component: <Avatar size="m">ASK</Avatar> },
    ]}
  />
);

differentSizes.story = {
  name: 'Different sizes',
};

export const bestPracticeWithElementAsChildren = () => (
  <Avatar>
    <abbr title="Investeringssparkonto">ISK</abbr>
  </Avatar>
);

bestPracticeWithElementAsChildren.story = {
  name: 'Best practice, with element as children',
};

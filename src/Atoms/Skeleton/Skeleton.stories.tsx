import React from 'react';
import { Skeleton } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms | Skeleton',
  parameters: {
    component: Skeleton,
  },
};

export const defaultStory = () => <Skeleton variant="text" width="300px" />;

defaultStory.story = {
  name: 'Default',
};

export const variants = () => (
  <Display
    title="Skeleton variants"
    items={[
      {
        title: 'Text',
        component: <Skeleton variant="text" width="200px" />,
      },
      {
        title: 'Rect',
        component: <Skeleton variant="rect" width="100px" height={25} />,
      },
      {
        title: 'Circle',
        component: <Skeleton variant="circle" width={16} height={16} />,
      },
    ]}
  />
);

variants.story = {
  name: 'Different variants',
};

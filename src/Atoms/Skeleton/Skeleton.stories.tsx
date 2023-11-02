import React from 'react';
import { Skeleton } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Atoms / Skeleton',
  parameters: {
    component: Skeleton,
  },
};

export const defaultStory = {
  render: () => <Skeleton variant="text" width="300px" />,
  name: 'Default',
};

export const variants = {
  render: () => (
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
  ),

  name: 'Different variants',
};

export const delay = {
  render: () => (
    <Display
      title="Skeleton with delay"
      items={[
        {
          title: 'Without delay',
          component: <Skeleton variant="rect" width="100px" height={25} />,
        },
        {
          title: 'With default delay',
          component: <Skeleton variant="rect" width="100px" height={25} delay />,
        },
        {
          title: 'With custom delay',
          component: <Skeleton variant="rect" width="100px" height={25} delay={3000} />,
        },
      ]}
    />
  ),

  name: 'Skeleton with delay',
};

import React from 'react';
import Badge from '../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Badge / Label',
  parameters: {
    component: Badge.Label,
  },
};

export const Showcase = () => {
  return (
    <Display
      items={[
        {
          title: 'Primary',
          component: <Badge.Label>Primary</Badge.Label>,
        },
        {
          title: 'Primary Bold',
          component: <Badge.Label weight="bold">Primary Bold</Badge.Label>,
        },
        {
          title: 'Secondary',
          component: <Badge.Label type="secondary">Secondary</Badge.Label>,
        },
        {
          title: 'Secondary Bold',
          component: (
            <Badge.Label type="secondary" weight="bold">
              Secondary Bold
            </Badge.Label>
          ),
        },
        {
          title: 'Custom badge color',
          component: (
            <Badge.Label badgeColor={(t) => t.color.badgeBackgroundNegative}>
              Custom badge color
            </Badge.Label>
          ),
        },
        {
          title: 'Custom text color',
          component: <Badge.Label color={(t) => t.color.warning}>Custom text color</Badge.Label>,
        },
        {
          title: 'Primary Single Character',
          component: (
            <Badge.Label badgeColor={(t) => t.color.sfdrArticle8} type="primary" weight="bold">
              8
            </Badge.Label>
          ),
        },
        {
          title: 'Secondary Single Character',
          component: (
            <Badge.Label badgeColor={(t) => t.color.sfdrArticle9} type="secondary" weight="bold">
              9
            </Badge.Label>
          ),
        },
      ]}
    />
  );
};
Showcase.story = {
  name: 'Showcase',
};
Showcase.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/TeWDXS0Uoxqg9I7WN8UQq2/Molecules---Web?type=design&node-id=9663-42553&t=qE01LCJKWSkGeiiO-4',
  },
};

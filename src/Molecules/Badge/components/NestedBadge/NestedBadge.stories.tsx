import React from 'react';

import Badge from '../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Badge / Nested',
  parameters: {
    component: Badge.Nested,
  },
};

export const Showcase = {
  render: () => {
    return (
      <Display
        items={[
          {
            title: 'Large (default) logo with flag (28x32 px)',
            component: <Badge.Nested fallback="Nordnet" logoUrl="/logo/nordnet.png" country="SE" />,
          },
          {
            title: 'Medium logo with flag (26x28 px)',
            component: (
              <Badge.Nested
                badgeSize="m"
                fallback="Nordnet"
                logoUrl="/logo/nordnet.png"
                country="SE"
              />
            ),
          },
          {
            title: 'Large (default) logo',
            component: <Badge.Nested fallback="Nordnet" logoUrl="/logo/nordnet.png" />,
          },
          {
            title: 'Medium logo',
            component: (
              <Badge.Nested badgeSize="m" fallback="Nordnet" logoUrl="/logo/nordnet.png" />
            ),
          },
          {
            title: 'Large fallback with flag',
            component: <Badge.Nested fallback="Nordnet" country="SE" />,
          },
          {
            title: 'Medium fallback with flag',
            component: <Badge.Nested badgeSize="m" fallback="Nordnet" country="SE" />,
          },
          {
            title: 'Large fallback',
            component: <Badge.Nested fallback="Nordnet" />,
          },
          {
            title: 'Medium fallback',
            component: <Badge.Nested badgeSize="m" fallback="Nordnet" />,
          },
          {
            title: 'Large without fallback',
            component: <Badge.Nested />,
          },
          {
            title: 'Medium without fallback',
            component: <Badge.Nested badgeSize="m" />,
          },
        ]}
      />
    );
  },
};

import React from 'react';
import styled from 'styled-components';

import Badge from '../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Badge / Nested',
  parameters: {
    component: Badge.Nested,
  },
};

const StyledHoverShowcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colorTokens.neutral.background_hover};
  }
`;

const HoverLogoShowcase = () => {
  return (
    <StyledHoverShowcase>
      <Badge.Nested badgeSize="xl" logoUrl="/logo/nordnet.png" country="SE" />
    </StyledHoverShowcase>
  );
};

const HoverFallbackShowcase = () => {
  return (
    <StyledHoverShowcase>
      <Badge.Nested badgeSize="xl" fallback="Nordnet" country="SE" />
    </StyledHoverShowcase>
  );
};

export const Showcase = {
  render: () => {
    return (
      <Display
        items={[
          {
            title: 'Extra large logo with flag (36x40 px)',
            component: (
              <Badge.Nested
                badgeSize="xl"
                fallback="Nordnet"
                logoUrl="/logo/nordnet.png"
                country="SE"
              />
            ),
          },
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
            title: 'Extra large logo',
            component: (
              <Badge.Nested badgeSize="xl" fallback="Nordnet" logoUrl="/logo/nordnet.png" />
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
            title: 'Extra large fallback with flag',
            component: <Badge.Nested badgeSize="xl" fallback="Nordnet" country="SE" />,
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
            title: 'Extra large fallback',
            component: <Badge.Nested badgeSize="xl" fallback="Nordnet" />,
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
            title: 'Extra large without fallback',
            component: <Badge.Nested badgeSize="xl" />,
          },
          {
            title: 'Large without fallback',
            component: <Badge.Nested />,
          },
          {
            title: 'Medium without fallback',
            component: <Badge.Nested badgeSize="m" />,
          },
          {
            title: 'Hover logo showcase',
            component: <HoverLogoShowcase />,
          },
          {
            title: 'Hover fallback showcase',
            component: <HoverFallbackShowcase />,
          },
        ]}
      />
    );
  },
};

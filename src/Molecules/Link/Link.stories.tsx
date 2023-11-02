import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Route, Routes, useLocation } from 'react-router';
import { Link, Typography } from '../..';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';
import { Display } from '../../common/Display';

export default {
  title: 'Molecules / Link',
  parameters: {
    component: Link,
  },
};

const ExampleBlackBackground = styled.div`
  background: ${(p) => p.theme.color.backgroundDark};
`;

const View = () => {
  const location = useLocation();
  return (
    <pre>
      <code>{JSON.stringify(location, null, 2)}</code>
    </pre>
  );
};

export const defaultUsage = {
  render: () => (
    <Provider>
      <Typography type="secondary" weight="bold">
        <Link to="/route1" onClick={action('clicked')}>
          Link1
        </Link>
      </Typography>
      <Typography type="secondary" weight="bold">
        <Link to="/route2" onClick={action('clicked')}>
          Link2
        </Link>
      </Typography>
      <Routes>
        <Route path="/:id" element={<View />} />
      </Routes>
    </Provider>
  ),

  name: 'Default usage',
};

export const withTypographyPrimaryAsType = {
  render: () => (
    <Provider>
      <Typography type="primary" weight="bold">
        <Link to="/route1" onClick={action('clicked')}>
          Link1
        </Link>
      </Typography>
      <Typography type="primary" weight="bold">
        <Link to="/route2" onClick={action('clicked')}>
          Link2
        </Link>
      </Typography>
      <Routes>
        <Route path="/:id" element={<View />} />
      </Routes>
    </Provider>
  ),

  name: 'With typography primary as type',
};

export const externalLinkWithItsDefaultValues = {
  render: () => (
    <Provider>
      <Typography type="secondary" weight="bold">
        <Link to="https://example.com" onClick={action('clicked')} external>
          Example external link
        </Link>
      </Typography>
    </Provider>
  ),

  name: 'External link with its default values',
};

export const fullServerRedirectLinkWithItsDefaultValues = {
  render: () => (
    <Provider>
      <Typography type="secondary" weight="bold">
        <Link to="https://example.com" onClick={action('clicked')} fullServerRedirect>
          Example full server redirect link
        </Link>
      </Typography>
    </Provider>
  ),

  name: 'Full server redirect link with its default values',
};

export const externalLinkWithRelAndTargetOverriden = {
  render: () => (
    <Provider>
      <Typography type="secondary" weight="bold">
        <Link
          to="https://example.com"
          onClick={action('clicked')}
          rel="nofollow"
          target="_self"
          external
        >
          Example external link
        </Link>
      </Typography>
    </Provider>
  ),

  name: 'External link with rel and target overriden',
};

export const withDisabledPropResultsInADisabledButtonLookingLikeALink = {
  render: () => (
    <Provider>
      <Typography type="secondary" weight="bold">
        <Link onClick={action('clicked')} disabled>
          Link
        </Link>
      </Typography>
    </Provider>
  ),

  name: 'With disabled prop results in a disabled button looking like a link',
};

export const withoutToPropResultsInAButtonLookingLikeALink = {
  render: () => (
    <Provider>
      <Typography type="secondary" weight="bold">
        <Link onClick={action('clicked')}>Link</Link>
      </Typography>
    </Provider>
  ),

  name: 'Without to prop results in a button looking like a link',
};

export const withColor = {
  render: () => (
    <Provider>
      <Display
        items={[
          {
            title: 'Black',
            component: (
              <Typography type="primary">
                <Link color="black" to="https://example.com" external onClick={action('clicked')}>
                  Link
                </Link>
              </Typography>
            ),
          },
          {
            title: 'Blue',
            component: (
              <Typography type="primary">
                <Link color="blue" to="https://example.com" external onClick={action('clicked')}>
                  Link
                </Link>
              </Typography>
            ),
          },
          {
            title: 'Inherit',
            component: (
              <ExampleBlackBackground>
                <Typography type="primary" color={(t) => t.color.textLight}>
                  <Link
                    color="inherit"
                    to="https://example.com"
                    external
                    onClick={action('clicked')}
                  >
                    Link
                  </Link>
                </Typography>
              </ExampleBlackBackground>
            ),
          },
        ]}
      />
    </Provider>
  ),

  name: 'With color prop',
};

export const withDisplay = {
  render: () => (
    <Provider>
      <Display
        items={[
          {
            title: 'Link',
            component: (
              <Typography type="primary">
                <Link display="block" to="https://example.com" external onClick={action('clicked')}>
                  Link
                </Link>
              </Typography>
            ),
          },
          {
            title: 'Button',
            component: (
              <Typography type="primary">
                <Link display="block" onClick={action('clicked')}>
                  Link
                </Link>
              </Typography>
            ),
          },
        ]}
      />
    </Provider>
  ),

  name: 'With display prop',
};

export const withUnderline = {
  render: () => (
    <Provider>
      <Display
        items={[
          {
            title: 'Link',
            component: (
              <Typography type="primary">
                <Link to="https://example.com" external underlined onClick={action('clicked')}>
                  Link
                </Link>
              </Typography>
            ),
          },
          {
            title: 'Button',
            component: (
              <Typography type="primary">
                <Link onClick={action('clicked')} underlined>
                  Link
                </Link>
              </Typography>
            ),
          },
        ]}
      />
    </Provider>
  ),

  name: 'With underline',
};

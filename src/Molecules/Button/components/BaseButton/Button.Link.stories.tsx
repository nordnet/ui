import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from '../../../../common/Links/ReactRouterLinkHelper';

import { Button, Flexbox, Icon } from '../../../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Button / Button',
  parameters: {
    component: Button,
  },
};

export const LinkLookingLikeAButton = {
  render: () => (
    <Provider>
      <Display
        items={[
          {
            title: 'Reset',
            component: <Button to="/route1">To Route1</Button>,
          },
          {
            title: 'Submit',
            component: (
              <Button to="/route2" variant="secondary">
                To Route2
              </Button>
            ),
          },
        ]}
      />
    </Provider>
  ),

  name: 'Link looking like a button',
};

export const LinkLookingLikeAButtonThatIsFullWidth = {
  render: () => (
    <Provider>
      <Button to="/overview" onClick={action('clicked')} fullWidth>
        Button
      </Button>
    </Provider>
  ),

  name: 'Link looking like a button that is full width',
};

export const LinksLookingLikeButtonsComposedInAGroup = {
  render: () => (
    <Provider>
      <Flexbox container gap={2}>
        <Flexbox item flex="1">
          <Button to="/route1" onClick={action('submit')} fullWidth>
            Submit
          </Button>
        </Flexbox>
        <Flexbox item flex="1">
          <Button to="/route2" onClick={action('reset')} variant="secondary" fullWidth>
            Reset
          </Button>
        </Flexbox>
      </Flexbox>
    </Provider>
  ),

  name: 'Links looking like buttons composed in a group',
};

export const LinkLookingLikeAButtonWithRelAsNofollow = {
  render: () => (
    <Provider>
      <Button to="/overview" rel="nofollow" onClick={action('clicked')} fullWidth>
        Button
      </Button>
    </Provider>
  ),

  name: 'Link looking like a button with rel as nofollow',
};

export const ExternalLinkLookingLikeAButton = {
  render: () => (
    <Provider>
      <Button to="//www.google.com" external rel="nofollow" onClick={action('clicked')} fullWidth>
        Button
      </Button>
    </Provider>
  ),

  name: 'External link looking like a button',
};

export const DisabledLinkLookingLikeAButton = {
  render: () => (
    <Provider>
      <Button
        fullWidth
        onClick={action('clicked')}
        size="m"
        to="/overview"
        variant="secondary"
        disabled
      >
        Button
      </Button>
    </Provider>
  ),

  name: 'Disabled link looking like a button',
};

export const LinkLookingLikeAButtonWithWithColors = {
  render: () => (
    <Provider>
      <>
        <Display
          title="Primary"
          items={[
            {
              title: 't => t.color.cta',
              component: (
                <Button to="/overview" color={(t) => t.color.cta} onClick={action('clicked')}>
                  Button
                </Button>
              ),
            },
            {
              title: 't => t.color.negative',
              component: (
                <Button to="/overview" color={(t) => t.color.negative} onClick={action('clicked')}>
                  Button
                </Button>
              ),
            },
          ]}
        />
        <Display
          title="Secondary"
          items={[
            {
              title: 't => t.color.cta',
              component: (
                <Button
                  variant="secondary"
                  to="/overview"
                  color={(t) => t.color.cta}
                  onClick={action('clicked')}
                >
                  Button
                </Button>
              ),
            },
            {
              title: 't => t.color.negative',
              component: (
                <Button
                  variant="secondary"
                  to="/overview"
                  color={(t) => t.color.negative}
                  onClick={action('clicked')}
                >
                  Button
                </Button>
              ),
            },
          ]}
        />
      </>
    </Provider>
  ),

  name: 'Link looking like a button with with colors',
};

export const NeutralButtonLookingLikeLinkUnderlineOnHover = {
  render: () => (
    <Provider>
      <Display
        items={[
          {
            title: 'Reset',
            component: (
              <Button variant="neutral" to="/route1">
                To Route1
              </Button>
            ),
          },
          {
            title: 'Reset icon right',
            component: (
              <Button
                icon={<Icon.ArrowDown16 />}
                iconPlacement="right"
                variant="neutral"
                to="/route1"
              >
                To Route1
              </Button>
            ),
          },
        ]}
      />
    </Provider>
  ),

  name: 'Neutral button looking like link',
};

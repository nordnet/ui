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

export const linkLookingLikeAButton = () => (
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
);

linkLookingLikeAButton.story = {
  name: 'Link looking like a button',
};

export const linkLookingLikeAButtonThatIsFullWidth = () => (
  <Provider>
    <Button to="/overview" onClick={action('clicked')} fullWidth>
      Button
    </Button>
  </Provider>
);

linkLookingLikeAButtonThatIsFullWidth.story = {
  name: 'Link looking like a button that is full width',
};

export const linksLookingLikeButtonsComposedInAGroup = () => (
  <Provider>
    <Flexbox container gutter={2}>
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
);

linksLookingLikeButtonsComposedInAGroup.story = {
  name: 'Links looking like buttons composed in a group',
};

export const linkLookingLikeAButtonWithRelAsNofollow = () => (
  <Provider>
    <Button to="/overview" rel="nofollow" onClick={action('clicked')} fullWidth>
      Button
    </Button>
  </Provider>
);

linkLookingLikeAButtonWithRelAsNofollow.story = {
  name: 'Link looking like a button with rel as nofollow',
};

export const externalLinkLookingLikeAButton = () => (
  <Provider>
    <Button to="//www.google.com" external rel="nofollow" onClick={action('clicked')} fullWidth>
      Button
    </Button>
  </Provider>
);

externalLinkLookingLikeAButton.story = {
  name: 'External link looking like a button',
};

export const disabledLinkLookingLikeAButton = () => (
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
);

disabledLinkLookingLikeAButton.story = {
  name: 'Disabled link looking like a button',
};

export const linkLookingLikeAButtonWithWithColors = () => (
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
);

linkLookingLikeAButtonWithWithColors.story = {
  name: 'Link looking like a button with with colors',
};

export const neutralButtonLookingLikeLinkUnderlineOnHover = () => (
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
          title: 'Reset',
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
);

neutralButtonLookingLikeLinkUnderlineOnHover.story = {
  name: 'Neutral button looking like link',
};

import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { HashRouter } from 'react-router-dom';
import MD from 'react-markdown';
import docs from './Button.md';

import { Button, Flexbox, Typography } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Molecules | Button',
  parameters: {
    component: Button,
  },
};

export const documentation = () => (
  <Typography type="primary">
    <MD source={docs} />
  </Typography>
);

export const defaultUsage = () => <Button onClick={action('clicked')}>Button</Button>;

defaultUsage.story = {
  name: 'Default usage',
};

export const buttonWithDifferentVariants = () => (
  <Display
    horizontal
    items={[
      {
        title: 'primary',
        component: (
          <Button onClick={action('clicked')} variant="primary">
            Button
          </Button>
        ),
      },
      {
        title: 'secondary',
        component: (
          <Button onClick={action('clicked')} variant="secondary">
            Button
          </Button>
        ),
      },
      {
        title: 'neutral',
        component: (
          <Button onClick={action('clicked')} variant="neutral">
            Button
          </Button>
        ),
      },
    ]}
  />
);

buttonWithDifferentVariants.story = {
  name: 'Button with different variants',
};

export const disabledButtonWithDifferentVariants = () => (
  <Display
    horizontal
    items={[
      {
        title: 'primary',
        component: (
          <Button onClick={action('clicked')} variant="primary" disabled>
            Button
          </Button>
        ),
      },
      {
        title: 'secondary',
        component: (
          <Button onClick={action('clicked')} variant="secondary" disabled>
            Button
          </Button>
        ),
      },
      {
        title: 'neutral',
        component: (
          <Button onClick={action('clicked')} variant="neutral" disabled>
            Button
          </Button>
        ),
      },
    ]}
  />
);

disabledButtonWithDifferentVariants.story = {
  name: 'Disabled Button with different variants',
};

export const buttonPrimaryWithColors = () => (
  <Display
    horizontal
    items={[
      {
        title: 't => t.color.cta',
        component: (
          <Button variant="primary" color={t => t.color.cta} onClick={action('clicked')}>
            Button
          </Button>
        ),
      },
      {
        title: 't => t.color.negative',
        component: (
          <Button variant="primary" color={t => t.color.negative} onClick={action('clicked')}>
            Button
          </Button>
        ),
      },
    ]}
  />
);

buttonPrimaryWithColors.story = {
  name: 'Button primary with colors',
};

export const buttonSecondaryWithColors = () => (
  <Display
    horizontal
    items={[
      {
        title: 't => t.color.cta',
        component: (
          <Button variant="secondary" color={t => t.color.cta} onClick={action('clicked')}>
            Button
          </Button>
        ),
      },
      {
        title: 't => t.color.negative',
        component: (
          <Button variant="secondary" color={t => t.color.negative} onClick={action('clicked')}>
            Button
          </Button>
        ),
      },
    ]}
  />
);

buttonSecondaryWithColors.story = {
  name: 'Button secondary with colors',
};

export const buttonWithSizeModified = () => (
  <>
    <Display
      title="Primary"
      horizontal
      items={[
        {
          title: 'Medium',
          component: (
            <Button size="m" onClick={action('clickMedium')}>
              Medium
            </Button>
          ),
        },
        {
          title: 'Large',
          component: (
            <Button size="l" onClick={action('clickLarge')}>
              Large
            </Button>
          ),
        },
      ]}
    />
    <Display
      title="Secondary"
      horizontal
      items={[
        {
          title: 'Medium',
          component: (
            <Button size="m" variant="secondary" onClick={action('clickMedium')}>
              Medium
            </Button>
          ),
        },
        {
          title: 'Large',
          component: (
            <Button size="l" variant="secondary" onClick={action('clickLarge')}>
              Large
            </Button>
          ),
        },
      ]}
    />
  </>
);

buttonWithSizeModified.story = {
  name: 'Button with size modified',
};

export const buttonWithLoadingState = () => {
  const LoadingExample = () => {
    const [loading, setLoading] = useState(true);
    const toggleLoading = () => setLoading(!loading);

    return (
      <>
        <Display
          title="Primary"
          horizontal
          items={[
            {
              title: 'Medium',
              component: (
                <Button size="m" loading={loading}>
                  Medium
                </Button>
              ),
            },
            {
              title: 'Large',
              component: (
                <Button size="l" loading={loading}>
                  Large
                </Button>
              ),
            },
          ]}
        />
        <Display
          title="Primary with custom color"
          horizontal
          items={[
            {
              title: 'Medium',
              component: (
                <Button size="m" color={t => t.color.negative} loading={loading}>
                  Medium
                </Button>
              ),
            },
            {
              title: 'Large',
              component: (
                <Button size="l" color={t => t.color.negative} loading={loading}>
                  Large
                </Button>
              ),
            },
          ]}
        />
        <Display
          title="Secondary"
          horizontal
          items={[
            {
              title: 'Medium',
              component: (
                <Button size="m" variant="secondary" loading={loading}>
                  Medium
                </Button>
              ),
            },
            {
              title: 'Large',
              component: (
                <Button size="l" variant="secondary" loading={loading}>
                  Large
                </Button>
              ),
            },
          ]}
        />
        <Display
          title="Secondary with custom color"
          horizontal
          items={[
            {
              title: 'Medium',
              component: (
                <Button
                  size="m"
                  variant="secondary"
                  color={t => t.color.negative}
                  loading={loading}
                >
                  Medium
                </Button>
              ),
            },
            {
              title: 'Large',
              component: (
                <Button
                  size="l"
                  variant="secondary"
                  color={t => t.color.negative}
                  loading={loading}
                >
                  Large
                </Button>
              ),
            },
          ]}
        />
        <button type="button" onClick={toggleLoading}>
          toggle loading
        </button>
      </>
    );
  };
  return <LoadingExample />;
};

buttonWithLoadingState.story = {
  name: 'Button with loading state',
};

export const buttonWithTypeModified = () => (
  <Display
    items={[
      {
        title: 'Reset',
        component: (
          <Button type="reset" onClick={action('reset')}>
            Reset
          </Button>
        ),
      },
      {
        title: 'Submit',
        component: (
          <Button type="submit" onClick={action('submit')}>
            Submit
          </Button>
        ),
      },
    ]}
  />
);

buttonWithTypeModified.story = {
  name: 'Button with type modified',
};

export const buttonThatIsFullWidth = () => (
  <Button onClick={action('clicked')} fullWidth>
    Button
  </Button>
);

buttonThatIsFullWidth.story = {
  name: 'Button that is full width',
};

export const buttonsComposedInAGroup = () => (
  <Flexbox container gutter={2}>
    <Flexbox item flex="1 1 50%">
      <Button type="submit" onClick={action('submit')} fullWidth>
        Submit
      </Button>
    </Flexbox>
    <Flexbox item flex="1 1 50%">
      <Button type="reset" onClick={action('reset')} variant="secondary" fullWidth>
        Reset
      </Button>
    </Flexbox>
  </Flexbox>
);

buttonsComposedInAGroup.story = {
  name: 'Buttons composed in a group',
};

export const linkLookingLikeAButton = () => (
  <Display
    items={[
      {
        title: 'Reset',
        component: (
          <HashRouter>
            <Button to="route1">To Route1</Button>
          </HashRouter>
        ),
      },
      {
        title: 'Submit',
        component: (
          <HashRouter>
            <Button to="route2" variant="secondary">
              To Route2
            </Button>
          </HashRouter>
        ),
      },
    ]}
  />
);

linkLookingLikeAButton.story = {
  name: 'Link looking like a button',
};

export const linkLookingLikeAButtonThatIsFullWidth = () => (
  <HashRouter>
    <Button to="/overview" onClick={action('clicked')} fullWidth>
      Button
    </Button>
  </HashRouter>
);

linkLookingLikeAButtonThatIsFullWidth.story = {
  name: 'Link looking like a button that is full width',
};

export const linksLookingLikeButtonsComposedInAGroup = () => (
  <HashRouter>
    <Flexbox container gutter={2}>
      <Flexbox item flex="1">
        <Button to="route1" onClick={action('submit')} fullWidth>
          Submit
        </Button>
      </Flexbox>
      <Flexbox item flex="1">
        <Button to="route2" onClick={action('reset')} variant="secondary" fullWidth>
          Reset
        </Button>
      </Flexbox>
    </Flexbox>
  </HashRouter>
);

linksLookingLikeButtonsComposedInAGroup.story = {
  name: 'Links looking like buttons composed in a group',
};

export const linkLookingLikeAButtonWithRelAsNofollow = () => (
  <HashRouter>
    <Button to="/overview" rel="nofollow" onClick={action('clicked')} fullWidth>
      Button
    </Button>
  </HashRouter>
);

linkLookingLikeAButtonWithRelAsNofollow.story = {
  name: 'Link looking like a button with rel as nofollow',
};

export const externalLinkLookingLikeAButton = () => (
  <HashRouter>
    <Button to="//www.google.com" external rel="nofollow" onClick={action('clicked')} fullWidth>
      Button
    </Button>
  </HashRouter>
);

externalLinkLookingLikeAButton.story = {
  name: 'External link looking like a button',
};

export const disabledLinkLookingLikeAButton = () => (
  <HashRouter>
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
  </HashRouter>
);

disabledLinkLookingLikeAButton.story = {
  name: 'Disabled link looking like a button',
};

export const linkLookingLikeAButtonWithWithColors = () => (
  <HashRouter>
    <>
      <Display
        title="Primary"
        items={[
          {
            title: 't => t.color.cta',
            component: (
              <Button to="/overview" color={t => t.color.cta} onClick={action('clicked')}>
                Button
              </Button>
            ),
          },
          {
            title: 't => t.color.negative',
            component: (
              <Button to="/overview" color={t => t.color.negative} onClick={action('clicked')}>
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
                color={t => t.color.cta}
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
                color={t => t.color.negative}
                onClick={action('clicked')}
              >
                Button
              </Button>
            ),
          },
        ]}
      />
    </>
  </HashRouter>
);

linkLookingLikeAButtonWithWithColors.story = {
  name: 'Link looking like a button with with colors',
};

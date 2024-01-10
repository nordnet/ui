import React, { useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';
import MD from 'react-markdown';
import docs from './Button.md';

import { Button, Flexbox, Typography } from '../../../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Button / Button',
  parameters: {
    component: Button,
  },
};

export const Documentation = () => (
  <Typography type="primary">
    <MD>{docs}</MD>
  </Typography>
);

export const DefaultUsage = {
  render: () => <Button onClick={action('clicked')}>Button</Button>,
  name: 'Default usage',
};

export const ButtonWithDifferentVariants = {
  render: () => (
    <>
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
          {
            title: 'negative',
            component: (
              <Button onClick={action('clicked')} variant="negative">
                Button
              </Button>
            ),
          },
        ]}
      />
      <Display
        horizontal
        items={[
          {
            title: 'primary - disabled',
            component: (
              <Button disabled onClick={action('clicked')} variant="primary">
                Button
              </Button>
            ),
          },
          {
            title: 'secondary - disabled',
            component: (
              <Button disabled onClick={action('clicked')} variant="secondary">
                Button
              </Button>
            ),
          },
          {
            title: 'neutral - disabled',
            component: (
              <Button disabled onClick={action('clicked')} variant="neutral">
                Button
              </Button>
            ),
          },
        ]}
      />
    </>
  ),

  name: 'Button with different variants',
};

export const DisabledButtonWithDifferentVariants = {
  render: () => (
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
        {
          title: 'negative',
          component: (
            <Button onClick={action('clicked')} variant="negative" disabled>
              Button
            </Button>
          ),
        },
      ]}
    />
  ),

  name: 'Disabled Button with different variants',
};

export const ButtonPrimaryWithColors = {
  render: () => (
    <Display
      horizontal
      items={[
        {
          title: 't => t.color.cta',
          component: (
            <Button variant="primary" color={(t) => t.color.cta} onClick={action('clicked')}>
              Button
            </Button>
          ),
        },
        {
          title: 't => t.color.negative',
          component: (
            <Button variant="primary" color={(t) => t.color.negative} onClick={action('clicked')}>
              Button
            </Button>
          ),
        },
        {
          title: 't => t.color.error',
          component: (
            <Button variant="primary" color={(t) => t.color.error} onClick={action('clicked')}>
              Button
            </Button>
          ),
        },
      ]}
    />
  ),

  name: 'Button primary with colors',
};

export const ButtonSecondaryWithColors = {
  render: () => (
    <Display
      horizontal
      items={[
        {
          title: 't => t.color.cta',
          component: (
            <Button variant="secondary" color={(t) => t.color.cta} onClick={action('clicked')}>
              Button
            </Button>
          ),
        },
        {
          title: 't => t.color.negative',
          component: (
            <Button variant="secondary" color={(t) => t.color.negative} onClick={action('clicked')}>
              Button
            </Button>
          ),
        },
      ]}
    />
  ),

  name: 'Button secondary with colors',
};

export const ButtonWithSizeModified = {
  render: () => (
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
  ),

  name: 'Button with size modified',
};

export const ButtonWithFocusOn = {
  render: () => {
    const FocusExample = () => {
      const ref = useRef<HTMLButtonElement>(null);
      const handleFocus = () => {
        if (ref.current !== null) {
          ref.current.focus();
        }
      };
      return (
        <Flexbox container gap={5}>
          <Flexbox item>
            <Button onClick={handleFocus}>Click to focus</Button>
          </Flexbox>
          <Flexbox item>
            <Button color={(t) => t.color.negative} ref={ref}>
              Focus me
            </Button>
          </Flexbox>
        </Flexbox>
      );
    };
    return <FocusExample />;
  },

  name: 'Button which sets focus on another button',
};

export const ButtonWithLoadingState = {
  render: () => {
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
                  <Button size="m" color={(t) => t.color.negative} loading={loading}>
                    Medium
                  </Button>
                ),
              },
              {
                title: 'Large',
                component: (
                  <Button size="l" color={(t) => t.color.negative} loading={loading}>
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
                    color={(t) => t.color.negative}
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
                    color={(t) => t.color.negative}
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
  },

  name: 'Button with loading state',
};

export const ButtonWithLoadingStateWithCustomSpinnerAnimationDelay = {
  render: () => (
    <Button onClick={action('clicked')} loading delayLoadingSpinnerAnimation={400}>
      Button
    </Button>
  ),

  name: 'Button with loading state with custom spinner animation delay',
};

export const ButtonWithLoadingStateWithoutTheSpinnerAnimationDelay = {
  render: () => (
    <Button onClick={action('clicked')} loading delayLoadingSpinnerAnimation={false}>
      Button
    </Button>
  ),

  name: 'Button with loading state without the spinner animation delay',
};

export const ButtonWithTypeModified = {
  render: () => (
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
  ),

  name: 'Button with type modified',
};

export const ButtonThatIsFullWidth = {
  render: () => (
    <Button onClick={action('clicked')} fullWidth>
      Button
    </Button>
  ),

  name: 'Button that is full width',
};

export const ButtonsComposedInAGroup = {
  render: () => (
    <Flexbox container gap={2}>
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
  ),

  name: 'Buttons composed in a group',
};

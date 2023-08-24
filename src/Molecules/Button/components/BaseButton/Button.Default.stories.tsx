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

export const documentation = () => (
  <Typography type="primary">
    <MD>{docs}</MD>
  </Typography>
);

export const defaultUsage = () => <Button onClick={action('clicked')}>Button</Button>;

defaultUsage.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/TeWDXS0Uoxqg9I7WN8UQq2/Molecules---Web?node-id=24-1267&t=PqHHNLbAmdCspNhn-4',
  },
};

export const buttonWithDifferentVariants = () => (
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
);

buttonWithDifferentVariants.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/TeWDXS0Uoxqg9I7WN8UQq2/Molecules---Web?type=design&node-id=9711-35207&t=xQAWIiiagQTtD1uM-4',
  },
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
);

disabledButtonWithDifferentVariants.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/TeWDXS0Uoxqg9I7WN8UQq2/Molecules---Web?type=design&node-id=9711-35207&t=xQAWIiiagQTtD1uM-4',
  },
};

export const buttonPrimaryWithColors = () => (
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
);

buttonPrimaryWithColors.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/TeWDXS0Uoxqg9I7WN8UQq2/Molecules---Web?type=design&node-id=7151-47355&t=xQAWIiiagQTtD1uM-4',
  },
};

export const buttonSecondaryWithColors = () => (
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
);
buttonSecondaryWithColors.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/TeWDXS0Uoxqg9I7WN8UQq2/Molecules---Web?type=design&node-id=24-1269&t=xQAWIiiagQTtD1uM-4',
  },
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
buttonWithSizeModified.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/TeWDXS0Uoxqg9I7WN8UQq2/Molecules---Web?type=design&node-id=9711-35207&t=xQAWIiiagQTtD1uM-4',
  },
};

export const buttonWithFocusOn = () => {
  const FocusExample = () => {
    const ref = useRef<HTMLButtonElement>(null);
    const handleFocus = () => {
      if (ref.current !== null) {
        ref.current.focus();
      }
    };
    return (
      <Flexbox container gutter={5}>
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
};
buttonWithLoadingState.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/TeWDXS0Uoxqg9I7WN8UQq2/Molecules---Web?type=design&node-id=132-76&t=xQAWIiiagQTtD1uM-4',
  },
};

export const buttonWithLoadingStateWithoutTheSpinnerAnimationDelay = () => (
  <Button onClick={action('clicked')} loading delayLoadingSpinnerAnimation={false}>
    Button
  </Button>
);
buttonWithLoadingStateWithoutTheSpinnerAnimationDelay.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/TeWDXS0Uoxqg9I7WN8UQq2/Molecules---Web?type=design&node-id=132-76&t=xQAWIiiagQTtD1uM-4',
  },
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

export const buttonThatIsFullWidth = () => (
  <Button onClick={action('clicked')} fullWidth>
    Button
  </Button>
);

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

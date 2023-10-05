import React, { useState } from 'react';
import MD from 'react-markdown';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Provider } from '../../../../common/Links/ReactRouterLinkHelper';
import docs from './PillButton.md';

import { Flexbox, Typography, Icon, PillButton } from '../../../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'DEPRECATED / Molecules / PillButton (use Button.Pill instead)',
  parameters: {
    component: PillButton,
  },
};

const SecondaryBackground = styled.div`
  background: white;
  padding: ${(p) => p.theme.spacing.unit(3)}px;
`;
const NoPadding = styled.div`
  background: red;
`;

export const documentation = () => (
  <Typography type="primary">
    <MD>{docs}</MD>
  </Typography>
);

export const defaultUsage = () => <PillButton onClick={action('clicked')}>PillButton</PillButton>;

defaultUsage.story = {
  name: 'Default usage',
};

export const pillButtonWithDifferentVariants = () => (
  <>
    <Display
      horizontal
      title="Primary"
      items={[
        {
          title: 'Default',
          component: <PillButton onClick={action('clicked')}>Button</PillButton>,
        },
        {
          title: 'Icon Left',
          component: (
            <PillButton icon={<Icon.Add16 color="currentColor" />} onClick={action('clicked')}>
              Button
            </PillButton>
          ),
        },
        {
          title: 'Icon Right',
          component: (
            <PillButton
              icon={<Icon.ExternalLink16 color="currentColor" />}
              iconPlacement="right"
              onClick={action('clicked')}
            >
              Button
            </PillButton>
          ),
        },
      ]}
    />
    <Display
      horizontal
      items={[
        {
          title: 'Default Disabled',
          component: (
            <PillButton onClick={action('clicked')} disabled>
              Button
            </PillButton>
          ),
        },
        {
          title: 'Icon Left Disabled',
          component: (
            <PillButton
              icon={<Icon.Add16 color="currentColor" />}
              onClick={action('clicked')}
              disabled
            >
              Button
            </PillButton>
          ),
        },
        {
          title: 'Icon Right Disabled',
          component: (
            <PillButton
              icon={<Icon.ExternalLink16 color="currentColor" />}
              iconPlacement="right"
              onClick={action('clicked')}
              disabled
            >
              Button
            </PillButton>
          ),
        },
      ]}
    />
    <Display
      horizontal
      items={[
        {
          title: 'Default Loading',
          component: (
            <PillButton onClick={action('clicked')} loading>
              Button
            </PillButton>
          ),
        },
        {
          title: 'Icon Left Loading',
          component: (
            <PillButton
              icon={<Icon.Add16 color="currentColor" />}
              onClick={action('clicked')}
              loading
            >
              Button
            </PillButton>
          ),
        },
        {
          title: 'Icon Right Loading',
          component: (
            <PillButton
              icon={<Icon.ExternalLink16 color="currentColor" />}
              iconPlacement="right"
              onClick={action('clicked')}
              loading
            >
              Button
            </PillButton>
          ),
        },
      ]}
    />
    <Display
      horizontal
      title="Secondary"
      items={[
        {
          title: 'Default',
          component: (
            <SecondaryBackground>
              <PillButton variant="secondary" onClick={action('clicked')}>
                Button
              </PillButton>
            </SecondaryBackground>
          ),
        },
        {
          title: 'Icon Left',
          component: (
            <SecondaryBackground>
              <PillButton
                variant="secondary"
                icon={<Icon.Add16 color="currentColor" />}
                onClick={action('clicked')}
              >
                Button
              </PillButton>
            </SecondaryBackground>
          ),
        },
        {
          title: 'Icon Right',
          component: (
            <SecondaryBackground>
              <PillButton
                variant="secondary"
                icon={<Icon.ExternalLink16 color="currentColor" />}
                iconPlacement="right"
                onClick={action('clicked')}
              >
                Button
              </PillButton>
            </SecondaryBackground>
          ),
        },
      ]}
    />
    <Display
      horizontal
      items={[
        {
          title: 'Default Disabled',
          component: (
            <SecondaryBackground>
              <PillButton variant="secondary" onClick={action('clicked')} disabled>
                Button
              </PillButton>
            </SecondaryBackground>
          ),
        },
        {
          title: 'Icon Left Disabled',
          component: (
            <SecondaryBackground>
              <PillButton
                variant="secondary"
                icon={<Icon.Add16 color="currentColor" />}
                onClick={action('clicked')}
                disabled
              >
                Button
              </PillButton>
            </SecondaryBackground>
          ),
        },
        {
          title: 'Icon Right Disabled',
          component: (
            <SecondaryBackground>
              <PillButton
                variant="secondary"
                icon={<Icon.ExternalLink16 color="currentColor" />}
                iconPlacement="right"
                onClick={action('clicked')}
                disabled
              >
                Button
              </PillButton>
            </SecondaryBackground>
          ),
        },
      ]}
    />
    <Display
      horizontal
      items={[
        {
          title: 'Default Loading',
          component: (
            <SecondaryBackground>
              <PillButton variant="secondary" onClick={action('clicked')} loading>
                Button
              </PillButton>
            </SecondaryBackground>
          ),
        },
        {
          title: 'Icon Left Loading',
          component: (
            <SecondaryBackground>
              <PillButton
                variant="secondary"
                icon={<Icon.Add16 color="currentColor" />}
                onClick={action('clicked')}
                loading
              >
                Button
              </PillButton>
            </SecondaryBackground>
          ),
        },
        {
          title: 'Icon Right Loading',
          component: (
            <SecondaryBackground>
              <PillButton
                variant="secondary"
                icon={<Icon.ExternalLink16 color="currentColor" />}
                iconPlacement="right"
                onClick={action('clicked')}
                loading
              >
                Button
              </PillButton>
            </SecondaryBackground>
          ),
        },
      ]}
    />
  </>
);

export const pillButtonWithLoadingState = () => {
  const LoadingExample = () => {
    const [loading, setLoading] = useState(true);
    const toggleLoading = () => setLoading(!loading);

    return (
      <>
        <Display
          title="Primary"
          items={[
            {
              title: 'PillButton',
              component: <PillButton loading={loading}>Button</PillButton>,
            },
          ]}
        />
        <Display
          title="Secondary"
          items={[
            {
              title: 'PillButton',
              component: (
                <SecondaryBackground>
                  <PillButton variant="secondary" loading={loading}>
                    Button
                  </PillButton>
                </SecondaryBackground>
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

pillButtonWithLoadingState.story = {
  name: 'PillButton with loading state',
};

export const pillButtonWithLoadingStateWithoutTheSpinnerAnimationDelay = () => (
  <PillButton onClick={action('clicked')} loading delayLoadingSpinnerAnimation={false}>
    Button
  </PillButton>
);

pillButtonWithLoadingStateWithoutTheSpinnerAnimationDelay.story = {
  name: 'PillButton with loading state without the spinner animation delay',
};

export const pillButtonThatIsFullWidth = () => (
  <NoPadding>
    <PillButton onClick={action('clicked')} fullWidth>
      Button
    </PillButton>
    <PillButton variant="secondary" onClick={action('clicked')} fullWidth>
      Button
    </PillButton>
  </NoPadding>
);

pillButtonThatIsFullWidth.story = {
  name: 'PillButton that is full width',
};

export const pillButtonsComposedInAGroup = () => (
  <Flexbox container gap={2}>
    <Flexbox item flex="1 1 50%">
      <SecondaryBackground>
        <PillButton onClick={action('submit')} fullWidth>
          Submit
        </PillButton>
      </SecondaryBackground>
    </Flexbox>
    <Flexbox item flex="1 1 50%">
      <SecondaryBackground>
        <PillButton onClick={action('reset')} variant="secondary" fullWidth>
          Reset
        </PillButton>
      </SecondaryBackground>
    </Flexbox>
  </Flexbox>
);

pillButtonsComposedInAGroup.story = {
  name: 'PillButtons composed in a group',
};

export const linksLookingLikePillButtons = () => (
  <Provider>
    <Display
      items={[
        {
          title: 'Go to BlaBla',
          component: (
            <PillButton to="/?path=/docs/molecules-pillbutton--pill-buttons-composed-in-a-group">
              BlaBla
            </PillButton>
          ),
        },
        {
          title: 'Go to external BliBli',
          component: (
            <SecondaryBackground>
              <PillButton to="https://nordnet.se" external variant="secondary">
                BliBli
              </PillButton>
            </SecondaryBackground>
          ),
        },
      ]}
    />
  </Provider>
);

linksLookingLikePillButtons.story = {
  name: 'Links looking like PillButtons',
};

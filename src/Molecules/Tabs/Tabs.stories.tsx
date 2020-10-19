import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Tabs, Typography } from '../..';
import docs from './Tabs.mdx';

const SpacingInside = styled.div`
  padding-left: ${(p) => p.theme.spacing.unit(5)}px;
  padding-right: ${(p) => p.theme.spacing.unit(5)}px;
  padding-top: ${(p) => p.theme.spacing.unit(4)}px;
`;

const StyledTabs = styled(Tabs)`
  padding: 0 ${(p) => p.theme.spacing.unit(5)}px;
`;

export default {
  title: 'Molecules / Tabs',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const defaultStory = () => (
  <Typography type="secondary">
    <Tabs>
      <Tabs.Tab title="One" onTitleClick={action('Clicked title1')}>
        Ones children
      </Tabs.Tab>
      <Tabs.Tab
        title={
          <div>
            Node as well
            <span role="img" aria-label="goodjob">
              👍
            </span>
          </div>
        }
        onTitleClick={action('Clicked title2')}
      >
        Moving focus from a tab will put it on the next <a href="#link">focusable</a> Tab in the tab
        panel.
      </Tabs.Tab>
    </Tabs>
  </Typography>
);

defaultStory.story = {
  name: 'Default',
};

const StyledTabsContent = styled(Tabs)`
  & ~ ${Tabs.components.TabContent} {
    height: inherit;
    background: ${({ theme }) => theme.color.sliderBackgroundColor};
  }
`;

export const withStyledTabContent = () => (
  <Typography type="secondary">
    <StyledTabsContent>
      <Tabs.Tab title="One" onTitleClick={action('Clicked title1')}>
        Tab 1. Content have gray background
      </Tabs.Tab>
      <Tabs.Tab title="Two" onTitleClick={action('Clicked title2')}>
        Tab 2. Content have gray background
      </Tabs.Tab>
    </StyledTabsContent>
  </Typography>
);

withStyledTabContent.story = {
  name: 'With styled tab content',
};

export const withCustomStylingLikeSpacing = () => (
  <Typography type="secondary">
    <StyledTabs>
      <Tabs.Tab title="One" onTitleClick={action('Clicked title1')}>
        <SpacingInside>Ones children</SpacingInside>
      </Tabs.Tab>
      <Tabs.Tab title="two" onTitleClick={action('Clicked title2')}>
        <SpacingInside>Twos children</SpacingInside>
      </Tabs.Tab>
    </StyledTabs>
  </Typography>
);

withCustomStylingLikeSpacing.story = {
  name: 'With custom styling (like spacing)',
};

export const withHeightModified = () => (
  <Typography type="secondary">
    <Tabs height={11}>
      <Tabs.Tab title="One" onTitleClick={action('Clicked title1')}>
        Ones children
      </Tabs.Tab>
      <Tabs.Tab title="two" onTitleClick={action('Clicked title2')}>
        Twos children
      </Tabs.Tab>
    </Tabs>
  </Typography>
);

withHeightModified.story = {
  name: 'With height modified',
};

export const controlledBehaviour = () => {
  const ControlledExample = () => {
    const [active, setActive] = useState(0);

    return (
      <Typography type="secondary">
        <button type="button" onClick={() => setActive(active === 0 ? 1 : 0)}>
          Change state outside
        </button>
        <Tabs activeTabIndex={active}>
          <Tabs.Tab title="One" onTitleClick={() => setActive(0)}>
            Ones children
          </Tabs.Tab>
          <Tabs.Tab title="Two" onTitleClick={() => setActive(1)}>
            Twos children
          </Tabs.Tab>
        </Tabs>
      </Typography>
    );
  };
  return <ControlledExample />;
};

controlledBehaviour.story = {
  name: 'Controlled behaviour',
};

export const withConditionallyHiddenTab = () => {
  const showFirstTab = false;
  return (
    <Typography type="secondary">
      <StyledTabs>
        {showFirstTab && (
          <Tabs.Tab title="One" onTitleClick={action('Clicked title1')}>
            <SpacingInside>Ones children</SpacingInside>
          </Tabs.Tab>
        )}
        <Tabs.Tab title="two" onTitleClick={action('Clicked title2')}>
          <SpacingInside>Twos children</SpacingInside>
        </Tabs.Tab>
      </StyledTabs>
    </Typography>
  );
};

withConditionallyHiddenTab.story = {
  name: 'With conditionally hidden tab',
};

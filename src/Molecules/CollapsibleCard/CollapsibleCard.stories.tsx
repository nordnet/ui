import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, CollapsibleCard, Flexbox, Icon, Typography } from '../..';

const styledText = styled.p`
  margin: 0;
`;

const ExampleWithOnClick = () => {
  const [clicked, setClicked] = useState(0);
  return (
    <CollapsibleCard
      title={`I've been clicked ${clicked} times`}
      onClick={() => setClicked(clicked + 1)}
    >
      <Typography type="primary" as={styledText}>
        On mobile the onClick event should fire for onTouchStart and not onClick.
      </Typography>
    </CollapsibleCard>
  );
};

export default {
  title: 'Molecules / CollapsibleCard',
  parameters: {
    component: CollapsibleCard,
  },
};

export const defaultStory = () => {
  return (
    <CollapsibleCard title="Collapsible">
      <Typography type="primary" as={styledText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </CollapsibleCard>
  );
};

defaultStory.story = {
  name: 'Default',
};

const Settings = (
  <Button variant="neutral" onClick={action('Action Component Clicked')}>
    <Icon.Settings24 color={(t) => t.color.text} inline />
  </Button>
);

export const withActionComponentThatDoesNotTriggerCollapse = () => {
  return (
    <CollapsibleCard title="Collapsible" action={Settings}>
      <Typography type="primary" as={styledText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </CollapsibleCard>
  );
};

withActionComponentThatDoesNotTriggerCollapse.story = {
  name: "With an action component that doesn't trigger collapse",
};

export const collapsedInitially = () => {
  return (
    <CollapsibleCard title="Collapsed initially" collapsedInitial>
      <Typography type="primary" as={styledText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Typography>
    </CollapsibleCard>
  );
};

collapsedInitially.story = {
  name: 'Collapsed initially',
};

export const collapsibleWithCustomComponentAsTitle = () => {
  return (
    <CollapsibleCard title={<>Custom title</>}>
      <Typography type="primary" as={styledText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Typography>
    </CollapsibleCard>
  );
};

collapsibleWithCustomComponentAsTitle.story = {
  name: 'Collapsible with custom component as title',
};

export const collapsibleWithOnClickListener = () => <ExampleWithOnClick />;

collapsibleWithOnClickListener.story = {
  name: 'Collapsible with onClick listener',
};

export const collapsibleWithoutIndicator = () => {
  return (
    <CollapsibleCard title="Collapsible without indicator" noIndicator>
      <Typography type="primary" as={styledText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </CollapsibleCard>
  );
};

collapsibleWithoutIndicator.story = {
  name: 'Collapsible without indicator',
};

export const collapsibleWithCustomExpandElementAsAFunction = () => {
  return (
    <CollapsibleCard
      title="Custom expand element (function)"
      expandElement={(collapsed) => (
        <Typography type="secondary">{collapsed ? 'Expand' : 'Close'}</Typography>
      )}
    >
      <Typography type="primary" as={styledText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </CollapsibleCard>
  );
};

collapsibleWithCustomExpandElementAsAFunction.story = {
  name: 'Collapsible with custom expand element as a function',
};

export const collapsibleWithCustomExpandElement = () => {
  return (
    <CollapsibleCard
      title="Custom expand element (ReactNode)"
      expandElement={<Typography type="secondary">Toggle expand</Typography>}
    >
      <Typography type="primary" as={styledText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </CollapsibleCard>
  );
};

collapsibleWithCustomExpandElement.story = {
  name: 'Collapsible with custom expand element',
};

export const collapsibleCardWithNoPadding = () => {
  return (
    <CollapsibleCard
      title="Collapsible card with no title row padding"
      titleRowPaddingX={0}
      titleRowPaddingY={0}
      noIndicator
    >
      <Typography type="primary" as={styledText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </CollapsibleCard>
  );
};

collapsibleCardWithNoPadding.story = {
  name: 'Collapsible card with no title row padding',
};

export const collapsibleCardWithLotsOfTopAndBottomPadding = () => (
  <CollapsibleCard
    title="Collapsible card with lots of top and bottom padding"
    titleRowPaddingY={10}
  >
    <Typography type="primary" as={styledText}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
  </CollapsibleCard>
);

collapsibleCardWithLotsOfTopAndBottomPadding.story = {
  name: 'Collapsible card with lots of top and bottom padding',
};

export const collapsibleWithCustomFullWidthTitle = () => {
  return (
    <CollapsibleCard
      fullWidthTitle
      title={
        <Flexbox container direction="row" justifyContent="space-between">
          <Flexbox item>Custom title</Flexbox>
          <Flexbox item>Status</Flexbox>
        </Flexbox>
      }
    >
      <Typography type="primary" as={styledText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Typography>
    </CollapsibleCard>
  );
};

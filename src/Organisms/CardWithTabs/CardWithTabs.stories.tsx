import React, { useState } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Box, CardWithTabs, FadedScroll, Typography } from '../..';

const mockedText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum nulla tincidunt
interdum ornare. Duis blandit nibh nec dui varius lobortis. Sed viverra, metus quis
vulputate accumsan, eros lacus semper nisl, in commodo risus lacus ut libero. Aliquam augue
quam, sollicitudin quis lectus quis, viverra gravida nibh. Quisque vel mi non tortor
sollicitudin sodales id eget odio. Sed mollis eleifend leo, et sagittis mi. Curabitur
cursus, elit ut porta vehicula, elit ipsum sagittis erat, in dapibus sapien ipsum ut purus.
Aliquam sit amet egestas lacus. Aenean leo augue, malesuada id nibh ac, malesuada fermentum
tortor. Vivamus dolor ante, fringilla vel consequat in, hendrerit vel metus. Quisque eget
ornare turpis. Suspendisse a lectus tortor. Sed ultrices lorem nibh, ultrices pulvinar eros
dictum sit amet. Quisque et ipsum in tellus pharetra tempus. Morbi non nunc rhoncus nisi
pellentesque sagittis. Ut eu sem et ante facilisis consequat. Aliquam lorem ligula, laoreet
quis maximus vel, rhoncus ut odio. Mauris interdum aliquet dolor ac efficitur. Maecenas
egestas porttitor tempor. In at dui tellus. Praesent at lorem metus. Quisque ultricies,
nulla sed pulvinar volutpat, libero enim auctor erat, nec consectetur purus lacus sed orci.
In eleifend a risus at pulvinar. Donec ultricies justo et ligula venenatis, sed ultrices
nunc dignissim.`;

const HeightOnCardWithTabs = styled(CardWithTabs)`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    height: 200px;
  }
`;

export default {
  title: 'Organisms | CardWithTabs',
};

export const withInitialActiveTabIndex = () => (
  <CardWithTabs
    title={
      <Typography type="title3" as="h2">
        Title for the card
      </Typography>
    }
    initialActiveTabIndex={1}
  >
    <CardWithTabs.Tab title="Tab title 1" onTitleClick={action('Clicked title1')}>
      1
    </CardWithTabs.Tab>
    <CardWithTabs.Tab title="Tab title 2">2</CardWithTabs.Tab>
  </CardWithTabs>
);

withInitialActiveTabIndex.story = {
  name: 'with initialActiveTabIndex',
};

export const withVariantBig = () => (
  <CardWithTabs variant="big" title="Title for the card" initialActiveTabIndex={0}>
    <CardWithTabs.Tab title="Tab title 1" onTitleClick={action('Clicked title1')}>
      1
    </CardWithTabs.Tab>
    <CardWithTabs.Tab title="Tab title 2" onTitleClick={action('Clicked title2')}>
      2
    </CardWithTabs.Tab>
  </CardWithTabs>
);

withVariantBig.story = {
  name: 'With variant big',
};

export const controlledBehaviour = () => {
  const ControlledComponent = () => {
    const [active, setActive] = useState(0);

    return (
      <>
        <button type="button" onClick={() => setActive(active === 0 ? 1 : 0)}>
          Change state outside
        </button>
        <CardWithTabs
          title={
            <Typography type="title3" as="h2">
              Title for the card
            </Typography>
          }
          activeTabIndex={active}
        >
          <CardWithTabs.Tab title="Tab title 1" onTitleClick={() => setActive(0)}>
            Tab content 1
          </CardWithTabs.Tab>
          <CardWithTabs.Tab title="Tab title 2" onTitleClick={() => setActive(1)}>
            Tab content 2
          </CardWithTabs.Tab>
        </CardWithTabs>
      </>
    );
  };
  return <ControlledComponent />;
};

controlledBehaviour.story = {
  name: 'Controlled behaviour',
};

export const integrationWithTypographyAndExtraSpaceInside = () => (
  <CardWithTabs
    title={
      <Typography type="title3" as="h2">
        Title for the card
      </Typography>
    }
  >
    <CardWithTabs.Tab title="Tab title 1">
      <Box pt={4} px={5} pb={5}>
        {mockedText}
      </Box>
    </CardWithTabs.Tab>
    <CardWithTabs.Tab title={<span style={{ color: 'red' }}>Custom title component</span>}>
      <Box pt={4} px={5} pb={5}>
        Some stuff for Tab 2
      </Box>
    </CardWithTabs.Tab>
  </CardWithTabs>
);

integrationWithTypographyAndExtraSpaceInside.story = {
  name: 'Integration: with Typography and extra space inside',
};

export const integrationWithFadedScroll = () => (
  <CardWithTabs
    title={
      <Typography type="title3" as="h2">
        Title for the card
      </Typography>
    }
  >
    <CardWithTabs.Tab title="Tab title 1">
      <FadedScroll maxHeight={20}>
        <Box pt={4} px={5}>
          {mockedText}
        </Box>
      </FadedScroll>
    </CardWithTabs.Tab>
    <CardWithTabs.Tab title="Tab title 2">
      <Box pt={4} px={5} pb={5}>
        Some stuff for Tab 2
      </Box>
    </CardWithTabs.Tab>
  </CardWithTabs>
);

integrationWithFadedScroll.story = {
  name: 'Integration: with FadedScroll',
};

export const integrationWithFadedScrollWithHeightFromParent = () => (
  <HeightOnCardWithTabs
    title={
      <Typography type="title3" as="h2">
        Title for the card
      </Typography>
    }
  >
    <CardWithTabs.Tab title="Tab title 1">
      <FadedScroll>
        <Box pt={4} px={5}>
          {mockedText}
        </Box>
      </FadedScroll>
    </CardWithTabs.Tab>
    <CardWithTabs.Tab title="Tab title 2">
      <Box pt={4} px={5} pb={5}>
        Some stuff for Tab 2
      </Box>
    </CardWithTabs.Tab>
  </HeightOnCardWithTabs>
);

integrationWithFadedScrollWithHeightFromParent.story = {
  name:
    'Integration: with FadedScroll of content and height being whatever is available left of parents height.',
};

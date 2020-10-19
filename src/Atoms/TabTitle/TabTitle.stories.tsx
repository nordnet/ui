import React from 'react';
import styled from 'styled-components';
import { TabTitle, Flexbox } from '../..';

const Container = styled.div`
  display: inline-flex;
`;

export default {
  title: 'Atoms / TabTitle',
  parameters: {
    component: TabTitle,
  },
};

export const defaultStory = () => (
  <Container>
    <TabTitle>This is tab title</TabTitle>
  </Container>
);

defaultStory.story = {
  name: 'Default',
};

export const activeStory = () => (
  <Container>
    <TabTitle active>This is tab title</TabTitle>
  </Container>
);

activeStory.story = {
  name: 'Active',
};

export const withHeightModified = () => (
  <Container>
    <TabTitle height={11} active>
      This is tab title
    </TabTitle>
  </Container>
);

withHeightModified.story = {
  name: 'With height modified',
};

export const integrationWithFlexbox = () => (
  <Flexbox container direction="row">
    <Flexbox item>
      <Container>
        <TabTitle>TabTitle1</TabTitle>
      </Container>
    </Flexbox>
    <Flexbox item>
      <Container>
        <TabTitle active>TabTitle2</TabTitle>
      </Container>
    </Flexbox>
    <Flexbox item>
      <Container>
        <TabTitle>TabTitle3</TabTitle>
      </Container>
    </Flexbox>
  </Flexbox>
);

integrationWithFlexbox.story = {
  name: 'Integration: with Flexbox',
};

import React from 'react';
import styled from 'styled-components';
import { Flexbox, TabTitle } from '../..';

const Container = styled.div`
  display: inline-flex;
`;

export default {
  title: 'Atoms / TabTitle',
  parameters: {
    component: TabTitle,
  },
};

export const DefaultStory = {
  render: () => (
    <Container>
      <TabTitle>This is tab title</TabTitle>
    </Container>
  ),

  name: 'Default',
};

export const LargeStory = {
  render: () => (
    <Container>
      <TabTitle variant="large">This is large tab title</TabTitle>
    </Container>
  ),

  name: 'Large',
};

export const ActiveStory = {
  render: () => (
    <Container>
      <TabTitle active>This is tab title</TabTitle>
    </Container>
  ),

  name: 'Active',
};

export const WithHeightModified = {
  render: () => (
    <Container>
      <TabTitle height={11} active>
        This is tab title
      </TabTitle>
    </Container>
  ),

  name: 'With height modified',
};

export const IntegrationWithFlexbox = {
  render: () => (
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
  ),

  name: 'Integration: with Flexbox',
};

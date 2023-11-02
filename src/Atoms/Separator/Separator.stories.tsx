import React from 'react';
import styled from 'styled-components';

import { Card, CardWithTabs, CardWithTitle, Separator } from '../..';

const StyledContainer = styled.div`
  padding: 50px;
  height: 1200px;
  width: 500px;
  background-color: offwhite;
`;

const StyledCard = styled(Card)`
  background-color: white;
  height: 300px;
  width: 300px;
`;

const StyledCardWithTitle = styled(CardWithTitle)`
  height: 300px;
  width: 300px;
`;

const StyledCardWithTabs = styled(CardWithTabs)`
  height: 300px;
  width: 300px;
`;

const Container = ({ children }: any) => (
  <StyledContainer>
    <StyledCard>{children}</StyledCard>
  </StyledContainer>
);

export default {
  title: 'Atoms / Separator',
  parameters: {
    component: Separator,
  },
};

export const separatorDefault = {
  render: () => (
    <Container>
      <Separator />
    </Container>
  ),

  name: 'Separator default',
};

export const separatorsWithDifferentColor = {
  render: () => (
    <Container>
      <Separator color={(t) => t.color.negative} />
      <br />
      <Separator color={(t) => t.color.separator} />
    </Container>
  ),

  name: 'Separators with different color',
};

export const separatorVertical = {
  render: () => (
    <Container>
      <Separator vertical />
    </Container>
  ),

  name: 'Separator vertical',
};

export const separatorFullWidth = {
  render: () => (
    <StyledContainer>
      <StyledCardWithTitle title="card with title">
        separator
        <Separator />
        <br />
        <br />
        <br />
        full width separator
        <Separator fullWidth />
      </StyledCardWithTitle>
      <br />
      <br />
      <br />
      <StyledCardWithTabs title="card with tabs" activeTabIndex={0}>
        <CardWithTabs.Tab title="tab0">tab0</CardWithTabs.Tab>
        <CardWithTabs.Tab title="tab1">tab1</CardWithTabs.Tab>
      </StyledCardWithTabs>
      <br />
      <br />
      <br />
      <StyledCardWithTabs
        title="card with tabs fullwidth separator"
        activeTabIndex={0}
        fullWidthSeparator
      >
        <CardWithTabs.Tab title="tab0">tab0</CardWithTabs.Tab>
        <CardWithTabs.Tab title="tab1">tab1</CardWithTabs.Tab>
      </StyledCardWithTabs>
    </StyledContainer>
  ),

  name: 'Separator fullWidth',
};

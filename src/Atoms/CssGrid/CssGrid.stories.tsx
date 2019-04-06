import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Grid from '.';

const stories = storiesOf('Atoms/CssGrid', module);

const StyledContent = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #eee;
  height: 100%;
`;
const Content = ({ children }: any) => <StyledContent>{children}</StyledContent>;

stories.add('Simple CssGrid', () => (
  <Grid.Container
    areas={[
      ['header', 'header', 'header'],
      ['menu', 'content', 'ads'],
      ['footer', 'footer', 'footer'],
    ]}
  >
    <Grid.Item area="header">
      <Content>Header</Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>Content</Content>
    </Grid.Item>
    <Grid.Item area="menu">
      <Content>Menu</Content>
    </Grid.Item>
    <Grid.Item area="ads">
      <Content>Ads</Content>
    </Grid.Item>
    <Grid.Item area="footer">
      <Content>Footer</Content>
    </Grid.Item>
  </Grid.Container>
));

stories.add('CssGrid with custom gutter', () => (
  <Grid.Container
    gutter={0}
    areas={[
      ['left', 'top', 'sidebar'],
      ['left', 'content', 'sidebar'],
      ['left', 'content', 'sidebar'],
    ]}
  >
    <Grid.Item area="left">
      <Content>Left</Content>
    </Grid.Item>
    <Grid.Item area="top">
      <Content>Top</Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>Content</Content>
    </Grid.Item>
    <Grid.Item area="sidebar">
      <Content>Sidebar</Content>
    </Grid.Item>
  </Grid.Container>
));

stories.add('CssGrid with object as gutter and custom sized columns', () => (
  <Grid.Container
    gutter={{ row: 6, col: 4 }}
    templateColumns={['1fr', '2fr', '1fr']}
    areas={[
      ['left', 'top', 'messages'],
      ['left', 'top', 'order'],
      ['left', 'top', 'sidebar'],
      ['left', 'top', 'sidebar'],
      ['left', 'content', 'sidebar'],
    ]}
  >
    <Grid.Item area="left">
      <Content>Left</Content>
    </Grid.Item>
    <Grid.Item area="top">
      <Content>Top</Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>Content</Content>
    </Grid.Item>
    <Grid.Item area="messages">
      <Content>Messages</Content>
    </Grid.Item>
    <Grid.Item area="order">
      <Content>Order</Content>
    </Grid.Item>
    <Grid.Item area="sidebar">
      <Content>Sidebar</Content>
    </Grid.Item>
  </Grid.Container>
));

stories.add('CssGrid with custom templateColumns', () => (
  <Grid.Container
    templateColumns={[3, 6, 3]}
    areas={[
      ['left', 'top', 'sidebar'],
      ['left', 'content', 'sidebar'],
      ['left', 'content', 'sidebar'],
    ]}
  >
    <Grid.Item area="left">
      <Content>Left</Content>
    </Grid.Item>
    <Grid.Item area="top">
      <Content>Top</Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>Content</Content>
    </Grid.Item>
    <Grid.Item area="sidebar">
      <Content>Sidebar</Content>
    </Grid.Item>
  </Grid.Container>
));

stories.add('CssGrid with different layouts for different screen sizes', () => (
  <Grid.Container
    templateColumns={[6, 6]}
    // prettier-ignore
    areas={[
      ['top', 'top'],
      ['left', 'sidebar'],
      ['content', 'sidebar'],
    ]}
    sm={{
      templateColumns: [3, 6, 3],
      templateRows: ['auto', '1fr', '1fr'],
      // prettier-ignore
      areas: [
        ['left', 'top', 'sidebar'],
        ['left', 'content', 'sidebar'],
        ['left', 'content', 'sidebar'],
      ]
    }}
  >
    <Grid.Item area="left">
      <Content>Left</Content>
    </Grid.Item>
    <Grid.Item area="top">
      <Content>Top</Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>Content</Content>
    </Grid.Item>
    <Grid.Item area="sidebar">
      <Content>Sidebar</Content>
    </Grid.Item>
  </Grid.Container>
));

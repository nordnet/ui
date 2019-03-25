import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Grid from '.';

const stories = storiesOf('Atoms/Grid', module);

const Content = styled.div`
  border: 1px solid black;
  background-color: #eee;
  height: 100%;
`;

stories.add('Grid based on CSS Grid', () => (
  <Grid.Container
    twoDimension
    gutter={4}
    templateColumns="repeat(3, 1fr)"
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

stories.add('Grid based on CSS Grid for Account Overview', () => (
  <Grid.Container
    twoDimension
    gutter={{ row: 4, col: 4 }}
    templateColumns="1fr 2fr 1fr"
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

stories.add('Grid based on Flexbox', () => (
  <Grid.Container justifyContent="center" gutter={4}>
    <Grid.Item flex="1 1 auto">
      <Content>Col 1</Content>
    </Grid.Item>
    <Grid.Item flex="1 1 50%">
      <Content>Col 2</Content>
    </Grid.Item>
    <Grid.Item flex="1 1 auto">
      <Content>Col 3</Content>
    </Grid.Item>
  </Grid.Container>
));

stories.add('Grid based on Flexbox: column', () => (
  <Grid.Container direction="column">
    <Grid.Item order={2}>
      <Content>Col 1</Content>
    </Grid.Item>
    <Grid.Item order={1}>
      <Content>Col 2</Content>
    </Grid.Item>
    <Grid.Item order={3}>
      <Content>Col 3</Content>
    </Grid.Item>
  </Grid.Container>
));

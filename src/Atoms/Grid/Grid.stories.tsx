import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '.';

const stories = storiesOf('Atoms/Grid', module);

stories.add('Grid based on CSS Grid', () => (
  <Grid.Container
    twoDimension
    gutter="16px"
    // prettier-ignore
    areas={[
      ['header header  header'],
      ['menu   content ads'],
      ['footer footer  footer']
    ]}
  >
    <Grid.Item area="header">Header</Grid.Item>
    <Grid.Item area="content">Content</Grid.Item>
    <Grid.Item area="menu">Menu</Grid.Item>
    <Grid.Item area="ads">Ads</Grid.Item>
    <Grid.Item area="footer">Footer</Grid.Item>
  </Grid.Container>
));

stories.add('Grid based on CSS Grid for Account Overview', () => (
  <Grid.Container
    twoDimension
    // prettier-ignore
    gutter={{ row: 16, col: 8 }}
    areas={[
      ['left top     messages'],
      ['left top     order'],
      ['left top     sidebar'],
      ['left top     sidebar'],
      ['left content sidebar'],
    ]}
  >
    <Grid.Item area="left">Left</Grid.Item>
    <Grid.Item area="top">Top</Grid.Item>
    <Grid.Item area="content">Content</Grid.Item>
    <Grid.Item area="messages">Messages</Grid.Item>
    <Grid.Item area="order">Order</Grid.Item>
    <Grid.Item area="sidebar">Sidebar</Grid.Item>
  </Grid.Container>
));

stories.add('Grid based on Flexbox', () => (
  <Grid.Container>
    <Grid.Item>Col 1</Grid.Item>
    <Grid.Item>Col 2</Grid.Item>
    <Grid.Item>Col 3</Grid.Item>
  </Grid.Container>
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Grid from '.';

const stories = storiesOf('Atoms/Grid', module);

const BorderAndBgChildren = styled.div`
  & > * {
    border: 1px solid black;
    background-color: #eee;
  }
`;

stories.add('Grid based on CSS Grid', () => (
  <Grid.Container
    twoDimension
    as={BorderAndBgChildren}
    gutter="16px"
    templateColumns="repeat(3, 1fr)"
    areas={[
      ['header', 'header', 'header'],
      ['menu', 'content', 'ads'],
      ['footer', 'footer', 'footer'],
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
    as={BorderAndBgChildren}
    gutter={{ row: 16, col: 8 }}
    templateColumns="1fr 2fr 1fr"
    areas={[
      ['left', 'top', 'messages'],
      ['left', 'top', 'order'],
      ['left', 'top', 'sidebar'],
      ['left', 'top', 'sidebar'],
      ['left', 'content', 'sidebar'],
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
  <Grid.Container as={BorderAndBgChildren}>
    <Grid.Item>Col 1</Grid.Item>
    <Grid.Item>Col 2</Grid.Item>
    <Grid.Item>Col 3</Grid.Item>
  </Grid.Container>
));

stories.add('Grid based on Flexbox: column', () => (
  <Grid.Container direction="column" as={BorderAndBgChildren}>
    <Grid.Item>Col 1</Grid.Item>
    <Grid.Item>Col 2</Grid.Item>
    <Grid.Item>Col 3</Grid.Item>
  </Grid.Container>
));

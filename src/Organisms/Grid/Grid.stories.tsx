import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '.';
import Cell from './Cell';

const stories = storiesOf('Organisms/Grid', module);

stories.add('Grid based on CSS Grid', () => (
  <Grid areas={['header header  header', 'menu   content ads   ', 'footer footer  footer']}>
    <Cell area="header">Header</Cell>
    <Cell area="content">Content</Cell>
    <Cell area="menu">Menu</Cell>
    <Cell area="ads">Ads</Cell>
    <Cell area="footer">Footer</Cell>
  </Grid>
));

stories.add('Grid based on CSS Grid for Account Overview', () => (
  <Grid
    // prettier-ignore
    areas={[
        'left top messages',
        'left top order',
        'left top sidebar',
        'left top sidebar',
        'left content sidebar'
    ]}
    gap="16px"
  >
    <Cell area="left">Left</Cell>
    <Cell area="top">Top</Cell>
    <Cell area="content">Content</Cell>
    <Cell area="messages">Messages</Cell>
    <Cell area="order">Order</Cell>
    <Cell area="sidebar">Sidebar</Cell>
  </Grid>
));

stories.add('Grid based on Flexbox', () => (
  <Grid>
    <Cell>Col 1</Cell>
    <Cell>Col 2</Cell>
    <Cell>Col 3</Cell>
  </Grid>
));

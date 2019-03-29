import { storiesOf } from '@storybook/react';
import React from 'react';
import ListItem from '../ListItem';
import List from '.';

const stories = storiesOf('Atoms/List', module);

stories.add('Basic list', () => (
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
));

stories.add('List with separated items', () => (
  <List separated>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2 with seperator above</ListItem>
    <ListItem>Item 3 with seperator above</ListItem>
  </List>
));

stories.add('Horisontal List', () => (
  <List horisontal>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
));

stories.add('Separated horisontal List', () => (
  <List horisontal separated>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2 with seperator to the left</ListItem>
    <ListItem>Item 3 with seperator to the left</ListItem>
  </List>
));

import { storiesOf } from '@storybook/react';
import React from 'react';
import ListItem from '../ListItem';
import { List } from '../..';

storiesOf('Atoms | List', module)
  .add('Basic unordered list', () => (
    <List>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
  ))
  .add('Basic ordered list', () => (
    <List as="ol">
      <ListItem>List item 1</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </List>
  ));

import React from 'react';
import ListItem from '../ListItem';
import { List } from '../..';

export default {
  title: 'Atoms / List',
  parameters: {
    component: List,
  },
};

export const basicUnorderedList = () => (
  <List>
    <ListItem>List item</ListItem>
    <ListItem>List item</ListItem>
    <ListItem>List item</ListItem>
  </List>
);

basicUnorderedList.story = {
  name: 'Basic unordered list',
};

export const basicOrderedList = () => (
  <List as="ol">
    <ListItem>List item 1</ListItem>
    <ListItem>List item 2</ListItem>
    <ListItem>List item 3</ListItem>
  </List>
);

basicOrderedList.story = {
  name: 'Basic ordered list',
};

export const SeparetedList = () => (
  <List separated>
    <ListItem>List item 1</ListItem>
    <ListItem>List item 2</ListItem>
    <ListItem>List item 3</ListItem>
  </List>
);

SeparetedList.story = {
  name: 'With separators between each li',
};

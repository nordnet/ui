import React from 'react';
import ListItem from '../ListItem';
import { CardWithTitle, Flexbox, List, Typography } from '../..';

export default {
  title: 'Atoms / List',
  parameters: {
    component: List,
  },
};

export const basicUnorderedList = () => (
  <List>
    <ListItem>
      <Typography>List item</Typography>
    </ListItem>
    <ListItem>
      <Typography>List item</Typography>
    </ListItem>
    <ListItem>
      <Typography>List item</Typography>
    </ListItem>
  </List>
);

basicUnorderedList.story = {
  name: 'Basic unordered list',
};

export const basicOrderedList = () => (
  <List as="ol">
    <ListItem>
      <Typography>List item 1</Typography>
    </ListItem>
    <ListItem>
      <Typography>List item 2</Typography>
    </ListItem>
    <ListItem>
      <Typography>List item 3</Typography>
    </ListItem>
  </List>
);

basicOrderedList.story = {
  name: 'Basic ordered list',
};

export const SeparatedList = () => (
  <List separated>
    <ListItem>
      <Typography>List item 1</Typography>
    </ListItem>
    <ListItem>
      <Typography>List item 2</Typography>
    </ListItem>
    <ListItem>
      <Typography>List item 3</Typography>
    </ListItem>
  </List>
);

SeparatedList.story = {
  name: 'With separators between each li',
};

export const FullWidthSeparatedList = () => (
  <div style={{ margin: '40px' }}>
    <CardWithTitle title="Card" p={5}>
      <List fullWidthSeparator>
        <ListItem>
          <Typography>List item 1</Typography>
        </ListItem>
        <ListItem>
          <Flexbox container justifyContent="flex-start">
            <Typography>List item 2</Typography>
          </Flexbox>
        </ListItem>
        <ListItem>
          <Flexbox container justifyContent="center">
            <Typography>List item 3</Typography>
          </Flexbox>
        </ListItem>
        <ListItem>
          <Flexbox container justifyContent="flex-end">
            <Typography>List item 4</Typography>
          </Flexbox>
        </ListItem>
        <ListItem>
          <Typography>List item 5</Typography>
        </ListItem>
      </List>
    </CardWithTitle>
  </div>
);

FullWidthSeparatedList.story = {
  name: 'With full width separators between each li',
};

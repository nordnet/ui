import React from 'react';
import ListItem from '../ListItem';
import { CardWithTitle, Flexbox, List, Typography } from '../..';

export default {
  title: 'Atoms / List',
  parameters: {
    component: List,
  },
};

export const basicUnorderedList = {
  render: () => (
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
  ),

  name: 'Basic unordered list',
};

export const basicOrderedList = {
  render: () => (
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
  ),

  name: 'Basic ordered list',
};

export const SeparatedList = {
  render: () => (
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
  ),

  name: 'With separators between each li',
};

export const FullWidthSeparatedList = {
  render: () => (
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
  ),

  name: 'With full width separators between each li',
};

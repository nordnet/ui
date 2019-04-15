import { storiesOf } from '@storybook/react';
import React from 'react';
import { Flexbox, ListItem } from '../..';
import List from '.';

const ItemContainer: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => (
  <Flexbox.Container justifyContent="space-between">{children}</Flexbox.Container>
);

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
  ))
  .add('Integration: List item with titles', () => {
    return (
      <List as="ol" leftTitle="title1" rightTitle="title2">
        <ListItem>
          <ItemContainer>
            <div>Left List Item 1</div>
            <div>Right List Item 1</div>
          </ItemContainer>
        </ListItem>
        <ListItem>
          <ItemContainer>
            <div>Left List Item 2</div>
            <div>Right List Item 2</div>
          </ItemContainer>
        </ListItem>
        <ListItem>
          <ItemContainer>
            <div>Left List Item 3</div>
            <div>Right List Item 3</div>
          </ItemContainer>
        </ListItem>
      </List>
    );
  });

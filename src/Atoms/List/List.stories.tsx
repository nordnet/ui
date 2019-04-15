import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import React from 'react';
import ListItem from '../ListItem';
import List from '.';

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
  .add('List item with titles', () => {
    const ItemContainer = styled.div`
      display: flex;
      justify-content: space-between;
    `;

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

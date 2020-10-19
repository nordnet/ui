import React from 'react';
import { Flexbox, ListItem, ListWithTitles } from '../..';

const ItemContainer: React.FunctionComponent = ({ children }) => (
  <Flexbox container justifyContent="space-between">
    {children}
  </Flexbox>
);

export default {
  title: 'Molecules / ListWithTitles',
  parameters: {
    component: ListWithTitles,
  },
};

export const integrationListWithTitlesWithLeftAndRightTitles = () => {
  return (
    <ListWithTitles as="ol" leftTitle="title1" rightTitle="title2">
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
    </ListWithTitles>
  );
};

integrationListWithTitlesWithLeftAndRightTitles.story = {
  name: 'Integration: ListWithTitles with left and right titles',
};

export const integrationListWithTitlesWithLeftTitle = () => {
  return (
    <ListWithTitles as="ol" leftTitle="title1">
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
    </ListWithTitles>
  );
};

integrationListWithTitlesWithLeftTitle.story = {
  name: 'Integration: ListWithTitles with left title',
};

export const integrationListWithTitlesWithRightTitle = () => {
  return (
    <ListWithTitles as="ol" rightTitle="title1">
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
    </ListWithTitles>
  );
};

integrationListWithTitlesWithRightTitle.story = {
  name: 'Integration: ListWithTitles with right title',
};

export const integrationListWithTitlesWithNoTitles = () => {
  return (
    <ListWithTitles as="ol">
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
    </ListWithTitles>
  );
};

integrationListWithTitlesWithNoTitles.story = {
  name: 'Integration: ListWithTitles with no titles',
};

import React from 'react';
import docs from '../FlexTable.mdx';
import { StyledBackground } from './storiesShared';
import { FlexTable } from '../../..';

export default {
  title: 'Molecules / FlexTable / With Different Rows',
  parameters: {
    component: FlexTable,
    docs: {
      page: docs,
    },
  },
};

export const DefaultRows = () => {
  return (
    <StyledBackground>
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Default</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Default</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Default</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Default</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Default</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Default</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Default</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Default</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Default</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    </StyledBackground>
  );
};

export const WithColoredSeparators = () => {
  return (
    <StyledBackground>
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row separatorColor={(t) => t.color.menuAccent1}>
          <FlexTable.Cell columnId="column1">Separator color set</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Separator color set</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Separator color set</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row separatorColor={(t) => t.color.menuAccent2}>
          <FlexTable.Cell columnId="column1">Separator color set</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Separator color set</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Separator color set</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row separatorColor={(t) => t.color.menuAccent3}>
          <FlexTable.Cell columnId="column1">Separator color set</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Separator color set</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Separator color set</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    </StyledBackground>
  );
};

export const WithoutHoverHighlight = () => {
  return (
    <StyledBackground>
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row hoverHighlight={false}>
          <FlexTable.Cell columnId="column1">No hover highlight</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">No hover highlight</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">No hover highlight</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row hoverHighlight={false}>
          <FlexTable.Cell columnId="column1">No hover highlight</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">No hover highlight</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">No hover highlight</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row hoverHighlight={false}>
          <FlexTable.Cell columnId="column1">No hover highlight</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">No hover highlight</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">No hover highlight</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    </StyledBackground>
  );
};

export const WithHiddenSeparator = () => {
  return (
    <StyledBackground>
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row hideSeparator>
          <FlexTable.Cell columnId="column1">Separator hidden</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Separator hidden</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Separator hidden</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row hideSeparator>
          <FlexTable.Cell columnId="column1">Separator hidden</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Separator hidden</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Separator hidden</FlexTable.Cell>
        </FlexTable.Row>
        <FlexTable.Row hideSeparator>
          <FlexTable.Cell columnId="column1">Separator hidden</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Separator hidden</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Separator hidden</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    </StyledBackground>
  );
};

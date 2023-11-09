import React from 'react';
import styled from 'styled-components';
import { FadedScroll, List, ListItem, Typography } from '../..';
import docs from './FadedScroll.mdx';

export default {
  title: 'Atoms / FadedScroll',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const FadedScrollWithHeightDesktopOnly = styled(FadedScroll)`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    height: 220px;
  }
`;

const FadedScrollWithHeight = styled(FadedScroll)`
  height: 220px;
`;

const StyledListItem = styled(ListItem)`
  padding: ${(p) => p.theme.spacing.unit(2)}px;
`;

const content = (
  <List>
    <StyledListItem>
      <Typography>Lorem ipsum dolor sit amet</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Class aptent taciti sociosqu</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Quisque ac ullamcorper eros</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Etiam urna elit, mollis vel arcu id</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Lorem ipsum dolor sit amet</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Class aptent taciti sociosqu</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Quisque ac ullamcorper eros</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Etiam urna elit, mollis vel arcu id</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Lorem ipsum dolor sit amet</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Class aptent taciti sociosqu</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Quisque ac ullamcorper eros</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Etiam urna elit, mollis vel arcu id</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Lorem ipsum dolor sit amet</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Class aptent taciti sociosqu</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Quisque ac ullamcorper eros</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Etiam urna elit, mollis vel arcu id</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Sed consequat erat lacinia</Typography>
    </StyledListItem>
    <StyledListItem>
      <Typography>Aliquam bibendum tortor dui</Typography>
    </StyledListItem>
  </List>
);

export const DefaultStory = {
  render: () => <FadedScroll maxHeight={40}>{content}</FadedScroll>,
  name: 'Default, using maxHeight prop',
};

export const WithAutoHeightOfScrollableArea = {
  render: () => <FadedScrollWithHeightDesktopOnly>{content}</FadedScrollWithHeightDesktopOnly>,

  name: 'With height of scrollable area being whatever is available',
};

export const WithHeightOfFadeChanged = {
  render: () => (
    <FadedScroll fadeHeight={5} maxHeight={45}>
      {content}
    </FadedScroll>
  ),

  name: 'With height of fade changed',
};

export const WithMobileFadeEnabled = {
  render: () => <FadedScrollWithHeight enableMobileFade>{content}</FadedScrollWithHeight>,

  name: 'With mobile fade enabled',
};

export const WithTopFadeDisabled = {
  render: () => (
    <FadedScroll maxHeight={45} disableTopFade>
      {content}
    </FadedScroll>
  ),

  name: 'With top fade disabled',
};

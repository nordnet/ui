import React from 'react';
import styled from 'styled-components';
import { FadedScroll, List, ListItem } from '../..';
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
    <StyledListItem>Lorem ipsum dolor sit amet</StyledListItem>
    <StyledListItem>Sed consequat erat lacinia</StyledListItem>
    <StyledListItem>Class aptent taciti sociosqu</StyledListItem>
    <StyledListItem>Aliquam bibendum tortor dui</StyledListItem>
    <StyledListItem>Quisque ac ullamcorper eros</StyledListItem>
    <StyledListItem>Etiam urna elit, mollis vel arcu id</StyledListItem>
    <StyledListItem>Sed consequat erat lacinia</StyledListItem>
    <StyledListItem>Aliquam bibendum tortor dui</StyledListItem>
    <StyledListItem>Lorem ipsum dolor sit amet</StyledListItem>
    <StyledListItem>Sed consequat erat lacinia</StyledListItem>
    <StyledListItem>Class aptent taciti sociosqu</StyledListItem>
    <StyledListItem>Aliquam bibendum tortor dui</StyledListItem>
    <StyledListItem>Quisque ac ullamcorper eros</StyledListItem>
    <StyledListItem>Etiam urna elit, mollis vel arcu id</StyledListItem>
    <StyledListItem>Sed consequat erat lacinia</StyledListItem>
    <StyledListItem>Aliquam bibendum tortor dui</StyledListItem>
    <StyledListItem>Lorem ipsum dolor sit amet</StyledListItem>
    <StyledListItem>Sed consequat erat lacinia</StyledListItem>
    <StyledListItem>Class aptent taciti sociosqu</StyledListItem>
    <StyledListItem>Aliquam bibendum tortor dui</StyledListItem>
    <StyledListItem>Quisque ac ullamcorper eros</StyledListItem>
    <StyledListItem>Etiam urna elit, mollis vel arcu id</StyledListItem>
    <StyledListItem>Sed consequat erat lacinia</StyledListItem>
    <StyledListItem>Aliquam bibendum tortor dui</StyledListItem>
    <StyledListItem>Lorem ipsum dolor sit amet</StyledListItem>
    <StyledListItem>Sed consequat erat lacinia</StyledListItem>
    <StyledListItem>Class aptent taciti sociosqu</StyledListItem>
    <StyledListItem>Aliquam bibendum tortor dui</StyledListItem>
    <StyledListItem>Quisque ac ullamcorper eros</StyledListItem>
    <StyledListItem>Etiam urna elit, mollis vel arcu id</StyledListItem>
    <StyledListItem>Sed consequat erat lacinia</StyledListItem>
    <StyledListItem>Aliquam bibendum tortor dui</StyledListItem>
  </List>
);

export const defaultStory = () => <FadedScroll maxHeight={40}>{content}</FadedScroll>;

defaultStory.story = {
  name: 'Default, using maxHeight prop',
};

export const withAutoHeightOfScrollableArea = () => (
  <FadedScrollWithHeightDesktopOnly>{content}</FadedScrollWithHeightDesktopOnly>
);

withAutoHeightOfScrollableArea.story = {
  name: 'With height of scrollable area being whatever is available',
};

export const withHeightOfFadeChanged = () => (
  <FadedScroll fadeHeight={5} maxHeight={45}>
    {content}
  </FadedScroll>
);

withHeightOfFadeChanged.story = {
  name: 'With height of fade changed',
};

export const withMobileFadeEnabled = () => (
  <FadedScrollWithHeight enableMobileFade>{content}</FadedScrollWithHeight>
);

withMobileFadeEnabled.story = {
  name: 'With mobile fade enabled',
};

export const withTopFadeDisabled = () => (
  <FadedScroll maxHeight={45} disableTopFade>
    {content}
  </FadedScroll>
);

withTopFadeDisabled.story = {
  name: 'With top fade disabled',
};

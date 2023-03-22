import styled, { css } from 'styled-components';
import { ScrollStyleProps } from './Tabs.types';

import NormalizedElements from '../../common/NormalizedElements/index';
import { Flexbox, Separator } from '../..';

export const scrollStyles = css<ScrollStyleProps>`
  ${({ $scrollOptions }) =>
    $scrollOptions.active
      ? `
  overflow: auto;
  overflow-x: scroll;
  white-space: nowrap;
  `
      : ``};

  ${({ $scrollOptions }) =>
    $scrollOptions.scrollBarHidden
      ? ` ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */`
      : ``};
`;

export const StyledSeparator = styled(Separator)`
  margin-top: -1px;
`;

export const StyledFlexbox = styled(Flexbox)<ScrollStyleProps>`
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  ${scrollStyles}
`;

export const StyledButton = styled(NormalizedElements.Button)<{ $active?: boolean }>`
  background: none;
  display: flex;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-weight: inherit;
  color: ${(p) => (p.$active ? p.theme.color.tabTitleActive : p.theme.color.tabTitle)};
`;

// Reset browser styling for ul element
export const StyledUl = styled.ul`
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
`;

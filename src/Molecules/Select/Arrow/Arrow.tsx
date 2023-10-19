import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../..';

export const StyledChevronDown8 = styled(Icon.ChevronDown8)`
  margin-left: auto;
`;

export function Arrow() {
  return <StyledChevronDown8 color={(t) => t.colorTokens.neutral.icon_default} />;
}

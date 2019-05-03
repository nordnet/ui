import React from 'react';
import styled from 'styled-components';
import { Props } from './ListItem.types';

const StyledListItem = styled.li`
  display: block;
`;

export const ListItem: React.FunctionComponent<Props> = ({ children, className }) => (
  <StyledListItem className={className}>{children}</StyledListItem>
);

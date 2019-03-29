import styled from 'styled-components';
import React from 'react';

const StyledListItem = styled.li`
  display: block;
`;

export const ListItem: React.FunctionComponent = ({ children }) => (
  <StyledListItem>{children}</StyledListItem>
);

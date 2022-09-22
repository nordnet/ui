import React from 'react';
import styled from 'styled-components';
import { ListItem } from '../..';

const StyledLabel = styled.label`
  cursor: inherit;
  width: 100%;
`;

const ControlsListItem: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <ListItem>
      <StyledLabel>{children}</StyledLabel>
    </ListItem>
  );
};

export default ControlsListItem;

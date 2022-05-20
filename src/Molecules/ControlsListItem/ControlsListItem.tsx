import React from 'react';
import styled from 'styled-components';
import { ListItem } from '../..';

const StyledListItem = styled(ListItem)`
  padding: ${(p) => p.theme.spacing.unit(3)}px;
`;

const StyledLabel = styled.label`
  cursor: inherit;
  width: 100%;
`;

const ControlsListItem: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <StyledListItem>
      <StyledLabel>{children}</StyledLabel>
    </StyledListItem>
  );
};

export default ControlsListItem;

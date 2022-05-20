import React from 'react';
import styled from 'styled-components';
import { Button, ListItem } from '../..';

const StyledListItem = styled(ListItem)`
  padding: 0;
  margin: 0;
`;

const StyledButton = styled(Button)`
  padding: ${(p) => p.theme.spacing.unit(4)}px;
  text-align: left;
  span {
    width: 100%;
  }
`;

const ControlsListItem: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <StyledListItem>
      <StyledButton variant="neutral" fullWidth>
        {children}
      </StyledButton>
    </StyledListItem>
  );
};

export default ControlsListItem;

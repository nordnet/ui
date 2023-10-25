import React from 'react';
import styled from 'styled-components';
import { ListItem } from '../..';

const StyledLabel = styled.label<{ $cursor: string; $disabled?: boolean }>`
  width: 100%;
  cursor: ${({ $cursor, $disabled }) => ($disabled ? 'not-allowed' : $cursor)};
`;

const ControlsListItem: React.FC<{
  children: React.ReactElement;
  cursor?: string;
  disabled?: boolean;
}> = ({ children, cursor = 'pointer', disabled }) => {
  return (
    <ListItem>
      <StyledLabel $disabled={disabled} $cursor={cursor}>
        {children}
      </StyledLabel>
    </ListItem>
  );
};

export default ControlsListItem;

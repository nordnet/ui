import React from 'react';
import styled from 'styled-components';
import { ListItem } from '../..';

const StyledLabel = styled.label<{ $disabled?: boolean }>`
  width: 100%;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`;

const ControlsListItem: React.FC<{ children: React.ReactElement; disabled?: boolean }> = ({
  children,
  disabled,
}) => {
  return (
    <ListItem>
      <StyledLabel $disabled={disabled}>{children}</StyledLabel>
    </ListItem>
  );
};

export default ControlsListItem;

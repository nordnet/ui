import React from 'react';
import styled from 'styled-components';
import { ListItem, Typography } from '../..';

const StyledListItem = styled(ListItem)`
  padding: ${(p) => p.theme.spacing.unit(4)}px;
`;

const StyledTypography = styled(Typography)`
  margin-left: 20.5px;
`;

const ControlsListItem: React.FC<{ description?: string }> = ({ children, description }) => {
  return (
    <StyledListItem>
      {children}
      {description && <StyledTypography type="tertiary">{description}</StyledTypography>}
    </StyledListItem>
  );
};

export default ControlsListItem;

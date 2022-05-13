import React from 'react';
import styled from 'styled-components';
import { Button, ListItem, Typography } from '../..';

const StyledListItem = styled(ListItem)`
  padding: ${(p) => p.theme.spacing.unit(4)}px;
`;

const StyledTypography = styled(Typography)`
  margin-left: 20.5px;
`;

const ControlsListItem: React.FC<{ description?: string }> = ({ children, description }) => {
  return (
    <Button variant="neutral" fullWidth>
      <StyledListItem>
        {children}
        {description && <StyledTypography type="tertiary">{description}</StyledTypography>}
      </StyledListItem>
    </Button>
  );
};

export default ControlsListItem;

import styled from 'styled-components';

import { Box, Typography } from '../..';

type StyledTypographyTypes = {
  disabled?: boolean;
};

export const StyledTypography = styled(Typography)<StyledTypographyTypes>`
  &:hover {
    text-decoration: ${(p) => (p.disabled ? 'none' : 'underline')};
  }
`;

export const SelectWrapper = styled(Box)`
  align-items: center;
  display: flex;
  min-height: ${(p) => p.theme.spacing.unit(8)}px;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  border-color: red;
`;

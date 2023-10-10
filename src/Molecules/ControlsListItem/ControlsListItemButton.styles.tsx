import styled from 'styled-components';

import { Box, Typography } from '../..';

type StyledTypographyTypes = {
  disabled?: boolean;
};

export const StyledTypography = styled(Typography)<StyledTypographyTypes>`
  &:hover {
    text-decoration: 'none';
    color: ${(p) => p.theme.color.cta};
  }
`;

export const SelectWrapper = styled(Box)`
  align-items: center;
  display: flex;
`;

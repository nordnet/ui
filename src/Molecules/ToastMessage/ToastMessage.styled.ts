import styled from 'styled-components';

import { Box, Typography } from '../..';

export const BoxContainer = styled(Box)`
  background-color: ${({ theme }) => theme.colorTokens.neutral.background_focus};
  padding: ${({ theme }) => theme.spacing.unit(3)}px;
  border-radius: ${({ theme }) => theme.borderRadius8};
  width: fit-content;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: ${({ theme }) => theme.zIndex.overlayInModal};
`;

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.colorTokens.neutral.text_medium};
`;

import React from 'react';
import styled from 'styled-components';
import { Typography, TruncateWithTooltip, Box } from '../..';

export default {
  title: 'Molecules / TruncateWithTooltip',
  parameters: {
    component: TruncateWithTooltip,
  },
};

const StyledDiv = styled.div`
  max-width: ${(p) => p.theme.spacing.unit(35)}px;
`;

export const truncateWithTooltipDefault = () => (
  <>
    <StyledDiv>
      <TruncateWithTooltip position="bottom" label="Hover over this truncated text">
        <Typography type="primary">Hover over this truncated text</Typography>
      </TruncateWithTooltip>
    </StyledDiv>
    <Box mt={5}>
      <TruncateWithTooltip position="bottom" label="If not truncated no tooltip will show">
        <Typography type="primary">If not truncated no tooltip will show</Typography>
      </TruncateWithTooltip>
    </Box>
  </>
);

import React from 'react';
import styled from 'styled-components';
import Truncate from '.';
import { Typography } from '../..';

export default {
  title: 'Atoms / Truncate',
  parameters: {
    component: Truncate,
  },
};

const StyledDiv = styled.div`
  max-width: ${(p) => p.theme.spacing.unit(35)}px;
`;

export const truncateDefault = () => (
  <StyledDiv>
    <Truncate>
      <Typography type="primary">This text will be truncated after 35 units</Typography>
    </Truncate>
  </StyledDiv>
);

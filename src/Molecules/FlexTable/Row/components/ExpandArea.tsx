import React from 'react';
import styled from 'styled-components';
import { ExpandAreaProps } from '../Row.types';
import { Box } from '../../../..';
import { ExpandItems } from '.';

const StyledBox = styled(Box)`
  background: ${(p) => p.theme.color.tableRowBackground};
`;

export const ExpandArea = ({ expandChildren, expandItems }: ExpandAreaProps) => (
  <StyledBox px={5} pb={2} md={{ px: 5, pt: 5, pb: 0 }} role="cell">
    {/* TODO should we rather have padding specified in ExpandItems? */}
    {expandItems && expandItems.length ? <ExpandItems items={expandItems} /> : null}
    {expandChildren && (
      <Box pt={2} md={{ px: 5, pt: 0, pb: 5 }}>
        {expandChildren}
      </Box>
    )}
  </StyledBox>
);

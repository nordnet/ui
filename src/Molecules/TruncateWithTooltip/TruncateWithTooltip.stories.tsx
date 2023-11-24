import React from 'react';
import styled from 'styled-components';
import { Typography, TruncateWithTooltip, Box, FlexTable } from '../..';

export default {
  title: 'Molecules / TruncateWithTooltip',
  parameters: {
    component: TruncateWithTooltip,
  },
};

const StyledBackground = styled.div`
  background-color: ${(p) => p.theme.color.background};

  &:not(:last-of-type) {
    margin-bottom: ${(p) => p.theme.spacing.unit(10)}px;
  }
`;

const StyledDiv = styled.div`
  max-width: ${(p) => p.theme.spacing.unit(35)}px;
`;

export const TruncateWithTooltipDefault = () => (
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

export const TruncateWithTooltipTable = () => (
  <StyledBackground>
    <Typography type="title3">Table With Different Alignments</Typography>
    <FlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">
          Truncated Header Truncated Header Truncated Header
        </FlexTable.Header>
        <FlexTable.Header columnId="column2" justifyContent="flex-start">
          Left
        </FlexTable.Header>
        <FlexTable.Header columnId="column3" justifyContent="flex-end">
          Right
        </FlexTable.Header>
        <FlexTable.Header columnId="column4" justifyContent="center">
          Center
        </FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2" justifyContent="flex-start">
          Cell 1-2
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column3" justifyContent="flex-end">
          Truncated Cell Truncated Cell Truncated Cell
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4" justifyContent="center">
          Cell 1-4
        </FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">
          Truncated Cell Truncated Cell Truncated Cell
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column2" justifyContent="flex-start">
          Cell 2-2
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column3" justifyContent="flex-end">
          Cell 2-3
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4" justifyContent="center">
          Cell 2-4
        </FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2" justifyContent="flex-start">
          Cell 3-2
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column3" justifyContent="flex-end">
          Cell 3-3
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4" justifyContent="center">
          Cell 3-4
        </FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  </StyledBackground>
);

import React from 'react';
import FlexTable from '../FlexTable';
import { Flag, Typography } from '../../..';
import docs from '../FlexTable.mdx';
import { FlexProps } from '../../../Atoms/Flexbox/Flexbox.types';
import { StyledBackground } from './storiesShared';

export default {
  title: 'Molecules / FlexTable / With different columns',
  parameters: {
    component: FlexTable,
    docs: {
      page: docs,
    },
  },
};

export const DifferentAlignmentsTable = () => (
  <StyledBackground>
    <Typography type="title3">Table With Different Alignments</Typography>
    <FlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Left</FlexTable.Header>
        <FlexTable.Header columnId="column2" justifyContent="flex-end">
          Right
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
        <FlexTable.Cell columnId="column2" justifyContent="flex-end">
          Cell 1-2
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column3" justifyContent="flex-end">
          Cell 1-3
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4" justifyContent="center">
          Cell 1-4
        </FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2" justifyContent="flex-end">
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
        <FlexTable.Cell columnId="column2" justifyContent="flex-end">
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

const FlagCell: React.FC<{ columnId: string } & FlexProps> = React.memo(
  ({ children, columnId, ...cellProps }) => (
    <FlexTable.Cell columnId={columnId} {...cellProps}>
      <FlexTable.CellInlineContainer>
        <FlexTable.Cell.TextWrapper>{children}</FlexTable.Cell.TextWrapper>
        <Flag country="SE" />
      </FlexTable.CellInlineContainer>
    </FlexTable.Cell>
  ),
);

export const ColumnWidthTableWithCustomFlagCell = () => (
  <StyledBackground>
    <Typography type="title3">Table With Different Widths and Custom Flag Cell</Typography>
    <FlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header flex="1" columnId="column1">
          Flex 1
        </FlexTable.Header>
        <FlexTable.Header flex="0 15%" columnId="column2">
          Fifteen percent
        </FlexTable.Header>
        <FlexTable.Header flex="0 100px" columnId="column3">
          Loooooooooooooong header set width
        </FlexTable.Header>
        <FlexTable.Header columnId="column4">Default</FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell flex="1" columnId="column1">
          Cell 1-1
        </FlexTable.Cell>
        <FlexTable.Cell flex="0 15%" columnId="column2">
          Very long cell content that should be truncated or ellipsized depending on your language
          preferences
        </FlexTable.Cell>
        <FlexTable.Cell flex="0 100px" columnId="column3">
          Cell 1-3
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4">Cell 1-4</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell flex="1" columnId="column1">
          Cell 2-1
        </FlexTable.Cell>
        <FlexTable.Cell flex="0 15%" columnId="column2">
          Cell 2-2
        </FlexTable.Cell>
        <FlagCell flex="0 100px" columnId="column3">
          Long cell with flag
        </FlagCell>
        <FlexTable.Cell columnId="column4">Cell 2-4</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell flex="1" columnId="column1">
          Cell 3-1
        </FlexTable.Cell>
        <FlexTable.Cell flex="0 15%" columnId="column2">
          Cell 3-2
        </FlexTable.Cell>
        <FlexTable.Cell flex="0 100px" columnId="column3">
          Cell 3-3
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4">Cell 3-4</FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  </StyledBackground>
);

export const ColumnWidthSortableTable = () => (
  <StyledBackground>
    <Typography type="title3">Sortable Table With Column Width Set</Typography>
    <FlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header sortable flex="1" columnId="column1">
          Flex 1
        </FlexTable.Header>
        <FlexTable.Header sortable flex="0 15%" columnId="column2">
          Fifteen percent
        </FlexTable.Header>
        <FlexTable.Header sortable flex="0 100px" columnId="column3">
          Loooooooooooooong header set width
        </FlexTable.Header>
        <FlexTable.Header sortable columnId="column4">
          Default
        </FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell flex="1" columnId="column1">
          Cell 1-1
        </FlexTable.Cell>
        <FlexTable.Cell flex="0 15%" columnId="column2">
          Very long cell content that should be truncated or ellipsized depending on your language
          preferences
        </FlexTable.Cell>
        <FlexTable.Cell flex="0 100px" columnId="column3">
          Cell 1-3
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4">Cell 1-4</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell flex="1" columnId="column1">
          Cell 2-1
        </FlexTable.Cell>
        <FlexTable.Cell flex="0 15%" columnId="column2">
          Cell 2-2
        </FlexTable.Cell>
        <FlagCell flex="0 100px" columnId="column3">
          Long cell with flag
        </FlagCell>
        <FlexTable.Cell columnId="column4">Cell 2-4</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell flex="1" columnId="column1">
          Cell 3-1
        </FlexTable.Cell>
        <FlexTable.Cell flex="0 15%" columnId="column2">
          Cell 3-2
        </FlexTable.Cell>
        <FlexTable.Cell flex="0 100px" columnId="column3">
          Cell 3-3
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4">Cell 3-4</FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  </StyledBackground>
);

export const HiddenColumnOnXsAndSmScreens = () => (
  <StyledBackground>
    <Typography type="title3">Hidden Column On Extra Small And Small Screens</Typography>
    <FlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2" hidden md={{ hidden: false }}>
          Hidden on xs and sm
        </FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2" hidden md={{ hidden: false }}>
          Hidden on xs and sm
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2" hidden md={{ hidden: false }}>
          Hidden on xs and sm
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2" hidden md={{ hidden: false }}>
          Hidden on xs and sm
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  </StyledBackground>
);

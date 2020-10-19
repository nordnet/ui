import React, { useState } from 'react';
import FlexTable from './FlexTable';
import { Typography, Flag, Flexbox } from '../..';
import docs from './FlexTable.mdx';
import { SortOrder } from './Header/HeaderContent/HeaderContent.types';
import { OnSort } from './Header/Header.types';
import { StyledFlexboxContainer, StyledBackground } from './storiesShared';

export default {
  title: 'Molecules / FlexTable / FlexTable with different headers',
  parameters: {
    component: FlexTable,
    docs: {
      page: docs,
    },
  },
};

export const DefaultTableHeaders = () => {
  const DefaultTableHeadersExample = () => {
    const CustomisedTableHeader: React.FC = ({ children }) => (
      <FlexTable.Header columnId="column3" sortable>
        {({ sortable, sorted, fontSize, onSortClick, sortOrder }) => (
          <FlexTable.Header.SortButton onClick={onSortClick}>
            <StyledFlexboxContainer container>
              <Flexbox item>
                <Flag country="SE" inline height={3} />
              </Flexbox>
              <FlexTable.CellInlineContainer item>
                <FlexTable.Header.TextWrapper fontSize={fontSize} sorted={sorted}>
                  {children}
                </FlexTable.Header.TextWrapper>
              </FlexTable.CellInlineContainer>
              {sortable && (
                <Flexbox item>
                  <FlexTable.Header.SortIcon sortOrder={sortOrder} />
                </Flexbox>
              )}
            </StyledFlexboxContainer>
          </FlexTable.Header.SortButton>
        )}
      </FlexTable.Header>
    );

    return (
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1" flex="1">
            Table header 1 flex 1
          </FlexTable.Header>
          <FlexTable.Header columnId="column2" flex="3">
            Table header 2 flex 3
          </FlexTable.Header>
          <CustomisedTableHeader>Customised header</CustomisedTableHeader>
          <FlexTable.Header columnId="column4">Table header 3 no flex</FlexTable.Header>
          <FlexTable.Header columnId="column5">
            <Typography type="title3">React component</Typography>
          </FlexTable.Header>
        </FlexTable.HeaderRow>
      </FlexTable>
    );
  };

  return (
    <StyledBackground>
      <Typography type="title3">Table Header Variations</Typography>
      <DefaultTableHeadersExample />
    </StyledBackground>
  );
};

export const UncontrolledSortableHeaders = () => {
  const UncontrolledSortableHeadersExample = () => {
    return (
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1" sortable>
            Uncontrolled 1
          </FlexTable.Header>
          <FlexTable.Header columnId="column2" sortable>
            Uncontrolled 2
          </FlexTable.Header>
          <FlexTable.Header
            columnId="column3"
            sortable
            initialSortOrder={FlexTable.CONSTANTS.SORT_ORDER_DESCENDING}
          >
            With initial sort order
          </FlexTable.Header>
          <FlexTable.Header columnId="column4" sortable={false}>
            Non sortable
          </FlexTable.Header>
        </FlexTable.HeaderRow>
      </FlexTable>
    );
  };
  return (
    <StyledBackground>
      <Typography type="title3">Uncontrolled Sortable Headers</Typography>
      <UncontrolledSortableHeadersExample />
    </StyledBackground>
  );
};

// For useState to work in storybook, components needs to be wrapped in a new function
export const ControlledSortableHeaders = () => {
  const ControlledSortableHeadersExample = () => {
    const ReactComponent = () => {
      const [columnSort, setColumnSort] = useState<{ columnId: string; sortOrder: SortOrder }>({
        columnId: 'column1',
        sortOrder: FlexTable.CONSTANTS.SORT_ORDER_NONE,
      });

      const getSort = (columnId: string) =>
        columnSort.columnId === columnId
          ? columnSort.sortOrder
          : FlexTable.CONSTANTS.SORT_ORDER_NONE;
      const onSort: OnSort = (columnId, nextSortOrder) =>
        setColumnSort({ columnId, sortOrder: nextSortOrder });

      return (
        <FlexTable>
          <FlexTable.HeaderRow>
            <FlexTable.Header
              columnId="column1"
              sortable
              sortOrder={getSort('column1')}
              onSort={onSort}
            >
              Controlled1
            </FlexTable.Header>
            <FlexTable.Header
              columnId="column2"
              sortable
              sortOrder={getSort('column2')}
              onSort={onSort}
            >
              Controlled2
            </FlexTable.Header>
            <FlexTable.Header columnId="column3" sortable={false}>
              Not sortable
            </FlexTable.Header>
            <FlexTable.Header
              columnId="column4"
              sortable
              sortOrder={getSort('column4')}
              onSort={onSort}
            >
              Controlled3
            </FlexTable.Header>
          </FlexTable.HeaderRow>
        </FlexTable>
      );
    };

    return <ReactComponent />;
  };

  return (
    <StyledBackground>
      <Typography type="title3">Controlled Sortable Headers</Typography>
      <ControlledSortableHeadersExample />
    </StyledBackground>
  );
};

export const SortableHeadersOnlyAscendingDescending = () => {
  const SortableHeadersOnlyAscendingDescendingExample = () => {
    const ReactComponent = () => {
      const [columnSort, setColumnSort] = useState<{ columnId: string; sortOrder: SortOrder }>({
        columnId: 'column1',
        sortOrder: FlexTable.CONSTANTS.SORT_ORDER_ASCENDING,
      });

      const getSort = (columnId: string) =>
        columnSort.columnId === columnId
          ? columnSort.sortOrder
          : FlexTable.CONSTANTS.SORT_ORDER_NONE;
      const onSort: OnSort = (columnId) => {
        let nextSortOrder: SortOrder = FlexTable.CONSTANTS.SORT_ORDER_ASCENDING;
        const sameAsCurrentlySorted = columnId === columnSort.columnId;
        if (sameAsCurrentlySorted) {
          nextSortOrder =
            columnSort.sortOrder === FlexTable.CONSTANTS.SORT_ORDER_ASCENDING
              ? FlexTable.CONSTANTS.SORT_ORDER_DESCENDING
              : FlexTable.CONSTANTS.SORT_ORDER_ASCENDING;
        }
        setColumnSort({ columnId, sortOrder: nextSortOrder });
      };

      return (
        <FlexTable>
          <FlexTable.HeaderRow>
            <FlexTable.Header
              columnId="column1"
              sortable
              sortOrder={getSort('column1')}
              onSort={onSort}
            >
              Controlled1
            </FlexTable.Header>
            <FlexTable.Header
              columnId="column2"
              sortable
              sortOrder={getSort('column2')}
              onSort={onSort}
            >
              Controlled2
            </FlexTable.Header>
            <FlexTable.Header columnId="column3" sortable={false}>
              Not sortable
            </FlexTable.Header>
            <FlexTable.Header
              columnId="column4"
              sortable
              sortOrder={getSort('column4')}
              onSort={onSort}
            >
              Controlled3
            </FlexTable.Header>
          </FlexTable.HeaderRow>
        </FlexTable>
      );
    };
    return <ReactComponent />;
  };
  return (
    <StyledBackground>
      <Typography type="title3">Sortable Headers – Only Ascending/Descending</Typography>
      <SortableHeadersOnlyAscendingDescendingExample />
    </StyledBackground>
  );
};

export const SortableHeaderUncontrolledWithDifferentAlignment = () => {
  const SortableHeaderUncontrolledWithDifferentAlignmentExample = () => {
    return (
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1" sortable justifyContent="center">
            Uncontrolled center
          </FlexTable.Header>
          <FlexTable.Header columnId="column2" sortable justifyContent="flex-end">
            Uncontrolled right
          </FlexTable.Header>
          <FlexTable.Header columnId="column3" sortable>
            Uncontrolled left
          </FlexTable.Header>
          <FlexTable.Header columnId="column4" sortable={false}>
            Not sortable
          </FlexTable.Header>
        </FlexTable.HeaderRow>
      </FlexTable>
    );
  };
  return (
    <StyledBackground>
      <Typography type="title3">Uncontrolled Sortable Headers With Different Alignments</Typography>
      <SortableHeaderUncontrolledWithDifferentAlignmentExample />
    </StyledBackground>
  );
};

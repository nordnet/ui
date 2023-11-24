import React, { useState } from 'react';
import { setPersistedSortOrder, FlexTable, Typography } from '../../..';
import docs from '../FlexTable.mdx';
import { SortOrder } from '../Header/HeaderContent/HeaderContent.types';
import { OnSort } from '../Header/Header.types';
import { StyledBackground } from './storiesShared';
import { getPersistedSortOrder } from '../shared';

export default {
  title: 'Molecules / FlexTable / With persist sorting order',
  parameters: {
    component: FlexTable,
    docs: {
      page: docs,
    },
  },
};

export const UncontrolledSortableHeadersThatSavesLastSorted = () => {
  const UncontrolledSortableHeadersThatSavesLastSortedExample = () => {
    return (
      <FlexTable id="table-saves-last-sorted" persistSortingOrder>
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
          <FlexTable.Header columnId="column4" sortable justifyContent="flex-end">
            Uncontrolled 3
          </FlexTable.Header>
        </FlexTable.HeaderRow>
      </FlexTable>
    );
  };
  return (
    <StyledBackground>
      <Typography type="title3">Uncontrolled Sortable Headers</Typography>
      <UncontrolledSortableHeadersThatSavesLastSortedExample />
    </StyledBackground>
  );
};

export const ControlledSortableHeadersThatSavesLastSorted = () => {
  const ControlledSortableHeadersExample = () => {
    const ReactComponent = () => {
      const tableId = 'controlled-table-saves-last-sorted';
      const storedSortOrder = getPersistedSortOrder(tableId);
      const initialSortOrder = storedSortOrder || {
        columnId: 'column1',
        sortOrder: FlexTable.CONSTANTS.SORT_ORDER_NONE,
      };

      const [columnSort, setColumnSort] = useState<{ columnId: string; sortOrder: SortOrder }>(
        initialSortOrder,
      );

      const getSort = (columnId: string) =>
        columnSort.columnId === columnId
          ? columnSort.sortOrder
          : FlexTable.CONSTANTS.SORT_ORDER_NONE;

      const onSort: OnSort = (columnId, nextSortOrder) => {
        setColumnSort({ columnId, sortOrder: nextSortOrder });
      };

      return (
        <FlexTable id={tableId} persistSortingOrder>
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

export const OnlyAscendingDescendingThatSavesLastSorted = () => {
  const ControlledSortableHeadersExample = () => {
    const ReactComponent = () => {
      const tableId = 'controlled-table-ascending-descending-saves-last-sorted';
      const storedSortOrder = getPersistedSortOrder(tableId);
      const initialSortOrder = storedSortOrder || {
        columnId: 'column1',
        sortOrder: FlexTable.CONSTANTS.SORT_ORDER_ASCENDING,
      };

      const [columnSort, setColumnSort] = useState<{ columnId: string; sortOrder: SortOrder }>(
        initialSortOrder,
      );

      const getSort = (columnId: string) =>
        columnSort.columnId === columnId
          ? columnSort.sortOrder
          : FlexTable.CONSTANTS.SORT_ORDER_NONE;

      // const onSort: OnSort = (columnId, nextSortOrder) => {
      //   setColumnSort({ columnId, sortOrder: nextSortOrder });
      // };

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
        setPersistedSortOrder(tableId, columnId, nextSortOrder);
      };

      return (
        <FlexTable id={tableId} persistSortingOrder>
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

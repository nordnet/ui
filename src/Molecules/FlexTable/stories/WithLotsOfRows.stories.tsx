import React, { useMemo, useState } from 'react';
import R from 'ramda';
import { Meta, StoryObj } from '@storybook/react';

import { Box, FlexTable, Typography } from '../../..';
import docs from '../FlexTable.mdx';
import { StyledBackground } from './storiesShared';

const meta: Meta<typeof FlexTable> = {
  component: FlexTable,
  title: 'Molecules / FlexTable / With lots of rows',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export default meta;
type Story = StoryObj<typeof FlexTable>;

const generateUniqueId = (rowIndex: number) =>
  `${rowIndex}_${Math.random().toString(36).substr(2, 9)}`;

const generateTableData = (rowsLength: number, columnsLength: number) =>
  [...Array(rowsLength)]?.map((_, rowIndex) => {
    const rowId = generateUniqueId(rowIndex);
    return [...Array(columnsLength)].reduce((acc, __, columnIndex) => {
      const keyName = `value${columnIndex + 1}`;
      const id = generateUniqueId(columnIndex);
      return { ...acc, rowId, [keyName]: { value: `Cell ${rowIndex + 1}-${columnIndex + 1}`, id } };
    }, {});
  });

const BigTableRow = ({ data }: any) => {
  const xsColumnKeys = Object.keys(data).filter((_, index) => Boolean(index % 2));
  const expandItems = xsColumnKeys?.map(
    (key, index) => ({ label: `Header ${index * 2 + 1}`, value: data[key].value }),
    {},
  );
  return (
    <FlexTable.Row expandItems={expandItems}>
      {Object.keys(R.omit(['rowId'], data))?.map((valueKey, index) => (
        <FlexTable.Cell
          key={data[valueKey].id}
          columnId={`column${index + 1}`}
          hidden={Boolean(index % 2)}
          md={{ hidden: false }}
        >
          {data[valueKey].value}
        </FlexTable.Cell>
      ))}
    </FlexTable.Row>
  );
};

const BigTableTemplate = ({ columns, rows }: { columns: number; rows: number }) => {
  const rowsLength = rows;
  const columnsLength = columns;
  const [sort, setSort] = useState<any>({});
  const tableData = useMemo(
    () => generateTableData(rowsLength, columnsLength),
    [rowsLength, columnsLength],
  );
  const sortedData = useMemo(() => {
    if (sort.sortOrder === 'none') {
      return tableData;
    }
    const getValue = (rowData: any) => rowData[sort.columnId.replace('column', 'value')].value;
    return tableData.slice(0).sort((rowA, rowB) => {
      if (sort.sortOrder === 'ascending') {
        return getValue(rowB).localeCompare(getValue(rowA));
      }

      if (sort.sortOrder === 'descending') {
        return getValue(rowA).localeCompare(getValue(rowB));
      }

      return 0;
    });
  }, [tableData, sort]);

  return (
    <StyledBackground>
      <Typography type="title3">Big FlexTable</Typography>

      <FlexTable expandable md={{ expandable: false }}>
        <FlexTable.HeaderRow>
          {[...Array(columnsLength)]?.map((_, index) => (
            <FlexTable.Header
              columnId={`column${index + 1}`}
              key={`column${index + 1}`}
              sortable
              onSort={(columnId, nextSortOrder) => {
                setSort({ columnId, sortOrder: nextSortOrder });
              }}
              hidden={Boolean(index % 2)}
              md={{ hidden: false }}
            >
              Header {index + 1}
            </FlexTable.Header>
          ))}
        </FlexTable.HeaderRow>
        {sortedData?.map((data) => <BigTableRow key={data.rowId} data={data} />)}
      </FlexTable>
    </StyledBackground>
  );
};

export const BigTable: Story = {
  render: () => <BigTableTemplate rows={100} columns={10} />,
};

const BigTableWithoutStickyHeaderTemplate = ({
  columns,
  rows,
}: {
  columns: number;
  rows: number;
}) => {
  const rowsLength = rows;
  const columnsLength = columns;
  const [sort, setSort] = useState<any>({});
  const tableData = useMemo(
    () => generateTableData(rowsLength, columnsLength),
    [rowsLength, columnsLength],
  );
  const sortedData = useMemo(() => {
    const getValue = (rowData: any) => rowData[sort.columnId.replace('column', 'value')].value;
    return tableData.sort((rowA, rowB) => {
      if (sort.sortOrder === 'ascending') {
        return getValue(rowB).localeCompare(getValue(rowA));
      }

      if (sort.sortOrder === 'descending') {
        return getValue(rowA).localeCompare(getValue(rowB));
      }

      return 0;
    });
  }, [tableData, sort]);

  return (
    <StyledBackground>
      <Typography type="title3">Big FlexTable Without Sticky Header</Typography>
      <FlexTable stickyHeader={false}>
        <FlexTable.HeaderRow>
          {[...Array(columnsLength)]?.map((_, index) => (
            <FlexTable.Header
              columnId={`column${index + 1}`}
              key={`column${index + 1}`}
              sortable
              onSort={(columnId, nextSortOrder) => {
                setSort({ columnId, sortOrder: nextSortOrder });
              }}
            >
              Header {index + 1}
            </FlexTable.Header>
          ))}
        </FlexTable.HeaderRow>
        {sortedData?.map((data) => <BigTableRow key={data.rowId} data={data} />)}
      </FlexTable>
    </StyledBackground>
  );
};

export const BigTableWithoutStickyHeader: Story = {
  render: () => <BigTableWithoutStickyHeaderTemplate rows={100} columns={10} />,
};

const MultipleBigTablesWithStickyHeadersTemplate = ({
  columns,
  rows,
}: {
  columns: number;
  rows: number;
}) => {
  const rowsLength = rows;
  const columnsLength = columns;
  const [sort, setSort] = useState<any>({});
  const tableData = useMemo(
    () => generateTableData(rowsLength, columnsLength),
    [rowsLength, columnsLength],
  );
  const sortedData = useMemo(() => {
    const getValue = (rowData: any) => rowData[sort.columnId.replace('column', 'value')].value;
    return tableData.sort((rowA, rowB) => {
      if (sort.sortOrder === 'ascending') {
        return getValue(rowB).localeCompare(getValue(rowA));
      }

      if (sort.sortOrder === 'descending') {
        return getValue(rowA).localeCompare(getValue(rowB));
      }

      return 0;
    });
  }, [tableData, sort]);

  return (
    <StyledBackground>
      <Typography type="title3">
        Table 1 - Multiple Big Tables Demonstrating Proper Sticky Header
      </Typography>
      <Box mb={10}>
        <FlexTable>
          <FlexTable.HeaderRow>
            {[...Array(columnsLength)]?.map((_, index) => (
              <FlexTable.Header
                columnId={`column${index + 1}`}
                key={`column${index + 1}`}
                sortable
                onSort={(columnId, nextSortOrder) => {
                  setSort({ columnId, sortOrder: nextSortOrder });
                }}
              >
                Table 1 Header {index + 1}
              </FlexTable.Header>
            ))}
          </FlexTable.HeaderRow>
          {sortedData?.map((data) => <BigTableRow key={data.rowId} data={data} />)}
        </FlexTable>
      </Box>
      <Typography type="title3">
        Table 2 - Multiple Big Tables Demonstrating Proper Sticky Header
      </Typography>
      <FlexTable>
        <FlexTable.HeaderRow>
          {[...Array(columnsLength)]?.map((_, index) => (
            <FlexTable.Header
              columnId={`column${index + 1}`}
              key={`column${index + 1}`}
              sortable
              onSort={(columnId, nextSortOrder) => {
                setSort({ columnId, sortOrder: nextSortOrder });
              }}
            >
              Table 2 Header {index + 1}
            </FlexTable.Header>
          ))}
        </FlexTable.HeaderRow>
        {sortedData?.map((data) => <BigTableRow key={data.rowId} data={data} />)}
      </FlexTable>
    </StyledBackground>
  );
};

export const MultipleBigTablesWithStickyHeaders: Story = {
  render: () => <MultipleBigTablesWithStickyHeadersTemplate rows={100} columns={5} />,
};

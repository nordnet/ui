/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Flag, Table, Tbody, Td, Tfoot, Th, Thead, Tr, Typography } from '../..';
import { data } from './Table.stories.data';

let tableData: (string | number)[][] = [];

for (let i = 0; i < 5; i += 1) {
  tableData = tableData.concat(data);
}

export default {
  title: 'Atoms / Table',
};

export const defaultStory = {
  render: () => (
    <Table width="100%">
      <Thead>
        <Tr>
          <Th>Symbol</Th>
          <Th>Name</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tableData?.map((instrument, index) => (
          <Tr key={`${instrument[0]}_${index}`}>
            <Td>{instrument[1]}</Td>
            <Td>{instrument[2]}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Td>-</Td>
          <Td>-</Td>
        </Tr>
      </Tfoot>
    </Table>
  ),

  name: 'Default',
};

export const integrationTableWithTypography = {
  render: () => {
    return (
      <Typography type="secondary">
        <Table width="100%">
          <Thead>
            <Tr>
              <Th width="25%">Symbol</Th>
              <Th width="40%">Name</Th>
              <Th width="10%" textAlign="right">
                Development
              </Th>
              <Th width="10%">Last</Th>
              <Th width="5%">Flag</Th>
              <Th width="10%">Quantity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData?.map((instrument, index) => (
              <Tr key={`${instrument[0]}_${index}`}>
                <Td>{instrument[1]}</Td>
                <Td>{instrument[2]}</Td>
                <Td textAlign="right">{instrument[5]}%</Td>
                <Td>{instrument[4]}</Td>
                <Td>
                  <Flag country="se" size="m" />
                </Td>
                <Td>{instrument[3]}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
            </Tr>
          </Tfoot>
        </Table>
      </Typography>
    );
  },

  name: 'Integration: Table with Typography',
};

export const integrationTableWithTypographyAndEllipsisOnName = {
  render: () => {
    return (
      <Typography type="secondary">
        <Table width="100%">
          <Thead>
            <Tr>
              <Th width="25%">Symbol</Th>
              <Th width="40%">Name</Th>
              <Th width="10%" textAlign="right">
                Development
              </Th>
              <Th width="10%">Last</Th>
              <Th width="5%">Flag</Th>
              <Th width="10%">Quantity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData?.map((instrument, index) => (
              <Tr key={`${instrument[0]}_${index}`}>
                <Td>{instrument[1]}</Td>
                <Td ellipsis>{instrument[2]}</Td>
                <Td textAlign="right">{instrument[5]}%</Td>
                <Td>{instrument[4]}</Td>
                <Td>
                  <Flag country="se" size="m" />
                </Td>
                <Td>{instrument[3]}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
            </Tr>
          </Tfoot>
        </Table>
      </Typography>
    );
  },

  name: 'Integration: Table with Typography and ellipsis on name',
};

export const integrationTableStickyHeaderWithTypography = {
  render: () => {
    return (
      <Typography type="secondary">
        <Table width="100%">
          <Thead stickyHeader>
            <Tr>
              <Th width="25%">Symbol</Th>
              <Th width="40%">Name</Th>
              <Th width="10%" textAlign="right">
                Development
              </Th>
              <Th width="10%">Last</Th>
              <Th width="5%">Flag</Th>
              <Th width="10%">Quantity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData?.map((instrument, index) => (
              <Tr key={`${instrument[0]}_${index}`}>
                <Td>{instrument[1]}</Td>
                <Td>{instrument[2]}</Td>
                <Td textAlign="right">{instrument[5]}%</Td>
                <Td>{instrument[4]}</Td>
                <Td>
                  <Flag country="SE" size="s" />
                </Td>
                <Td>{instrument[3]}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
            </Tr>
          </Tfoot>
        </Table>
      </Typography>
    );
  },

  name: 'Integration: Table (stickyHeader) with Typography',
};

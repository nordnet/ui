import React from 'react';
import { storiesOf } from '@storybook/react';
import { Typography, Flag } from '../..';
import Table from './Table';
import Thead from './Thead';
import Tbody from './Tbody';
import Tfoot from './Tfoot';
import Tr from './Tr';
import Th from './Th';
import Td from './Td';
import { data } from './Table.stories.data';

let tableData: (string | number)[][] = [];
const multiplyTableWith = 5;

for (let i = 0; i < multiplyTableWith; i += 1) {
  tableData = tableData.concat(data);
}

/* eslint-disable react/no-array-index-key */
storiesOf('Atoms | Table', module)
  .add('Table', () => {
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
            {tableData.map((instrument, index) => (
              <Tr key={`${instrument[0]}_${index}`}>
                <Td>{instrument[1]}</Td>
                <Td>{instrument[2]}</Td>
                <Td textAlign="right">{instrument[5]}%</Td>
                <Td>{instrument[4]}</Td>
                <Td>
                  <Flag country="se" width={4} height={4} />
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
  })
  .add('Table with stickyHeader', () => {
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
            {tableData.map((instrument, index) => (
              <Tr key={`${instrument[0]}_${index}`}>
                <Td>{instrument[1]}</Td>
                <Td>{instrument[2]}</Td>
                <Td textAlign="right">{instrument[5]}%</Td>
                <Td>{instrument[4]}</Td>
                <Td>
                  <Flag country="SE" />
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
  });

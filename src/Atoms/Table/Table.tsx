import React from 'react';
import styled from 'styled-components';
import { TableComponent, Props } from './Table.types';

const StyledTable = styled.table<Props>`
  width: ${p => p.width};
  table-layout: ${p => (p.tableLayout ? 'fixed' : 'auto')};
  border-collapse: collapse;
`;

export const Table: TableComponent = ({ children, width }) => (
  <StyledTable width={width}>{children}</StyledTable>
);

Table.defaultProps = {
  tableLayout: 'fixed',
  width: '100%',
};

export default Table;

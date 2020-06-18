import React from 'react';
import { HeaderRow, Row } from './Row';
import { Header } from './Header';
import { Cell } from './Cell';
import { constants, ColumnProvider } from './shared';
import { Props, FlexTableComponents } from './FlexTable.types';
import { FlexTableProvider } from './shared/FlexTableProvider';
import { ExpandCell } from './Cell/ExpandCell';

const FlexTable: React.FC<Props> & FlexTableComponents = ({
  className,
  density = 'm',
  children,
  ...htmlProps
}) => (
  <FlexTableProvider density={density}>
    <div className={className} role="table" {...htmlProps}>
      <ColumnProvider>{children}</ColumnProvider>
    </div>
  </FlexTableProvider>
);

FlexTable.Row = Row;
FlexTable.HeaderRow = HeaderRow;
FlexTable.Header = Header;
FlexTable.ExpandCell = ExpandCell;
FlexTable.Cell = Cell;
FlexTable.CONSTANTS = constants;

export default FlexTable;

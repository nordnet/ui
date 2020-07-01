import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useColumnLayout } from '../shared/ColumnProvider';
import { CellComponent, InnerCellComponent } from './Cell.types';
import { TextWrapper } from './TextWrapper';
import { useFlexTable } from '../shared/FlexTableProvider';

const StyledFlexbox = styled(Flexbox)`
  overflow: hidden;
`;

const InnerCell: InnerCellComponent = React.memo(
  ({ children, className, columnId, flexProps, fontSize }) => (
    <StyledFlexbox className={className} role="cell" {...flexProps}>
      {isElement(children) && children}
      {isFunction(children)
        ? children({ fontSize, columnId })
        : !isElement(children) && <TextWrapper fontSize={fontSize}>{children}</TextWrapper>}
    </StyledFlexbox>
  ),
);

const Cell: CellComponent = ({ children, className, columnId }) => {
  const [columnLayout] = useColumnLayout(columnId);
  const { fontSize } = useFlexTable();

  if (!R.prop('flexProps', columnLayout)) {
    return null;
  }

  return (
    <InnerCell
      className={className}
      columnId={columnId}
      flexProps={columnLayout.flexProps}
      fontSize={fontSize}
    >
      {children}
    </InnerCell>
  );
};

Cell.TextWrapper = React.memo(TextWrapper);
export default Cell;

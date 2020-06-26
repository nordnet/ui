import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useColumnLayout } from '../shared/ColumnProvider';
import { CellComponent } from './Cell.types';
import { TextWrapper } from './TextWrapper';
import { useFlexTable } from '../shared/FlexTableProvider';

const StyledFlexbox = styled(Flexbox)`
  overflow: hidden;
`;

// TODO: Fix typings that react memo causes when exporting textwrapper on cell
// @ts-ignore
const Cell: CellComponent = React.memo(({ children, className, columnId }) => {
  const [columnLayout] = useColumnLayout(columnId);
  const { fontSize } = useFlexTable();

  if (!R.prop('flexProps', columnLayout)) {
    return null;
  }

  return (
    <StyledFlexbox className={className} role="cell" {...columnLayout.flexProps}>
      {isElement(children) && children}
      {isFunction(children)
        ? children({ fontSize, columnId })
        : !isElement(children) && <TextWrapper fontSize={fontSize}>{children}</TextWrapper>}
    </StyledFlexbox>
  );
});

Cell.TextWrapper = React.memo(TextWrapper);
export default Cell;

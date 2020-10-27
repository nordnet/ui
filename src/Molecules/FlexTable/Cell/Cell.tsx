import React from 'react';
import styled from 'styled-components';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useFlexCellProps } from '../shared/ColumnProvider';
import { CellComponent, InnerCellComponent } from './Cell.types';
import { TextWrapper } from './TextWrapper';
import { useFlexTable } from '../shared/FlexTableProvider';
import { RenderForSizes } from '../shared';

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

const Cell: CellComponent = (props) => {
  const { children, className, columnId } = props;
  const {
    fontSize: xsFontSize,
    sm: smTable,
    md: mdTable,
    lg: lgTable,
    xl: xlTable,
  } = useFlexTable();

  const flexProps = useFlexCellProps(props);

  return (
    <RenderForSizes
      xs={{ fontSize: xsFontSize }}
      sm={smTable}
      md={mdTable}
      lg={lgTable}
      xl={xlTable}
    >
      {({ fontSize, className: mediaClassName }) => (
        <InnerCell
          className={mediaClassName ? `${className} ${mediaClassName}` : className}
          columnId={columnId}
          flexProps={flexProps}
          fontSize={fontSize}
        >
          {children}
        </InnerCell>
      )}
    </RenderForSizes>
  );
};

Cell.TextWrapper = React.memo(TextWrapper);
export default Cell;

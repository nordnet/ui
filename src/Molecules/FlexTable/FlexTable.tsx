import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { HeaderRow, FooterRow, Row } from './Row';
import { Header } from './Header';
import { Footer } from './Footer';
import { Cell } from './Cell';
import { constants, ColumnProvider, CellInlineContainer } from './shared';
import { FlexTableComponents, FlexTableComponent } from './FlexTable.types';
import { FlexTableProvider, useFlexTable } from './shared/FlexTableProvider';
import { ExpandCell } from './Cell/ExpandCell';
import { Box, Button, Flexbox, Typography } from '../..';
import { isElement } from '../../common/utils';
import { ExpandItem, ExpandItems } from './Row/components';

type HtmlDivProps = {} & React.HTMLAttributes<HTMLDivElement>;

const isChildrenRow = (child: React.ReactElement): boolean => child?.props?.data?.rowId;

const renderWithLimit = (
  children: Array<React.ReactElement>,
  renderLimit: number,
): Array<React.ReactElement> => {
  let rowIndex = 0;
  return React.Children.map(children, (child: React.ReactElement) => {
    if (!isChildrenRow(child)) {
      return child;
    }

    if (rowIndex >= renderLimit) {
      return null;
    }

    rowIndex += 1;
    return child;
  }).filter(Boolean);
};

const childrenRowLength = (children: Array<React.ReactElement>): number =>
  React.Children.map(children, (child: React.ReactElement) => {
    if (!isChildrenRow(child)) {
      return null;
    }

    return child;
  }).filter(Boolean).length;

const StyledDiv = styled('div').withConfig({
  shouldForwardProp: (prop) => !['stickyHeader'].includes(prop),
})<
  HtmlDivProps & {
    stickyHeader: boolean;
  }
>`
  ${(p) => (p.stickyHeader ? 'position: relative;' : '')}
`;

const FlexTableContainer: React.FC<HtmlDivProps> = ({ className, children, ...htmlDivProps }) => {
  const { stickyHeader } = useFlexTable();

  return (
    <StyledDiv className={className} role="table" stickyHeader={stickyHeader} {...htmlDivProps}>
      {children}
    </StyledDiv>
  );
};

const StyledTitleWrapper = styled.div`
  display: flex;
`;

const StyledTypography = styled(Typography)`
  padding-left: ${(p) => p.theme.spacing.unit(1)}px;
`;

const StyledTotalFlexbox = styled(Flexbox)`
  background: ${({ theme }) => theme.color.backgroundInput};
`;

const FlexTable: FlexTableComponent & FlexTableComponents = ({
  className,
  density = 'm',
  columnDistance = 2,
  expandable = false,
  stickyHeader = true,
  children,
  title,
  fontSize = 'm',
  sm,
  md,
  lg,
  xl,
  initialRenderLimit,
  ...htmlProps
}) => {
  const [renderLimit, setRenderLimit] = useState<number>(initialRenderLimit || Infinity);
  const handleShowAll = useCallback(() => {
    setRenderLimit(Infinity);
  }, [setRenderLimit]);

  return (
    <FlexTableProvider
      density={density}
      columnDistance={columnDistance}
      stickyHeader={stickyHeader}
      fontSize={fontSize}
      expandable={expandable}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      {/* pass sticky with context instead of prop-drilling, since context might change */}
      <FlexTableContainer
        className={className}
        {...htmlProps}
        {...(title ? { 'aria-labelledby': `${htmlProps.id}-title` } : {})}
      >
        {Boolean(title) && (
          <StyledTitleWrapper id={`${htmlProps.id}-title`}>
            {isElement(title) ? title : <StyledTypography type="title3">{title}</StyledTypography>}
          </StyledTitleWrapper>
        )}
        <ColumnProvider>
          {initialRenderLimit && renderLimit !== Infinity
            ? renderWithLimit(children as Array<React.ReactElement>, initialRenderLimit)
            : children}
        </ColumnProvider>
      </FlexTableContainer>
      {renderLimit ? (
        <StyledTotalFlexbox container>
          <Flexbox item>
            <Box p={1}>
              <Typography type="secondary" weight="bold">
                {childrenRowLength(children as Array<React.ReactElement>)} total
              </Typography>
            </Box>
          </Flexbox>
          <Flexbox item>
            {renderLimit !== Infinity ? <Button onClick={handleShowAll}>Show all</Button> : null}
          </Flexbox>
        </StyledTotalFlexbox>
      ) : null}
    </FlexTableProvider>
  );
};

FlexTable.Row = Row;
FlexTable.HeaderRow = HeaderRow;
FlexTable.FooterRow = FooterRow;
FlexTable.Header = Header;
FlexTable.Footer = Footer;
FlexTable.ExpandCell = ExpandCell;
FlexTable.ExpandItem = ExpandItem;
FlexTable.Cell = Cell;
FlexTable.CellInlineContainer = CellInlineContainer;
FlexTable.CONSTANTS = constants;

FlexTable.ExpandItems = ExpandItems;

export default FlexTable;

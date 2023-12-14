import React from 'react';
import styled from 'styled-components';
import { FooterRow, HeaderRow, Row } from './Row';
import { Header } from './Header';
import { Footer } from './Footer';
import { Cell } from './Cell';
import { CellInlineContainer, ColumnProvider, constants, getStylesForSizes } from './shared';
import { Props } from './FlexTable.types';
import { FlexTableProvider, useFlexTable } from './shared/FlexTableProvider';
import { ExpandCell } from './Cell/ExpandCell';
import { Typography } from '../..';
import { isElement } from '../../common/utils';
import { ExpandItem, ExpandItems } from './Row/components';

type HtmlDivProps = {} & React.HTMLAttributes<HTMLDivElement>;

type ScreenSizeConfigurableProps = {
  stickyHeader: boolean;
};

type StyledDivProps = {
  $xs: ScreenSizeConfigurableProps;
  $sm: Partial<ScreenSizeConfigurableProps>;
  $md: Partial<ScreenSizeConfigurableProps>;
  $lg: Partial<ScreenSizeConfigurableProps>;
  $xl: Partial<ScreenSizeConfigurableProps>;
} & HtmlDivProps;

const getStickyHeaderStyles = ({ stickyHeader }: ScreenSizeConfigurableProps) =>
  stickyHeader ? 'position: relative;' : '';

const StyledDiv = styled('div')<StyledDivProps>`
  ${getStylesForSizes<{}, ScreenSizeConfigurableProps>(
    (p: StyledDivProps) => ({
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      stickyHeader: getStickyHeaderStyles,
    },
  )}
`;

const FlexTableContainer: React.FC<HtmlDivProps> = ({ className, children, ...htmlDivProps }) => {
  const { xs, sm, md, lg, xl } = useFlexTable<'stickyHeader'>('stickyHeader');

  return (
    <StyledDiv
      className={className}
      role="table"
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
      {...htmlDivProps}
    >
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

const FlexTable = ({
  className,
  density = 'm',
  columnDistance = 2,
  expandable = false,
  stickyHeader = true,
  children,
  title,
  fontSize = 'm',
  persistSortingOrder = false,
  sm,
  md,
  lg,
  xl,
  ...htmlProps
}: Props) => (
  <FlexTableProvider
    id={htmlProps.id}
    density={density}
    columnDistance={columnDistance}
    stickyHeader={stickyHeader}
    fontSize={fontSize}
    expandable={expandable}
    persistSortingOrder={persistSortingOrder}
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
      <ColumnProvider>{children}</ColumnProvider>
    </FlexTableContainer>
  </FlexTableProvider>
);

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

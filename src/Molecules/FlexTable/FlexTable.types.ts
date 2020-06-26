import React, { ReactNode } from 'react';
import { RowComponent, FooterRowComponent, HeaderRowComponent } from './Row/Row.types';
import { HeaderComponent } from './Header/Header.types';
import { FooterComponent } from './Footer/Footer.types';
import { constants } from './shared';
import { CellComponent, ExpandCellComponent } from './Cell/Cell.types';
import { Density, FontSize } from './shared/shared.types';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type Props = {
  className?: string;
  density?: Density;
  fontSize?: FontSize;
  stickyHeader?: boolean;
  title?: ReactNode;
  expandable?: boolean;
} & HtmlProps;

export type FlexTableComponents = {
  Header: HeaderComponent;
  HeaderRow: HeaderRowComponent;
  Footer: FooterComponent;
  FooterRow: FooterRowComponent;
  Row: RowComponent;
  Cell: CellComponent;
  ExpandCell: ExpandCellComponent;
  CONSTANTS: typeof constants;
};

import React, { ReactNode } from 'react';
import {
  ExpandItems,
  ExpandItemComponent,
  ExpandItemsComponent,
} from './ExpandItems/ExpandItems.types';
import { ColorFn } from '../../../common/Types/sharedTypes';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

interface Expand {
  expanded?: boolean;
  expandChildren?: ReactNode;
  expandItems?: ExpandItems;
}

interface IncludeExpand extends Expand {
  includeExpand?: true;
  onExpandToggle?: (expanded: boolean) => void;
}

interface ExcludeExpand extends Expand {
  includeExpand?: false;
  onExpandToggle?: undefined;
}

export type ExpandProps = IncludeExpand | ExcludeExpand;

type Props = {
  hideSeparator?: boolean;
  hoverHighlight?: boolean;
  separatorColor?: ColorFn;
  isContent?: boolean;
} & ExpandProps &
  HtmlProps;

export type RowComponents = {
  ExpandItem: ExpandItemComponent;
  ExpandItems: ExpandItemsComponent;
};

export type RowComponent = React.FC<Props>;

type HeaderProps = {
  hideSeparator?: boolean;
  isContent?: boolean;
  separatorColor?: ColorFn;
} & HtmlProps;

export type HeaderRowComponent = React.FC<HeaderProps>;

type FooterProps = HeaderProps;

export type FooterRowComponent = React.FC<FooterProps>;

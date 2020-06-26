import React, { ReactNode } from 'react';
import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';
import {
  SortOrder,
  SortButtonProps,
  TextWrapperComponent,
  TextWrapperProps,
  SortIconComponent,
  SortButtonComponent,
  SortIconProps,
} from './HeaderContent/HeaderContent.types';

export type OnSort = (columnId: string, newSortOrder: SortOrder) => void;

type Unsortable = {
  sortable?: false;
  sortOrder?: undefined;
  initialSortOrder?: undefined;
  onSort?: undefined;
};

interface Sortable {
  sortable: true;
  onSort?: OnSort;
}

interface ControlledSort extends Sortable {
  sortOrder: SortOrder;
  initialSortOrder?: undefined;
}

interface UncontrolledSort extends Sortable {
  sortOrder?: undefined;
  initialSortOrder?: SortOrder;
}

type SortedProps = ControlledSort | UncontrolledSort | Unsortable;

type RenderPropArguments = TextWrapperProps &
  SortIconProps &
  SortButtonProps & { onSortClick: () => void; sorted: boolean; sortable: boolean };
type RenderFunc = (props: RenderPropArguments) => ReactNode;
type Children = ReactNode | RenderFunc;

type Props = { children?: Children; columnId: string } & FlexboxProps & SortedProps;

export type HeaderComponents = {
  TextWrapper: TextWrapperComponent;
  SortIcon: SortIconComponent;
  SortButton: SortButtonComponent;
};

export type HeaderComponent = React.FC<Props> & HeaderComponents;

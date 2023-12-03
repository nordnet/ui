import { ReactNode } from 'react';
import {
  SortButtonProps,
  SortIconProps,
  SortOrder,
  TextWrapperProps,
} from './HeaderContent/HeaderContent.types';
import { FlexPropsType } from '../shared/shared.types';

export type OnSort = (columnId: string, newSortOrder: SortOrder) => void;

interface Sorting {
  /**
   * Add sortable arrow and button
   * @default false
   */
  sortable?: boolean;
  /**
   * Sets a controlled sort state, sort states can be found under FlexTable.CONSTANTS
   */
  sortOrder?: SortOrder;
  /**
   * Sets the initial sort state for uncontrolled sorting
   */
  initialSortOrder?: SortOrder;
  onSort?: OnSort;
}

interface Unsortable extends Sorting {
  sortable?: false;
  sortOrder?: undefined;
  initialSortOrder?: undefined;
  onSort?: undefined;
}

interface ControlledSort extends Sorting {
  sortable: true;
  sortOrder: SortOrder;
  initialSortOrder?: undefined;
}

interface UncontrolledSort extends Sorting {
  sortable: true;
  sortOrder?: undefined;
  initialSortOrder?: SortOrder;
}

type SortedProps = ControlledSort | UncontrolledSort | Unsortable;

type RenderPropArguments = TextWrapperProps &
  SortIconProps &
  SortButtonProps & { onSortClick: () => void; sorted: boolean; sortable: boolean };
type RenderFunc = (props: RenderPropArguments) => ReactNode;
type Children = ReactNode | RenderFunc;

export type Props = {
  children?: Children;
  /**
   * Set column id, used to share layout between header and cells in the column
   */
  columnId: string;
} & FlexPropsType &
  SortedProps;

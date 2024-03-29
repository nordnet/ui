import React from 'react';
import { FlexPropsType } from '../shared/shared.types';

type RenderProp = {
  columnId: string;
};

export type Props = {
  children?: React.ReactNode | ((obj: RenderProp) => React.ReactNode);
  /**
   * Define which column which cell it belongs to and sets the column layout defined in the `Header`
   */
  columnId: string;
} & FlexPropsType;

type ExpandCellProps = {
  /**
   * Disable chevron
   */
  disabled?: boolean;
  /**
   * State for chevron direction
   */
  expanded: boolean;
  onClick: () => void;
  /**
   * Defined by `Header` to get correct column layout. Set by the constant ICON_COLUMN_DEFAULT_FLEX_PROPS
   */
  columnId: string;
};

export type ExpandCellComponent = React.FC<ExpandCellProps & FlexPropsType>;

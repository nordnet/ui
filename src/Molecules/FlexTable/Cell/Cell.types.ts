import React, { ReactNode } from 'react';
import { FlexPropsType } from '../shared/shared.types';
import { TextWrapper } from './TextWrapper';

type RenderPropArguments = { columnId: string };
type RenderFunc = (props: RenderPropArguments) => ReactNode;
type Children = ReactNode | RenderFunc;

export type Props = {
  children?: Children;
  /**
   * Define which column which cell it belongs to and sets the column layout defined in the `Header`
   */
  columnId: string;
} & FlexPropsType;

export type CellComponents = { TextWrapper: typeof TextWrapper };

export type CellComponent = React.FC<Props & React.ComponentProps<typeof TextWrapper>> &
  CellComponents;

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

type TextWrapperProps = {
  /**
   * Truncate the text inside and a tooltip on hover when truncated
   * @default true
   */
  truncate?: boolean;
  className?: string;
  weight?: string;
  children?: React.ReactNode;
};

export type TextWrapperComponent = React.FC<TextWrapperProps>;

export type ExpandCellComponent = React.FC<ExpandCellProps & FlexPropsType>;

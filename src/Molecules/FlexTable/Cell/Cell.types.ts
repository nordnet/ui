import React, { ReactNode } from 'react';
import { FontSize, Density } from '../shared/shared.types';
import { FlexPropsType } from '../shared/ColumnProvider/ColumnProvider.types';

type RenderPropArguments = { density: Density; fontSize: FontSize; columnId: string };
type RenderFunc = (props: RenderPropArguments) => ReactNode;
type Children = ReactNode | RenderFunc;

export type Props = {
  children?: Children;
  className?: string;
  columnId: string;
};

export type TextWrapperProps = {
  fontSize?: FontSize;
};

export type TextWrapperComponent = React.FC<TextWrapperProps>;

export type CellComponents = { TextWrapper: TextWrapperComponent };

export type CellComponent = React.FC<Props> & CellComponents;

export type InnerCellComponent = React.FC<Props & TextWrapperProps & { flexProps: FlexPropsType }>;

type ExpandCellProps = {
  disabled?: boolean;
  expanded: boolean;
  onClick: () => void;
  columnId: string;
};

export type ExpandCellComponent = React.FC<ExpandCellProps>;

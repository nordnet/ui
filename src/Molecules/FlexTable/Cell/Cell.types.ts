import React, { ReactNode } from 'react';
import { FontSize, Density } from '../shared/shared.types';

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

type ExpandCellProps = {
  disabled?: boolean;
  expanded: boolean;
  onClick: () => void;
  columnId: string;
};

export type ExpandCellComponent = React.FC<ExpandCellProps>;

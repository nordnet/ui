import React, { ReactNode } from 'react';
import { FlexPropsType } from '../shared/shared.types';

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

export type TextWrapperProps = {
  /**
   * Set font weight
   * @default 'bold'
   */
  weight?: string;
  /**
   * Truncate the text inside and a tooltip on hover when truncated
   * @default true
   */
  truncate?: boolean;
  className?: string;
};

export type TextWrapperComponent = React.FC<TextWrapperProps>;

export type FooterComponent = React.FC<Props> & { TextWrapper: TextWrapperComponent };

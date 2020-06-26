import React, { ReactNode } from 'react';
import { FontSize, Density } from '../shared/shared.types';

type RenderPropArguments = { density: Density; fontSize: FontSize; columnId: string };
type RenderFunc = (props: RenderPropArguments) => ReactNode;
type Children = ReactNode | RenderFunc;

export type Props = {
  children?: Children;
  className?: string;
  fontSize?: FontSize;
  columnId: string;
};

export type TextWrapperProps = {
  fontSize?: FontSize;
  weight?: string;
};

export type TextWrapperComponent = React.FC<TextWrapperProps>;

export type FooterComponent = React.FC<Props> & { TextWrapper: TextWrapperComponent };

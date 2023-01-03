import React from 'react';
import { Props as CardProps } from '../../Atoms/Card/Card.types';

type Padding = {
  p?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  px?: number;
  py?: number;
};
export type Props = {
  /** @default normal */
  variant?: 'normal' | 'big';
  title: React.ReactNode;
  children?: React.ReactNode;
} & Padding;

export type CardWithTitleComponent = React.FunctionComponent<Props & CardProps>;

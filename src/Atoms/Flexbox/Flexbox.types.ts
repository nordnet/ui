import { Property } from 'csstype';
import React from 'react';

export type Width = number | string;
export type Height = number | string;

export type ContainerProps = {
  children?: React.ReactNode;
  container?: boolean;
  width?: Width;
  height?: Height;
  as?: any;
  /** flexbox direction */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** @deprecated use gap instead */
  gutter?: number;
  hidden?: boolean;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  /** TODO: alignItems values feels wrong */
  alignItems?:
    | 'normal'
    | 'stretch'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'baseline';
  /** TODO: alignContent values feels wrong */
  alignContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'normal'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';

  /** a11y */
  role?: string;
  title?: string;
  gap?: number | string | { column: number; row: number };
};

export type ItemProps = {
  item?: boolean;
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: string;
  flex?: string;
  align?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  alignSelf?: Property.AlignSelf;
  size?: number | string;
  width?: Width;
  height?: Height;
  as?: any;
  hidden?: boolean;
  /** a11y */
  role?: string;
  title?: string;
};

export type FlexProps = ItemProps & ContainerProps & { className?: string };
type MediaRelatedProps<T> = {
  sm?: Partial<T>;
  md?: Partial<T>;
  lg?: Partial<T>;
  xl?: Partial<T>;
};

export type Props = MediaRelatedProps<FlexProps> &
  FlexProps & { children?: React.ReactNode; as?: any };

export type StoryTemplateProps = {
  cols: { children: React.ReactNode; itemArgs?: ItemProps }[];
  containerArgs?: ContainerProps;
};

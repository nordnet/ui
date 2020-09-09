import { AlignSelfProperty } from 'csstype';

export type ContainerProps = {
  container?: boolean;
  height?: number;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /** flexbox direction */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
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
};

export type ItemProps = {
  item?: boolean;
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: string;
  flex?: string;
  align?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  alignSelf?: AlignSelfProperty;
  size?: number | string;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
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

export type Props = MediaRelatedProps<FlexProps> & FlexProps & { children?: React.ReactNode };

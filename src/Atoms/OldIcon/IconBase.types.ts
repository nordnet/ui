import { ColorFn } from '../../common/Types/sharedTypes';

export type StyledIconBaseProps = {
  colorFn?: ColorFn | string;
  /** unit-based */
  size?: number;
  inline?: boolean;
};

export type StyledChildProps = {
  strokeColorFn?: ColorFn | string;
  backgroundColorFn?: ColorFn | string;
  /** @default 'fill' */
  cssAttribute?: string;
  /** if multiple attributes need to be set */
  cssAttributes?: string[];
};

export type BaseProps = {
  className?: string;
  title?: string;
  /** @deprecated use fill instead */
  color?: ColorFn | string;
  fill?: ColorFn | string;
  /** unit-based */
  size?: number;
  inline?: boolean;
  viewBox?: string;
};

export type WithBackgroundColor = {
  backgroundColor?: ColorFn | string;
} & BaseProps;

export type ChildProps = {
  stroke?: ColorFn | string;
} & BaseProps;

export type InternalProps = BaseProps & {
  children: React.ReactNode;
  ref?: React.Ref<SVGSVGElement>;
};

export { ColorFn };

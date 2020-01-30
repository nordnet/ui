import { Theme } from '../../theme/theme.types';

export type ColorFn = (t: Theme) => Values<Theme['color']>;
type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types

export type StyledIconBaseProps = {
  colorFn?: ColorFn | string;
  /** unit-based */
  size?: number;
  inline?: boolean;
};

export type StyledChildProps = {
  strokeColorFn?: ColorFn | string;
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

export type ChildProps = {
  stroke?: ColorFn | string;
} & BaseProps;

export type InternalProps = BaseProps & {
  children: React.ReactNode;
  ref?: React.Ref<SVGSVGElement>;
};

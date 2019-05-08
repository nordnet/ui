import { Theme } from '../../theme/theme.types';

type ColorFn = (t: Theme) => Values<Theme['color']>;
type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types

export type StyledIconBaseProps = {
  colorFn?: ColorFn;
  /** unit-based */
  size?: number;
  inline?: boolean;
};

export type BaseProps = {
  className?: string;
  title?: string;
  color?: ColorFn;
  /** unit-based */
  size?: number;
  inline?: boolean;
};

export type InternalProps = BaseProps & {
  children: React.ReactNode;
};

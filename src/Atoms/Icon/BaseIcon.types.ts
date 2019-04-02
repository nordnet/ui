import { Theme } from '../../theme/theme.types';

type ColorFn = (t: Theme) => Values<Theme['color']>;
type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types

export type BaseProps = {
  color?: ColorFn;
  children: React.ReactNode;
  /** unit-based */
  size?: number;
};

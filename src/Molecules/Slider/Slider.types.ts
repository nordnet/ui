import { Theme } from '../../theme/theme.types';

type ThemeProp = {
  theme: Theme;
};

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // c
type ColorFn = (t: Theme) => Values<Theme['color']>;

export type Props = {
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  value: number;
  leftColor?: ColorFn;
  rightColor?: ColorFn;
} & ThemeProp;

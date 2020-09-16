import { Theme } from '../../theme/theme.types';

type ThemeProp = {
  theme: Theme;
};

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // c
export type ColorFn = (t: Theme) => Values<Theme['color']>;
export type Variant = 'big' | 'small';

export type getLeftFn = (percentage: number, variant?: Variant) => string;

export type InternalProps = {
  $disabled?: boolean;
  $sliderColor?: ColorFn;
  $variant?: Variant;
};

export type Props = {
  disabled?: boolean;
  max: number;
  min: number;
  onChange: (v: number) => void;
  sliderColor?: ColorFn;
  step: number;
  value: number;
  variant?: Variant;
} & ThemeProp;

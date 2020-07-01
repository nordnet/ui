import { Theme } from '../../theme/theme.types';

type ThemeProp = {
  theme: Theme;
};

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // c
type ColorFn = (t: Theme) => Values<Theme['color']>;
type Variant = 'big' | 'small';

export type getLeftFn = (percentage: number, variant?: Variant) => string;

export type SliderTypes = {
  sliderColor: ColorFn;
  variant?: Variant;
};

export type InternalSliderTypes = {
  $variant?: Variant;
  $sliderColor: ColorFn;
};

export type Props = {
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  value: number;
} & SliderTypes &
  ThemeProp;

import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // c
export type ColorFn = (t: Theme) => Values<Theme['color']>;
export type Variant = 'big' | 'small';

export type InternalProps = {
  $disabled?: boolean;
  $sliderColor?: ColorFn;
  $variant?: Variant;
};

export type Props = {
  defaultValue?: number;
  disabled?: boolean;
  max: number;
  min: number;
  onChange?: (v: number) => void;
  sliderColor?: ColorFn;
  step: number;
  /** Makes component controlled */
  value?: number;
  variant?: Variant;
};

export type Component = React.FC<Props>;

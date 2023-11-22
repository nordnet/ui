import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // c
export type ColorFn = (t: Theme) => Values<Theme['color']>;
export type Variant = 'big' | 'small' | 'player';

export type InternalProps = {
  $disabled?: boolean;
  $sliderColor?: ColorFn;
  $variant?: Variant;
};

export type Props = {
  variant?: Variant;
  defaultHighValue?: number;
  defaultLowValue?: number;
  disabled?: boolean;
  formatter?: (value: number) => string;
  max: number;
  min: number;
  onChange?: (v: { low: number; high: number }) => void;
  readOnly?: boolean;
  showTooltip?: boolean;
  sliderColor?: ColorFn;
  step: number;
};

export type Component = React.FC<Props>;

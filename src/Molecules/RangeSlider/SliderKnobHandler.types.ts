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
  disabled?: boolean;
  formatter?: (value: number) => string;
  handleRef: React.Ref<HTMLDivElement>;
  max: number;
  min: number;
  onChange: (v: number) => void;
  readOnly?: boolean;
  showTooltip?: boolean;
  sliderColor?: ColorFn;
  step: number;
  trackerBoundingClientRect: { left: number; top: number; width: number; height: number };
  type?: string;
  value: number;
  variant?: Variant;
};

export type SliderKnobHandlerComponent = React.FC<Props>;

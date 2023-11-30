import { ColorFn, Variant } from '../Slider.types';

export type InternalProps = {
  $disabled?: boolean;
  $sliderColor?: ColorFn;
  $variant?: Variant;
};

export type Props = {
  disabled?: boolean;
  sliderColor?: ColorFn;
  startValue?: number;
  value: number;
  variant?: Variant;
};

export type Component = React.FC<Props>;

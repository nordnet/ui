import { ColorFn, Variant } from '../Slider.types';

export type InternalProps = {
  $sliderColor?: ColorFn;
  $variant?: Variant;
};

export type Props = {
  sliderColor?: ColorFn;
  value: number;
  variant?: Variant;
};

export type Component = React.FC<Props>;

import { Variant } from '../Slider.types';

export type InternalProps = {
  $disabled?: boolean;
  $variant?: Variant;
};

export type Props = {
  disabled?: boolean;
  variant?: Variant;
};

export type Component = React.FC<Props>;

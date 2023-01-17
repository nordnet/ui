import { Variant } from '../Slider.types';

export type InternalProps = {
  $disabled?: boolean;
  $variant?: Variant;
};

export type Props = {
  disabled?: boolean;
  variant?: Variant;
  children?: React.ReactNode;
  readOnly?: boolean;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
};

export type Component = React.FC<Props>;

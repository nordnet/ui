import { ColorFn, Variant } from '../../Slider/Slider.types';

export type InternalProps = {
  $disabled?: boolean;
  $variant?: Variant;
  $sliderColor?: ColorFn;
};

export type Props = {
  disabled?: boolean;
  variant?: Variant;
  children?: React.ReactNode;
  readOnly?: boolean;
  sliderColor?: ColorFn;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
  onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
  onTouchStart?: React.TouchEventHandler<HTMLDivElement>;
};

export type Component = React.FC<Props>;

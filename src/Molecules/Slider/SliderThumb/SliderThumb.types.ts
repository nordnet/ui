import { ColorFn, Variant } from '../Slider.types';

export type Props = {
  disabled?: boolean;
  max: number;
  min: number;
  onClick: React.MouseEventHandler;
  onKeyDown: React.KeyboardEventHandler;
  onMouseDown: React.MouseEventHandler;
  onMouseUp: React.MouseEventHandler;
  onTouchStart: React.TouchEventHandler;
  ref: React.Ref<HTMLDivElement>;
  sliderColor?: ColorFn;
  style: {};
  value: number;
  variant: Variant;
};

export type Component = React.FC<Props>;

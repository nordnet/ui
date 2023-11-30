import { Theme } from '../../theme/theme.types';
import { KnobType } from './constants';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // c
export type ColorFn = (t: Theme) => Values<Theme['color']>;
export type Variant = 'big' | 'small' | 'player';

export type Props = {
  disabled?: boolean;
  formatter?: (value: number) => string;
  handleRef: React.Ref<HTMLDivElement>;
  max: number;
  min: number;
  onChange: (v: number) => void;
  readOnly?: boolean;
  setActiveHandle: (handle: KnobType) => void;
  sliderColor?: ColorFn;
  step: number;
  trackRef: React.MutableRefObject<any>;
  knobType: KnobType;
  value: number;
  variant?: Variant;
  zIndex?: number;
};

export type SliderKnobHandlerComponent = React.FC<Props>;

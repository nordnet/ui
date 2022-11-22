import { Theme } from '../../theme/theme.types';

export type Placement = 'top' | 'right' | 'bottom' | 'left';
export type ColsTrimmerProps = {
  $hasIcon: boolean;
};

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
type ColorFn = (t: Theme) => Values<Theme['color']>;

type Step = {
  /** Replaces OldIcon, title and content props */
  body?: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  placement?: Placement;
  referenceElement: HTMLElement;
  title?: string;
  isCircular?: boolean;
  backdropPadding?: string | number;
  px?: string | number;
  py?: string | number;
};

export type Props = {
  onClose?: () => void;
  onDone?: () => void;
  onNext?: (newStep: number) => void;
  onPrev?: (newStep: number) => void;
  steps: Step[];
  prevText?: string;
  nextText?: string;
  doneText?: string;
  multiStepIndicatorText?: string;
  closeOnClickOutside?: boolean;
  barColor?: ColorFn;
};

export type Component = React.FC<Props>;

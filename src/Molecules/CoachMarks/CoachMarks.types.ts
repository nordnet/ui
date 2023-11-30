import { Theme } from '../../theme/theme.types';

export type Placement = 'top' | 'right' | 'bottom' | 'left' | 'auto';
export type ColsTrimmerProps = {
  $hasIcon: boolean;
};

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
type ColorFn = (t: Theme) => Values<Theme['color']>;

export type Step = {
  /** Replaces OldIcon, title and content props */
  body?: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  placement?: Placement;
  referenceElement?: HTMLElement;
  title?: string | React.ReactNode;
  isCircular?: boolean;
  backdropPadding?: string | number;
  px?: string | number;
  py?: string | number;
  prevText?: string;
  nextText?: string;
  nextDisabled?: boolean;
  hideNextButton?: boolean;
  hideDoneButton?: boolean;
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
  closeText?: string;
  multiStepIndicatorText?: string;
  closeOnClickOutside?: boolean;
  barColor?: ColorFn;
  bottomSheet?: boolean;
  closeButton?: boolean;
  hidePreviousButton?: boolean;
  feedbackWidgetOnPage?: boolean;
  overrideStep?: number;
  hideMultiStepIndicatorText?: boolean;
};

export type Component = React.FC<Props>;

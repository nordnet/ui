import { ColorFn } from '../../common/Types/sharedTypes';

export type Placement = 'top' | 'right' | 'bottom' | 'left' | 'auto';
export type ColsTrimmerProps = {
  $hasIcon: boolean;
};

export type Step = {
  /** Replaces OldIcon, title and content props */
  backdropPadding?: string | number;
  body?: React.ReactNode;
  content?: React.ReactNode;
  hideDoneButton?: boolean;
  hideNextButton?: boolean;
  icon?: React.ReactNode;
  isCircular?: boolean;
  nextDisabled?: boolean;
  nextText?: string;
  placement?: Placement;
  prevText?: string;
  px?: string | number;
  py?: string | number;
  referenceElement?: HTMLElement;
  title?: string | React.ReactNode;
};

export type Props = {
  barColor?: ColorFn;
  bottomSheet?: boolean;
  bottomSheetTitle?: string;
  closeButton?: boolean;
  closeOnClickOutside?: boolean;
  closeText?: string;
  doneText?: string;
  feedbackWidgetMode?: boolean;
  hideMultiStepIndicatorText?: boolean;
  hidePreviousButton?: boolean;
  multiStepIndicatorText?: string;
  nextText?: string;
  onClose?: () => void;
  onDone?: () => void;
  onNext?: (newStep: number) => void;
  onPrev?: (newStep: number) => void;
  overrideStep?: number;
  prevText?: string;
  steps: Step[];
};

export type Component = React.FC<Props>;

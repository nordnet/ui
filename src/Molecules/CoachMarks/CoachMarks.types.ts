export type Placement = 'top' | 'right' | 'bottom' | 'left';
export type ColsTrimmerProps = {
  $hasIcon: boolean;
};

type Step = {
  /** Replaces icon, title and content props */
  body?: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  placement?: Placement;
  referenceElement: HTMLElement;
  title?: string;
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
};

export type Component = React.FC<Props>;

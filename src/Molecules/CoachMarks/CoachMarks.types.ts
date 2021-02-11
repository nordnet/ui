import { Placement } from '../Bubble/Bubble.types';

type Target = string | HTMLElement;

export type GetElement = (element: Target) => HTMLElement;

export type ColsTrimmerProps = {
  $hasIcon: boolean;
};

type Step = {
  /** Replaces icon, title and content props */
  body?: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  position?: Placement;
  target: Target;
  title?: string;
};

export type Props = {
  onClose?: () => void;
  onDone?: () => void;
  onNext?: (newStep: number) => void;
  onPrev?: (newStep: number) => void;
  steps: Step[];
};

export type Component = React.FC<Props>;

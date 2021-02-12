import { Placement } from '../Bubble/Bubble.types';

export type ColsTrimmerProps = {
  $hasIcon: boolean;
};

type Step = {
  /** Replaces icon, title and content props */
  body?: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  position?: Placement;
  target: string | HTMLElement;
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

import { StepTopLevelProps } from './TopLevel/TopLevel.types';

export type StepBaseProps = {
  current?: boolean;
  done?: boolean;
  name: string;
  label: string;
};

export type MultiStepProgressProps = {
  onStepClick?: (stepName: string) => void;
  onSubStepClick?: (stepName: string) => void;
  steps?: StepTopLevelProps[];
  /** Used to label the component */
  title?: string;
  /** Visible on completed steps */
  titleDone?: string;
  /** Visible on non completed steps */
  titleNotDone?: string;
  mobileDrawerTitle?: string;
};

export type MultiStepProgressComponent = React.FC<MultiStepProgressProps>;

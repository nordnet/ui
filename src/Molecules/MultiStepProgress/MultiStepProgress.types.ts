import { StepTopLevelProps } from './SubLevel/SubLevel.types';

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
  closeDrawerOnStepClick?: boolean;
  sticky?: boolean;
};

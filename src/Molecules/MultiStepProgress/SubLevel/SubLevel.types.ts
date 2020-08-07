import { StepBaseProps } from '../MultiStepProgress.types';
import { A11yProps } from '../Status/Status.types';

export type StepSubLevelProps = StepBaseProps;

export type Props = {
  onStepClick?: (stepName: string) => void;
  steps: StepSubLevelProps[];
};

export type SubLevelComponent = React.FC<Props & A11yProps>;

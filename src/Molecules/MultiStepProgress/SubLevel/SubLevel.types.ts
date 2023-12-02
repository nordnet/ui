import { A11yProps, StepBaseProps } from '../shared.types';

export type StepSubLevelProps = StepBaseProps;

export type Props = {
  onStepClick?: (stepName: string) => void;
  steps: StepSubLevelProps[];
};

export type StepTopLevelProps = {
  steps?: StepSubLevelProps[];
} & StepBaseProps;

export type SubLevelComponent = React.FC<Props & A11yProps>;

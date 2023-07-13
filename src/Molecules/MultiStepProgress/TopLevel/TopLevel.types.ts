import { StepSubLevelProps } from '../SubLevel/SubLevel.types';
import { A11yProps } from '../Status/Status.types';
import { StepBaseProps } from '../MultiStepProgress.types';

export type InternalProps = {
  $current?: boolean;
  $isInDrawer?: boolean;
};

export type StepTopLevelProps = {
  steps?: StepSubLevelProps[];
} & StepBaseProps;

type Props = {
  drawerOpen?: boolean;
  onStepClick?: (stepName: string) => void;
  onSubStepClick?: (stepName: string) => void;
  onMobileStepClick?: () => void;
  steps?: StepTopLevelProps[];
  isInDrawer?: boolean;
};

export type ProgressLevelsComponent = React.FC<Props & A11yProps>;
export type TopLevelComponent = React.FC<Props & A11yProps>;

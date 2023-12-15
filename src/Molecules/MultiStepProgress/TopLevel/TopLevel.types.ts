import { A11yProps } from '../shared.types';
import { StepTopLevelProps } from '../SubLevel/SubLevel.types';

export type InternalProps = {
  $current?: boolean;
  $isInDrawer?: boolean;
};

export type Props = {
  drawerOpen?: boolean;
  onStepClick?: (stepName: string) => void;
  onSubStepClick?: (stepName: string) => void;
  onMobileStepClick?: () => void;
  steps?: StepTopLevelProps[];
  isInDrawer?: boolean;
} & A11yProps;

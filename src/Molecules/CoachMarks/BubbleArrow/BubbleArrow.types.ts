import { Placement } from '../CoachMarks.types';

export type Props = {
  bubblePlacement: Placement;
  ref?: React.Ref<HTMLDivElement>;
  style?: object;
  bottomSheet: boolean;
  noBorder?: boolean;
};

export type InternalProps = {
  $bubblePlacement: Placement;
  noBorder?: boolean;
};

export type Component = React.FC<Props>;

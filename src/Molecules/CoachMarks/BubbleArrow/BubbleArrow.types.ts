import { Placement } from '../CoachMarks.types';

export type Props = {
  bubblePlacement: Placement;
  ref?: React.Ref<HTMLDivElement>;
  style?: object;
  bottomSheet: boolean;
};

export type InternalProps = {
  $bubblePlacement: Placement;
  bottomSheet: boolean;
};

export type Component = React.FC<Props>;

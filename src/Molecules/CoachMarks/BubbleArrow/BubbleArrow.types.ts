import { Placement } from '../CoachMarks.types';

export type Props = {
  bubblePlacement: Placement;
  ref?: React.Ref<HTMLDivElement>;
  style?: object;
};

export type InternalProps = {
  $bubblePlacement: Placement;
};

export type Component = React.FC<Props>;

import { Placement } from '../Bubble.types';

export type Props = {
  bubblePlacement: Placement;
};

export type InternalProps = {
  $bubblePlacement: Placement;
};

export type Component = React.FC<Props>;

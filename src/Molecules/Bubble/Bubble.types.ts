export type Placement = 'top' | 'right' | 'bottom' | 'left';

export type Props = {
  children: React.ReactNode;
  className?: string;
  position: Placement;
  ref?: React.Ref<HTMLDivElement>;
  style?: object;
};

export type InternalArrowProps = {
  $bubblePlacement: Placement;
};

export type Component = React.FC<Props>;

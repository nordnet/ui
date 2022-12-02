export type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  forId?: string;
  hideLabel?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

export type Props = {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  style?: object;
};

export type Component = React.FC<Props>;

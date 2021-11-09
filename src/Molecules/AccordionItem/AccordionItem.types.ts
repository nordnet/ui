export type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children?: React.ReactNode;
  className?: string;
  /** Setting this prop makes the component controlled */
  expanded?: boolean;
  expandedInitial?: boolean;
  title: string | React.ReactNode;
  onClick?: React.MouseEventHandler;
  onToggle?: (expanded: boolean) => void;
  ref?: React.Ref<HTMLButtonElement>;
  withChevron?: boolean;
  disableBackgroundColor?: boolean;
  disabled?: boolean;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
};

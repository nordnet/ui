import { Types } from '../../Atoms/Typography/Typography.types';

export type Props = {
  as?: any;
  children?: React.ReactNode;
  className?: string;
  /** Setting this prop makes the component controlled */
  expanded?: boolean;
  expandedInitial?: boolean;
  title: string | React.ReactNode;
  label?: string | React.ReactNode;
  onClick?: React.MouseEventHandler;
  onToggle?: (expanded: boolean) => void;
  ref?: React.Ref<HTMLButtonElement>;
  withChevron?: boolean;
  disableBackgroundColor?: boolean;
  disableFocusOutline?: boolean;
  disabled?: boolean;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  leftBadgeIcon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  type?: Types;
};

export type ItemProps = {
  hasFocus: boolean;
  disableBackgroundColor?: boolean;
  disableFocusOutline?: boolean;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
};

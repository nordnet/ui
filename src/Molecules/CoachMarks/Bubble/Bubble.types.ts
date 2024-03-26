import { ColorFn } from '../../../common/Types/sharedTypes';

export type Props = {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  style?: object;
  barColor?: ColorFn;
  feedbackWidgetMode?: boolean;
};

export type CardProps = {
  barColor?: ColorFn;
  bottomSheet?: boolean;
  feedbackWidgetMode?: boolean;
};

export type Component = React.FC<Props>;

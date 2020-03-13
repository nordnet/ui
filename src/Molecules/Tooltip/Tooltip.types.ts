import { TooltipProps as ReachProps } from '@reach/tooltip';

export type Props = {
  className?: string;
  /** @default bottom */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /** Adjusts z-index when used inside Modal */
  inModal?: boolean;
} & ReachProps;

export type TooltipComponent = React.FC<Props>;

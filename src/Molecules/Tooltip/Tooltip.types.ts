import { TooltipPopupProps } from '@reach/tooltip';

type ReachProps = Pick<TooltipPopupProps, 'label'> & Pick<TooltipPopupProps, 'ariaLabel'>;

export type Props = {
  className?: string;
  children?: React.ReactNode;
  /** @default bottom */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /** Adjusts z-index when used inside Modal */
  inModal?: boolean;
  /** max-width in units */
  maxWidth?: number;
} & ReachProps;

export type TooltipComponent = React.FC<Props>;

import { TooltipProps } from '@reach/tooltip';

export type Props = {
  className?: string;
  /** @default auto */
  position?: 'top' | 'right' | 'bottom' | 'left' | 'auto';
} & TooltipProps;

export type TooltipComponent = React.FC<Props>;

export type InternalArrowProps = {
  left: number;
  top: number;
  direction: 'up' | 'right' | 'down' | 'left';
};

export type Props = {
  triggerRect: ClientRect;
  tooltipPosition: 'top' | 'right' | 'bottom' | 'left';
  /** Adjusts z-index when used inside Modal */
  inModal?: boolean;
};

export type TriangleComponent = React.FC<Props>;

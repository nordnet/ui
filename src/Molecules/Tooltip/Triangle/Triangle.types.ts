export type InternalArrowProps = {
  left: number;
  top: number;
  direction: 'up' | 'right' | 'down' | 'left';
  foregroundTooltip?: boolean;
};

export type Props = {
  triggerRect: ClientRect;
  tooltipPosition: 'top' | 'right' | 'bottom' | 'left';
  foregroundTooltip?: boolean;
};

export type TriangleComponent = React.FC<Props>;

export type InternalProps = {
  left: number;
  top: number;
  arrowDirection: 'up' | 'right' | 'down' | 'left';
};

export type Props = {
  triggerRect: ClientRect;
  toolTipPosition: 'top' | 'right' | 'bottom' | 'left';
};

export type TriangleComponent = React.FC<Props>;

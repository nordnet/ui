import { Props as TooltipProps } from '../Tooltip.types';

export type InternalProps = {
  left: number;
  top: number;
};

export type Props = {
  triggerRect: ClientRect;
  position: TooltipProps['positoin'];
};

export type TriangleComponent = React.FC<Props>;

import { Props as TooltipProps } from '../Tooltip/Tooltip.types';

export type Props = { as?: keyof JSX.IntrinsicElements | React.ComponentType<any> } & TooltipProps;

export type TruncateWithTooltipComponent = React.FC<Props>;

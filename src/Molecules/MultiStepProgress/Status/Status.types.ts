import { A11yProps, StepBaseProps } from '../shared.types';

type InheritedProps = Pick<StepBaseProps, 'current' | 'done'>;

export type InternalProps = {
  $current?: boolean;
};

type Props = { noIcons?: boolean; number?: number } & InheritedProps & A11yProps;

export type StatusComponent = React.FC<Props>;

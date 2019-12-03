import { Theme } from '../../../theme/theme.types';

type Colors = Theme['color'];
type ColorFn = (t: Theme) => Colors['cta'] | Colors['negative'];

export type ButtonContentProps = {
  loading?: boolean;
  variant: 'primary' | 'secondary' | 'neutral';
  size: 's' | 'm' | 'l';
  colorFn?: ColorFn;
};

export type ButtonContentComponent = React.FC<ButtonContentProps>;

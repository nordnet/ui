import { Theme } from '../../../../theme/theme.types';

type Colors = Theme['color'];
type ColorFn = (t: Theme) => Colors['cta'] | Colors['negative'];

export type ButtonContentProps = {
  colorFn?: ColorFn;
  /** @default true */
  delayLoadingSpinnerAnimation?: boolean;
  icon?: React.ReactNode;
  /** @default left */
  iconPlacement?: 'left' | 'right';
  loading?: boolean;
  size: 's' | 'm' | 'l';
  /** @default primary */
  variant: 'primary' | 'secondary' | 'neutral';
  children?: React.ReactNode;
};

export type ButtonContentComponent = React.FC<ButtonContentProps>;

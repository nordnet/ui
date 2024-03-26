import { Theme } from '../../theme/theme.types';
import { ColorFn } from '../../common/Types/sharedTypes';

export type Props = {
  /** @default 4 units */
  size?: number;
  color?: ColorFn;
  /** Globally unique id for the spinner */
  id: string;
  delay?: boolean | number;
  fallback?: React.ReactElement;
};

export type PropsWithTheme = Props & {
  theme: Theme;
};

export { ColorFn };

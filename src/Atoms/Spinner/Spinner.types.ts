import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
type ColorFn = (t: Theme) => Values<Theme['color']>;

export type Props = {
  /** @default 4 units */
  size?: number;
  color?: ColorFn;
  /** Globally unique id for the spinner */
  id: string;
  delay?: boolean | number;
};

export type PropsWithTheme = Props & {
  theme: Theme;
};

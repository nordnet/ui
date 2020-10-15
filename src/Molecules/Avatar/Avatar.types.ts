import { Theme } from '../../theme/theme.types';

export type ColorFn = (t: Theme) => Values<Theme['color']>;
type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types

export type Props = {
  size?: 's' | 'm';
  children: React.ReactText | React.ReactNode;
  backgroundColor?: ColorFn;
};

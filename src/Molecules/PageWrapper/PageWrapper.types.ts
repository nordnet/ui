import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
type ColorFn = (c: Theme) => Values<Theme['color']>;

export type Props = {
  children: React.ReactNode;
  background?: ColorFn;
};

export type OuterProps = {
  background?: string;
};

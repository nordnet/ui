import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
type ColorFn = (t: Theme) => Values<Theme['color']>;

type AllowedTags = 'div' | 'article' | 'section';

export type Props = {
  as?: AllowedTags;
  children: React.ReactNode;
  className?: string;
  barColor?: ColorFn;
};

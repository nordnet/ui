import { Theme } from '../../theme/theme.types';

export type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types

export type ColorFn = (c: Theme) => Values<Theme['color']>;

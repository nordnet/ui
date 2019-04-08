import React from 'react';
import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
type ColorFn = (t: Theme) => Values<Theme['color']>;

export type Types = 'primary' | 'secondary' | 'tertiary' | 'title1' | 'title3';
export type Weight = 'regular' | 'bold' | 'extrabold';

export type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  colorOrColorFn?: ColorFn | 'inherit';
  weight?: Weight;
  type?: Types;
};

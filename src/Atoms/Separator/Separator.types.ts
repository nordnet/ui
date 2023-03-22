import React from 'react';
import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
type ColorFn = (t: Theme) => Values<Theme['color']>;

export type Props = {
  className?: string;
  color?: ColorFn;
  fullWidth?: boolean;
  vertical?: boolean;
};

export type StyledProps = {
  colorFunction?: ColorFn;
  vertical?: boolean;
};

export type SeparatorComponent = React.FC<Props>;

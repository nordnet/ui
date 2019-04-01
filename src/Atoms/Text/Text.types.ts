import React from 'react';
import { Theme } from '../../theme/theme.types';

export type StyledTextProps = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  sizeMobile: number;
  sizeDesktop: number;
  colorFn?: ColorFn;
  weight: Weight;
};
type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
type ColorFn = (t: Theme) => Values<Theme['color']>;

export type BaseProps = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children: React.ReactNode;
  color?: ColorFn;
};

export type Weight = 'regular' | 'bold' | 'extrabold';
export type BasePropsWithWeight = BaseProps & { weight?: Weight };
export type TextComponent = {
  // /** (46, 48) */
  // Hero: React.ComponentType<BaseProps>;
  /** (30, 32) */
  Title1: React.ComponentType<BaseProps>;
  // /** (22, 24) */
  // Title2: React.ComponentType<BaseProps>;
  /** (18, 20) */
  Title3: React.ComponentType<BaseProps>;
  /** (14, 16) */
  Primary: React.ComponentType<BasePropsWithWeight>;
  /** (12, 14) */
  Secondary: React.ComponentType<BasePropsWithWeight>;
  /** (10, 12) */
  Tertiary: React.ComponentType<BasePropsWithWeight>;
  // /** (10, 10) */
  // Caption: React.ComponentType<BaseProps>;
};

import React from 'react';
import { Theme } from '../../theme/theme.types';

export type StyledTextProps = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  sizeMobile: number;
  sizeDesktop: number;
  colorFn?: ColorFn;
  weight: Weight;
};
type ColorFn = (t: Theme) => Theme['color'][keyof Theme['color']];

export type BaseProps = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children: React.ReactText | React.ReactText[];
  color?: ColorFn;
};

type Weight = 'regular' | 'bold' | 'extrabold';
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

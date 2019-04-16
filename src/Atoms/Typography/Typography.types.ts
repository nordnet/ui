import React from 'react';
import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types
type ColorFn = (t: Theme) => Values<Theme['color']>;

export type Types =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'caption'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'hero';

type PrimaryProps = {
  /** @default 'regular' */
  weight?: 'regular' | 'bold' | 'extrabold';
  type?: 'primary';
};
type SecondaryProps = {
  /** @default 'regular' */
  weight?: 'regular' | 'bold';
  type: 'secondary';
};
type TertiaryProps = {
  /** @default 'regular' */
  weight?: 'regular' | 'bold';
  type: 'tertiary';
};
type CaptionProps = {
  /** @default 'regular' */
  weight?: 'regular' | 'bold';
  type: 'caption';
};
type TitleProps = {
  /** @default 'extrabold' */
  weight?: 'regular' | 'bold' | 'extrabold';
  type: 'title1' | 'title2' | 'title3';
};
type HeroProps = {
  /** @default 'extrabold' */
  weight?: 'bold' | 'extrabold';
  type: 'hero';
};

export type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  color?: 'inherit' | ColorFn;
  weight?: 'regular' | 'bold' | 'extrabold';
  type?: Types;
  /**
   * primary has font-weight: regular, font-size: 14px (mobile) and 16px (desktop)
   * secondary has font-weight: regular, font-size: 12px (mobile) and 14px (desktop)
   * tertiary has font-weight: regular, font-size: 10px (mobile) and 12px (desktop)
   * title1 has font-weight: extrabold, font-size: 30px (mobile) and 32px (desktop)
   * title3 has font-weight: extrabold, font-size: 18px (mobile) and 20px (desktop)
   */
  children: React.ReactNode;
};

export type ProperProps = Props &
  (PrimaryProps | SecondaryProps | TertiaryProps | CaptionProps | TitleProps | HeroProps);

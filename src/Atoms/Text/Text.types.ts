import React from 'react';
import { Theme } from '../../theme';

export type BaseProps = {
  as?: React.Component;
  children: React.ReactText;
  color?: (t: Theme) => keyof Theme['color'];
};

type Boldness = 'regular' | 'bold' | 'extrabold';

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
  Primary: React.ComponentType<BaseProps & { bold?: Boldness }>;
  /** (12, 14) */
  Secondary: React.ComponentType<BaseProps & { bold?: Boldness }>;
  /** (10, 12) */
  Tertiary: React.ComponentType<BaseProps & { bold?: Boldness }>;
  // /** (10, 10) */
  // Caption: React.ComponentType<BaseProps>;
};

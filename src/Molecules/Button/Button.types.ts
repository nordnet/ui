import React from 'react';
import { LinkProps as ReactRouterDomLinkProps } from 'react-router-dom';
import { Theme } from '../../theme/theme.types';

type Colors = Theme['color'];
type ColorFn = (t: Theme) => Colors['cta'] | Colors['negative'];
export type ButtonProps = {
  /** @default primary */
  variant?: 'primary' | 'secondary' | 'neutral';
  /** @default m */
  size?: 's' | 'm' | 'l';
  /** @default false */
  fullWidth?: boolean;
  children: React.ReactChild | React.ReactChild[];
  color?: ColorFn;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** @default button */
  type?: 'button' | 'reset' | 'submit';
  to?: ReactRouterDomLinkProps['to'];
  rel?: string;
  colorFn?: ColorFn;
};

export type ButtonComponent = React.FC<ButtonProps>;

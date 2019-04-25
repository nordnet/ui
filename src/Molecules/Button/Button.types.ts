import React from 'react';
import { LinkProps as ReactRouterDomLinkProps } from 'react-router-dom';

export type SharedProps = {
  /** @default primary */
  variant?: 'primary' | 'secondary';
  /** @default m */
  size?: 's' | 'm' | 'l';
  /** @default false */
  fullWidth?: boolean;
  children: React.ReactChild | React.ReactChild[];
};

export type ButtonProps = {
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** @default button */
  type?: 'button' | 'reset' | 'submit';
  to?: never;
} & SharedProps;

export type LinkProps = {
  onClick?: (e: React.MouseEvent) => void;
  to: ReactRouterDomLinkProps['to'];
  type?: never;
  disabled?: never;
} & SharedProps;

export type ButtonComponent = React.FC<ButtonProps | LinkProps>;

import React from 'react';
import { LinkProps as ReactRouterDomLinkProps } from 'react-router-dom';

export type SharedProps = {
  children: React.ReactChild | React.ReactChild[];
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
};

export type LinkProps = {
  /** @default _self */
  target?: '_blank';
  to: ReactRouterDomLinkProps['to'];
  rel?: string;
  disabled?: never;
} & SharedProps;

export type ButtonProps = {
  /** @default _self */
  target?: never;
  to?: never;
  rel?: never;
  disabled?: boolean;
} & SharedProps;

export type LinkComponent = React.FunctionComponent<LinkProps | ButtonProps>;

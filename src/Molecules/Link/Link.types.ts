import React from 'react';
import { TrackingProps } from '../../common/tracking.types';

export type LinkProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  display?: 'inline' | 'block' | 'inline-block' | 'flex' | 'inline-flex';
  color?: 'blue' | 'black' | 'inherit';
  underlined?: boolean;
  /** @default _self */
  target?: '_blank' | '_self';
  to?: any; // TODO define this, used to be LinkProps.to from 'react-router-dom' types.
  external?: boolean;
  /** @deprecated use fullServerRedirect instead */
  cms?: boolean;
  fullServerRedirect?: boolean;
  rel?: string;
  disabled?: boolean;
  as?: any;
  ref?: React.Ref<any>;
} & Pick<
  React.DOMAttributes<HTMLAnchorElement>,
  'onMouseEnter' | 'onMouseLeave' | 'onMouseOver' | 'onFocus'
> &
  TrackingProps;

export type LinkComponent = React.FunctionComponent<LinkProps>;

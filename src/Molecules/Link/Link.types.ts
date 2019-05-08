import React from 'react';
import { LinkProps } from 'react-router-dom';

export type Props = {
  children: React.ReactChild | React.ReactChild[];
  onClick?: (e: React.MouseEvent) => void;
  /** @default _self */
  target?: '_blank';
  to: LinkProps['to'];
  className?: string;
  rel?: string;
};

export type LinkComponent = React.FunctionComponent<Props>;

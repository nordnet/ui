import React from 'react';
import { LinkProps } from 'react-router-dom';

export type Props = {
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  to: LinkProps['to'];
  /** @default _self */
  target?: '_blank';
  children: React.ReactChild | React.ReactChild[];
};

export type LinkComponent = React.FunctionComponent<Props>;

import React from 'react';

export type Props = {
  disabled?: boolean;
  /** @default primary */
  variant?: 'primary' | 'secondary';
  /** @default m */
  size?: 's' | 'm' | 'l';
  children: React.ReactChild | React.ReactChild[];
  onClick: (e: React.MouseEvent) => void;
  /** @default button */
  type?: 'button' | 'reset' | 'submit';
  fullWidth?: boolean;
};

export type ButtonComponent = React.FunctionComponent<Props>;

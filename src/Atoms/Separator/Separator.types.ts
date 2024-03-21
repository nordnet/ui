import React from 'react';
import { ColorFn } from '../../common/Types/sharedTypes';

export type Props = {
  className?: string;
  color?: ColorFn;
  fullWidth?: boolean;
  vertical?: boolean;
};

export type StyledProps = {
  colorFunction?: ColorFn;
  vertical?: boolean;
};

export type SeparatorComponent = React.FC<Props>;

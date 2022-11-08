import React, { ReactNode } from 'react';

export type Props = {
  as?: any;
  className?: string;
  children: ReactNode;
} & Omit<React.HTMLProps<HTMLElement>, 'as'>;

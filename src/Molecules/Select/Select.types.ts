import React from 'react';
import { SelectProps } from '@mui/base';

export type Props = {
  children: React.ReactNode;
  hasError?: boolean;
  placeholder?: string;
  size?: 's' | 'm';
  /**
   * required if select lives in a form
   */
  name?: string;
  /**
   * width in units
   */
  width?: number;
  value?: string | string[];
  valueDisplay?: React.ReactNode;
  trigger?: React.ReactNode;
} & SelectProps<string, boolean>;
// TODO: will we really expose all props from SelectProps?

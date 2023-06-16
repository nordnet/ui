import { SelectProps } from '@mui/base';
import React from 'react';

export type Props = {
  children: React.ReactNode;
  placeholder?: string;
  size?: 's' | 'm';
  hasError?: boolean;
  selectedValue?: React.ReactNode;
  /**
   * width in units
   */
  width?: number;
  footer?: React.ReactNode;
} & SelectProps<string | string[], boolean>;

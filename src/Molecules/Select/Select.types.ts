import { SelectProps } from '@mui/base';
import React from 'react';

export type Props = {
  children: React.ReactNode;
  hasError?: boolean;
  listBoxFooter?: React.ReactNode;
  listBoxHeader?: React.ReactNode;
  placeholder?: string;
  selectedValue?: React.ReactNode;
  size?: 's' | 'm';
  /**
   * width in units
   */
  width?: number;
} & SelectProps<string | string[], boolean>;

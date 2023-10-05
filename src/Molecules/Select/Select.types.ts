import { SelectProps } from '@mui/base';
import React from 'react';

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
  slots?: {
    trigger?: React.ComponentType<any>;
    valueDisplay?: React.ComponentType<any>;
  };
  slotProps?: {
    trigger?: any;
    valueDisplay?: any;
  };
} & SelectProps<string | string[], boolean>;
// TODO: will we really expose all props from SelectProps?

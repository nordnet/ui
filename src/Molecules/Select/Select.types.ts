import { SelectProps } from '@mui/base';
import React from 'react';

export type Props = {
  children: React.ReactNode;
  hasError?: boolean;
  listBoxFooter?: React.ReactNode;
  listBoxHeader?: React.ReactNode;
  placeholder?: string;
  valueDisplay?: React.ReactNode;
  size?: 's' | 'm';
  /**
   * required if select lives in a form
   */
  name?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /**
   * width in units
   */
  width?: number;
  value?: string | string[];
  slots?: {
    trigger?: React.ComponentType<any>;
  };
  slotProps?: {
    trigger?: any;
  };
} & SelectProps<string | string[], boolean>;
// TODO: will we really expose all props from SelectProps?

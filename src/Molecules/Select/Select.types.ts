import React from 'react';
import { SelectProps } from '@mui/base';

type MuiProps = Pick<
  SelectProps<string, boolean>,
  'disabled' | 'multiple' | 'onChange' | 'defaultValue'
>;

export type Props = {
  children: React.ReactNode;
  dataTestId?: string;
  fullWidth?: boolean;
  hasError?: boolean;
  id?: string;
  /**
   * required if select lives in a form
   */
  name?: string;
  placeholder?: string;
  size?: 's' | 'm';
  /**
   * width in units
   */
  width?: number;
  value?: string | string[];
  valueDisplay?: React.ReactNode;
  trigger?: React.ReactNode;
} & MuiProps;

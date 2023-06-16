import { SelectProps } from '@mui/base';

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
  onOpenChange?: () => void;
} & SelectProps<string | string[], boolean>;

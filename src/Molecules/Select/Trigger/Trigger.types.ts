import { Props as SelectProps } from '../Select.types';

export type Props = {
  children: React.ReactNode;
  hasValue: boolean;
  ref?: React.ForwardedRef<HTMLButtonElement>;
} & Pick<SelectProps, 'size' | 'hasError'>;

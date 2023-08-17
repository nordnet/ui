import { Props as SelectProps } from '../Select.types';

export type Props = { children: React.ReactNode; hasValue: boolean } & Pick<
  SelectProps,
  'size' | 'hasError'
>;

import { Props as SelectProps } from '../Select.types';

export type Props = { children: React.ReactNode } & Pick<SelectProps, 'size' | 'hasError'>;

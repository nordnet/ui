import { Theme } from '../../../theme/theme.types';
import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';

export type Density = 's' | 'm' | 'l';

export type FontSize = 's' | 'm' | undefined;

export type MediaRelatedProps<T> = { [screenSize in keyof Theme['breakpoints']]?: Partial<T> };

export type FlexPropsType = Pick<
  FlexboxProps,
  | 'align'
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
  | 'basis'
  | 'container'
  | 'direction'
  | 'flex'
  | 'grow'
  | 'gap'
  | 'gutter'
  | 'height'
  | 'item'
  | 'justifyContent'
  | 'lg'
  | 'md'
  | 'order'
  | 'shrink'
  | 'size'
  | 'sm'
  | 'wrap'
  | 'hidden'
  | 'xl'
  | 'className'
>;

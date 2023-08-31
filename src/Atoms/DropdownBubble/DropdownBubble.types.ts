import { ColorFn } from 'common/Types';

export type Props = {
  /**
   * @default 'right'
   */
  position?: 'left' | 'center' | 'right';
  /**
   * @default 'bottom'
   */
  placement?: 'bottom' | 'top';
  /**
   * FIXME: add props definition from
   * styled-components for all css-related props
   */
  maxHeight?: string;
  children?: React.ReactNode;
  backgroundColor?: ColorFn;
  borderColor?: ColorFn;
  textColor?: ColorFn;
  /**
   * for use when you want light mode tooltip colors in dark mode and opposite
   */
  invertedColors?: boolean;
};

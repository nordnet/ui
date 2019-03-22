import { CSSGridProps } from './CssGrid/CssGrid.types';
import { FlexboxGridProps } from './Flexbox/Flexbox.types';

export type PixelOrUnit = number | string;

export type GridProps = {
  // flag? css-grid or flexbox
  /** investingate how to switch type of props based on this flag */

  /** @default false
   * True means css-grid
   */
  twoDimension: boolean;

  height?: string;
} & CSSGridProps &
  FlexboxGridProps;

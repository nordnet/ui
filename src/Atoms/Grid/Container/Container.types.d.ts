import { CSSGridProps } from './CssGrid/CssGridContainer.types';
import { FlexboxGridProps } from './Flexbox/FlexboxContainer.types';

export type PixelOrUnit = number | string;

export type Props = {
  // flag? css-grid or flexbox
  /** investingate how to switch type of props based on this flag */

  /** @default false
   * True means css-grid
   */
  twoDimension: boolean;

  height?: string;
} & CSSGridProps &
  FlexboxGridProps;

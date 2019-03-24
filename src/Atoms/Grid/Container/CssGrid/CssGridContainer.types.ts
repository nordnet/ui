import { PixelOrUnit } from '../Container.types';

type Areas = AreasRow[];
type AreasRow = AreaName[];
export type AreaName = string;

export type Props = {
  as?: React.ElementType;
  children: React.ReactNode;
  twoDimension: true;
  height?: string;

  /** 
   * @example const x:Areas = [
          ['header', 'header', 'header'],
          ['left', 'content', 'side'],
          ['left', 'header', 'header'],
      ]
      */
  areas: Areas;

  /** maybe provide gap and css-grid only for page level
   * dont add px for string
   */
  gutter?: PixelOrUnit | { row: PixelOrUnit; col: PixelOrUnit };

  /** think of a default value (to fix IE11 issue https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/) */
  areaSizes?: Record<AreaName, { row?: PixelOrUnit; col: PixelOrUnit }>;
};

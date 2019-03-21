type Areas = AreasRow[];
type AreasRow = Area[];
/** Name for the area */
export type Area = string;

export type GridProps = {
  // flag? css-grid or flexbox
  /** investingate how to switch type of props based on this flag */

  /** @default false
   * True means css-grid
   */
  twoDimension: boolean;
} & CSSGridProps &
  FlexboxGridProps;

type PixelOrUnit = number | string;
type CSSGridProps = {
  /** investigate how to enforce same array length 
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
  gap?: PixelOrUnit | { row: PixelOrUnit; col: PixelOrUnit };

  /** think of a default value (to fix IE11 issue https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/) */
  areaSizes: Record<Area, { row?: PixelOrUnit; col: PixelOrUnit }>;
};

type FlexboxGridProps = {
  /** flexbox direction */
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  // @todo add all flex container props https://css-tricks.com/snippets/css/a-guide-to-flexbox/
};

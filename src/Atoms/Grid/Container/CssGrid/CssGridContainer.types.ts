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
  templateRows?: string;
} & (
  | {
      gutter: PixelOrUnit | { row: PixelOrUnit; col: PixelOrUnit };
      templateColumns: string;
    }
  | {
      gutter: never;
      templateColumns?: string;
    });

import { Area } from '../Grid.types';

export type CellProps = CssGridCellProps | FlexCellProps;
type CssGridCellProps = {
  area: Area;
};

type FlexCellProps = {
  // @todo add all flex items props https://css-tricks.com/snippets/css/a-guide-to-flexbox/
};

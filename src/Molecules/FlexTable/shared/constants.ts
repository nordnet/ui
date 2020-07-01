import { FlexPropsType } from './ColumnProvider/ColumnProvider.types';

export const SORT_ORDER_NONE = 'none';
export const SORT_ORDER_ASCENDING = 'ascending';
export const SORT_ORDER_DESCENDING = 'descending';

export const COLUMN_ID_EXPAND = 'column-expand';

export const ICON_COLUMN_DEFAULT_FLEX_PROPS: Pick<FlexPropsType, 'justifyContent' | 'flex'> = {
  justifyContent: 'flex-end',
  // TODO: use theme spacing
  flex: `0 20px`,
};

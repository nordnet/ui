import { theme } from '../../..';
import { FlexPropsType } from './ColumnProvider/ColumnProvider.types';

export const DENSITY_PADDING_SMALL = 0;
export const DENSITY_PADDING_MEDIUM = theme.spacing.unit(1);
export const DENSITY_PADDING_LARGE = theme.spacing.unit(2);

export const SORT_ORDER_NONE = 'none';
export const SORT_ORDER_ASCENDING = 'ascending';
export const SORT_ORDER_DESCENDING = 'descending';

export const COLUMN_ID_EXPAND = 'column-expand';

export const ICON_COLUMN_DEFAULT_FLEX_PROPS: Pick<FlexPropsType, 'justifyContent' | 'flex'> = {
  justifyContent: 'flex-end',
  flex: `0 ${theme.spacing.unit(5)}px`,
};

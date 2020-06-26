import { useContext, useCallback } from 'react';
import { ColumnDataContext, ColumnDispatchContext, ColumnsLayoutContext } from './ColumnProvider';
import {
  ColumnsDispatch,
  ColumnsDataState,
  ColumnDispatch,
  ColumnDataTypes,
  ColumnsLayoutState,
  ColumnLayoutTypes,
} from './ColumnProvider.types';

const useColumnDataProvider = (): [ColumnsDataState, ColumnsDispatch] => {
  const data = useContext(ColumnDataContext);
  const dispatch = useContext(ColumnDispatchContext);

  if (data === undefined || dispatch === undefined) {
    throw Error('Using useColumnProvider outside of the Table element');
  }

  return [data, dispatch];
};

// TODO: Set up types for column state and column dispatch which is specific to a columnId
export const useColumnData = (columnId: string): [ColumnDataTypes, ColumnDispatch] => {
  const [data, dispatch] = useColumnDataProvider();

  const columnData: ColumnDataTypes = data[columnId];
  const columnDispatch: ColumnDispatch = useCallback(
    action => {
      dispatch({ ...action, columnId });
    },
    [columnId, dispatch],
  );

  return [columnData, columnDispatch];
};

const useColumnLayoutProvider = (): [ColumnsLayoutState, ColumnsDispatch] => {
  const layout = useContext(ColumnsLayoutContext);
  const dispatch = useContext(ColumnDispatchContext);

  if (layout === undefined || dispatch === undefined) {
    throw Error('Using useColumnProvider outside of the Table element');
  }

  return [layout, dispatch];
};

// TODO: Set up types for column state and column dispatch which is specific to a columnId
export const useColumnLayout = (columnId: string): [ColumnLayoutTypes, ColumnDispatch] => {
  const [layout, dispatch] = useColumnLayoutProvider();

  const columnLayout = layout[columnId];
  const columnDispatch: ColumnDispatch = useCallback(
    action => {
      dispatch({ ...action, columnId });
    },
    [columnId, dispatch],
  );

  return [columnLayout, columnDispatch];
};

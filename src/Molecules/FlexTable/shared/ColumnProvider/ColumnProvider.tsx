import React, { useReducer } from 'react';
import * as R from 'ramda';
import {
  ColumnActions,
  ColumnsState,
  ColumnsDataState,
  ColumnsDispatch,
  ColumnsLayoutState,
} from './ColumnProvider.types';
import { SORT_ORDER_NONE } from '../constants';

export const ACTION_SET_FLEX_PROPS = 'SET_FLEX_PROPS';
export const ACTION_SET_SORTING = 'SET_SORTING';
export const ACTION_SET_INITIAL_SORTING = 'SET_INITIAL_SORTING';

export const ColumnDataContext = React.createContext<ColumnsDataState | undefined>(undefined);
export const ColumnDispatchContext = React.createContext<ColumnsDispatch | undefined>(undefined);
export const ColumnsLayoutContext = React.createContext<ColumnsLayoutState | undefined>(undefined);

// We need to set the rest of the sorting to none when sorting a new header
const setRestOfSortingState = (data: ColumnsDataState): ColumnsDataState =>
  R.map(columnData => {
    // Null sortOrder means that it's not sortable
    if (columnData.sortOrder === null) {
      return { ...columnData, sortOrder: null };
    }

    return {
      ...columnData,
      sortOrder: columnData.controlledSort ? columnData.sortOrder : SORT_ORDER_NONE, // Keep the sort order if it's controlled
    };
  }, data);

const columnReducer = (state: ColumnsState, action: ColumnActions): ColumnsState => {
  switch (action.type) {
    case ACTION_SET_FLEX_PROPS:
      return {
        ...state,
        layout: {
          ...state.layout,
          [action.columnId]: { ...state.layout[action.columnId], flexProps: action.flexProps },
        },
      };

    case ACTION_SET_INITIAL_SORTING:
      return {
        ...state,
        data: {
          ...state.data,
          [action.columnId]: {
            ...state[action.columnId],
            controlledSort: action.controlledSort,
            sortOrder: action.sortOrder,
          },
        },
      };

    case ACTION_SET_SORTING:
      return {
        ...state,
        data: {
          ...setRestOfSortingState(state.data),
          [action.columnId]: {
            ...state.data[action.columnId],
            sortOrder: action.sortOrder,
          },
        },
      };

    default: {
      throw new Error('Unhandled action type, please check your action');
    }
  }
};

export const ColumnProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(columnReducer, { data: {}, layout: {} });

  return (
    <ColumnDataContext.Provider value={state.data}>
      <ColumnsLayoutContext.Provider value={state.layout}>
        <ColumnDispatchContext.Provider value={dispatch}>{children}</ColumnDispatchContext.Provider>
      </ColumnsLayoutContext.Provider>
    </ColumnDataContext.Provider>
  );
};

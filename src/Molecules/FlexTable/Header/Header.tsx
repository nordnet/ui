import React, { useEffect, useLayoutEffect } from 'react';
import * as R from 'ramda';
import { HeaderComponent } from './Header.types';
import { SortOrder } from './HeaderContent/HeaderContent.types';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { SORT_ORDER_ASCENDING, SORT_ORDER_DESCENDING, SORT_ORDER_NONE } from '../shared/constants';
import {
  useFlexCellProps,
  useColumnData,
  ACTION_SET_FLEX_PROPS,
  ACTION_SET_SORTING,
  ACTION_SET_INITIAL_SORTING,
  useColumnLayout,
} from '../shared/ColumnProvider';
import { HeaderContent, TextWrapper, SortIcon, SortButton } from './HeaderContent';

const SORT_ORDERS: SortOrder[] = [SORT_ORDER_NONE, SORT_ORDER_ASCENDING, SORT_ORDER_DESCENDING];

const getNextSortOrder = (currentOrder: SortOrder): SortOrder => {
  const currentIndex = SORT_ORDERS.indexOf(currentOrder);
  const nextIndex = (currentIndex + 1) % SORT_ORDERS.length;
  return SORT_ORDERS[nextIndex];
};

const getSortOrder = (
  stateSortOrder: SortOrder | undefined,
  sortOrderProp: SortOrder | undefined,
  initialSortOrder: SortOrder,
) => stateSortOrder || sortOrderProp || initialSortOrder;

const Header: HeaderComponent = props => {
  const {
    children,
    className,
    initialSortOrder = SORT_ORDER_NONE,
    sortable = false,
    sortOrder: sortOrderProp,
    onSort = () => {},
    fontSize,
    columnId,
  } = props;

  const [columnState, columnDispatch] = useColumnData(columnId);
  const [columnLayout] = useColumnLayout(columnId);
  const sortOrder = sortable
    ? getSortOrder(R.prop('sortOrder', columnState), sortOrderProp, initialSortOrder)
    : null;
  const ariaSorted = sortable ? { 'aria-sort': sortOrder } : {};
  const cellFlexProps = useFlexCellProps(props);
  const controlledSort = sortOrderProp !== undefined;

  useEffect(() => {
    columnDispatch({
      type: ACTION_SET_INITIAL_SORTING,
      sortOrder,
      controlledSort,
    });
  }, []);

  useEffect(() => {
    // If the sortOrder changes from the outside, update internal the column sort state
    if (controlledSort) {
      // @ts-ignore
      columnDispatch({ type: ACTION_SET_SORTING, sortOrder: sortOrderProp });
    }
  }, [sortOrderProp, controlledSort, columnDispatch]);

  const onSortClick = () => {
    const newSortOrder = getNextSortOrder(sortOrder || initialSortOrder);
    onSort(columnId, newSortOrder);
    if (!controlledSort) {
      columnDispatch({ type: ACTION_SET_SORTING, sortOrder: newSortOrder });
    }
  };

  useLayoutEffect(() => {
    if (cellFlexProps) {
      columnDispatch({ type: ACTION_SET_FLEX_PROPS, flexProps: cellFlexProps });
    }
  }, [cellFlexProps, columnDispatch]);

  const sorted = !R.isNil(sortOrder) && sortOrder !== SORT_ORDER_NONE;
  return (
    <Flexbox
      className={className}
      role="columnheader"
      {...ariaSorted}
      {...R.propOr(cellFlexProps, 'flexProps', columnLayout)}
    >
      {isElement(children) && children}
      {isFunction(children)
        ? children({ fontSize, sortable, sortOrder, onSortClick, sorted, columnId })
        : !isElement(children) && (
            <HeaderContent
              onSortClick={onSortClick}
              sortable={sortable}
              sortOrder={sortOrder}
              fontSize={fontSize}
              sorted={sorted}
            >
              {children}
            </HeaderContent>
          )}
    </Flexbox>
  );
};

Header.TextWrapper = TextWrapper;
Header.SortIcon = SortIcon;
Header.SortButton = SortButton;

export default Header;

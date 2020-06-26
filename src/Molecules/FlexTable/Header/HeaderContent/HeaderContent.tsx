import React from 'react';
import * as R from 'ramda';
import { Props, UIProps } from './HeaderContent.types';
import { TextWrapper } from './TextWrapper';
import { SORT_ORDER_NONE } from '../../shared/constants';
import { SortIcon } from './SortIcon';
import { SortButton } from './SortButton';
import { useFlexTable } from '../../shared/FlexTableProvider';

export const HeaderContent: React.FC<Props & UIProps> = ({
  sortable,
  sortOrder,
  onSortClick,
  children,
}) => {
  const { fontSize } = useFlexTable();
  if (!sortable || sortOrder === null) {
    return (
      <TextWrapper fontSize={fontSize} sorted={false}>
        {children}
      </TextWrapper>
    );
  }

  return (
    <SortButton onClick={onSortClick}>
      <TextWrapper
        fontSize={fontSize}
        sorted={!R.isNil(sortOrder) && sortOrder !== SORT_ORDER_NONE}
      >
        {children}
      </TextWrapper>
      <SortIcon sortOrder={sortOrder} />
    </SortButton>
  );
};

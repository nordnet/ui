import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Props, UIProps } from './HeaderContent.types';
import { TextWrapper } from './TextWrapper';
import { SORT_ORDER_NONE } from '../../shared/constants';
import { SortIcon } from './SortIcon';
import { SortButton } from './SortButton';
import { Flexbox } from '../../../..';
import { CellInlineContainer } from '../../shared';

const StyledFlexboxContainer = styled(Flexbox)`
  justify-content: inherit;
`;

export const HeaderContent = ({ sortable, sortOrder, onSortClick, children }: Props & UIProps) => {
  if (!sortable || sortOrder === null) {
    return <TextWrapper sorted={false}>{children}</TextWrapper>;
  }

  return (
    <SortButton onClick={onSortClick}>
      <StyledFlexboxContainer container>
        <CellInlineContainer item>
          <TextWrapper sorted={!R.isNil(sortOrder) && sortOrder !== SORT_ORDER_NONE}>
            {children}
          </TextWrapper>
        </CellInlineContainer>
        <Flexbox item>
          <SortIcon sortOrder={sortOrder} />
        </Flexbox>
      </StyledFlexboxContainer>
    </SortButton>
  );
};

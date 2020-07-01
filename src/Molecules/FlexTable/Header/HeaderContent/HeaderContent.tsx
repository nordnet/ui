import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Props, UIProps } from './HeaderContent.types';
import { TextWrapper } from './TextWrapper';
import { SORT_ORDER_NONE } from '../../shared/constants';
import { SortIcon } from './SortIcon';
import { SortButton } from './SortButton';
import { useFlexTable } from '../../shared/FlexTableProvider';
import { Flexbox } from '../../../..';

const StyledFlexboxContainer = styled(Flexbox)`
  justify-content: inherit;
`;

// inline-flex keeps Textwrapper with tooltip from not expanding row height.
// min-width: 0; makes us able to shrink the Flexbox smaller than child text elements.
const StyledFlexbox = styled(Flexbox)`
  display: inline-flex;
  min-width: 0;
`;

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
      <StyledFlexboxContainer container>
        <StyledFlexbox item>
          <TextWrapper
            fontSize={fontSize}
            sorted={!R.isNil(sortOrder) && sortOrder !== SORT_ORDER_NONE}
          >
            {children}
          </TextWrapper>
        </StyledFlexbox>
        <Flexbox item>
          <SortIcon sortOrder={sortOrder} />
        </Flexbox>
      </StyledFlexboxContainer>
    </SortButton>
  );
};

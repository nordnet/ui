import React from 'react';
import styled from 'styled-components';
import { OldIcon } from '../../../..';
import { SortIconProps } from './HeaderContent.types';
import { SORT_ORDER_NONE } from '../../shared/constants';

const StyledIconChevronDown = styled(OldIcon.ChevronDown)`
  margin-left: ${(p) => p.theme.spacing.unit(1)}px;
`;

const StyledIconSortArrow = styled(OldIcon.SortArrow)`
  margin-left: ${(p) => p.theme.spacing.unit(1)}px;
`;

export const SortIcon = ({ sortOrder }: SortIconProps) => {
  if (sortOrder === SORT_ORDER_NONE) {
    return <StyledIconChevronDown inline size={2} color={(t) => t.color.label} />;
  }

  return <StyledIconSortArrow inline direction={sortOrder} size={3} color={(t) => t.color.text} />;
};

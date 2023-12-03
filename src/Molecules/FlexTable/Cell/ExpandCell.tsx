import React from 'react';
import styled from 'styled-components';
import { Cell } from './index';
import { ExpandButton } from '../shared/ExpandButton/ExpandButton';
import { ExpandCellProps } from './Cell.types';

const StyledCell = styled(Cell)`
  padding-top: 0 !important;
  padding-bottom: 0;
  align-self: stretch;
`;

export const ExpandCell = ({
  columnId,
  disabled = false,
  expanded,
  onClick,
  ...cellProps
}: ExpandCellProps) => (
  <StyledCell columnId={columnId} {...cellProps}>
    <ExpandButton expanded={expanded} onClick={onClick} disabled={disabled} />
  </StyledCell>
);

import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { ContextType, useSelectMachineFromContext } from '../context';
import { Box } from '../../../../..';
import { getSingleSelectValue } from '../utils';

const getLabelOrPlaceholder = (state: ContextType[0]) => {
  if (state.context.selectedItems.length === 0) return state.context.placeholder;

  const value = getSingleSelectValue(state.context.selectedItems);

  return R.pathOr('', [0, 'label'], value);
};

const EllipsizingText = styled.span<{ $isPlaceholder: boolean }>`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  ${(p) => (p.$isPlaceholder ? `color: ${p.theme.color.placeholderText};` : '')}
`;

const CHEVRON_WIDTH = 20;
const CHEVRON_OFFSET = 4;

const StyledFlexedBox = styled(Box)`
  width: calc(100% - ${CHEVRON_WIDTH}px - ${CHEVRON_OFFSET}px);
  display: flex;
  align-items: center;
`;

export const SelectedValue = () => {
  const [state] = useSelectMachineFromContext();
  const isPlaceholder = state.context.selectedItems.length === 0;

  return (
    <StyledFlexedBox px={2}>
      <EllipsizingText $isPlaceholder={isPlaceholder}>
        {getLabelOrPlaceholder(state)}
      </EllipsizingText>
    </StyledFlexedBox>
  );
};

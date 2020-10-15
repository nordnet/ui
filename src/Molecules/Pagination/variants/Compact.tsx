import React from 'react';
import styled from 'styled-components';
import { Flexbox, Icon, Button } from '../../../index';
import { PaginationCompactProps, BrowseButtonProps } from '../Pagination.types';

const StyledButton = styled(Button)<{ $direction: 'left' | 'right' }>`
  display: flex;
  height: ${(p) => p.theme.spacing.unit(10)}px;
  width: ${(p) => p.theme.spacing.unit(8)}px;
  border: none;
  padding: 0;
  background-color: transparent;
  outline: none;
  flex-direction: row;
  justify-content: ${(p) => (p.$direction === 'left' ? 'flex-start' : 'flex-end')};
`;

const ChevronButton: React.FC<BrowseButtonProps> = ({ direction, onClick, label }) => (
  <Flexbox item container alignItems="center">
    <StyledButton onClick={onClick} variant="neutral" aria-label={label} $direction={direction}>
      <Icon.ThinChevron direction={direction} size={4} />
    </StyledButton>
  </Flexbox>
);

const Compact: React.FC<PaginationCompactProps> = ({
  onClickPrevious,
  onClickNext,
  previousPageLabel,
  nextPageLabel,
}) => {
  return (
    <Flexbox container gutter={1}>
      <ChevronButton direction="left" onClick={onClickPrevious} label={previousPageLabel} />
      <ChevronButton direction="right" onClick={onClickNext} label={nextPageLabel} />
    </Flexbox>
  );
};

export default React.memo(Compact);

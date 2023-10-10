import React from 'react';
import { Box, Flexbox } from '../../../index';
import { BrowseButtonProps, PaginationCompactProps } from '../Pagination.types';
import ChevronIcon from './components/ChevronIcon';
import { StyledButton } from './components/CompactComponents';

const ChevronButton: React.FC<BrowseButtonProps> = ({ direction, onClick, label }) => (
  <Flexbox item container alignItems="center">
    <StyledButton onClick={onClick} variant="neutral" aria-label={label} $direction={direction}>
      <ChevronIcon direction={direction} size={16} inline />
    </StyledButton>
  </Flexbox>
);

const Compact: React.FC<PaginationCompactProps> = ({
  currentPage,
  numberOfPages,
  onClickPrevious,
  onClickNext,
  previousPageLabel,
  nextPageLabel,
}) => {
  return (
    <Flexbox container gap={1}>
      {currentPage !== 1 && (
        <ChevronButton direction="left" onClick={onClickPrevious} label={previousPageLabel} />
      )}
      {currentPage !== numberOfPages && (
        <Box ml={currentPage <= 1 ? 9 : 0}>
          <ChevronButton direction="right" onClick={onClickNext} label={nextPageLabel} />
        </Box>
      )}
    </Flexbox>
  );
};

export default React.memo(Compact);

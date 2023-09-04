import React from 'react';
import { Box, Flexbox } from '../../../index';
import { BrowseLinkProps, PaginationCompactLinkProps } from '../Pagination.types';
import ChevronIcon from './components/ChevronIcon';
import { StyledLink } from './components/CompactComponents';

const ChevronLink: React.FC<BrowseLinkProps> = ({ direction, onClick, label, href }) => (
  <Flexbox item container alignItems="center" alignContent="center">
    <StyledLink onClick={onClick} aria-label={label} $direction={direction} to={href}>
      <ChevronIcon direction={direction} size={16} inline />
    </StyledLink>
  </Flexbox>
);

const CompactLinks: React.FC<PaginationCompactLinkProps> = ({
  currentPage,
  numberOfPages,
  onClickPrevious,
  onClickNext,
  previousPageLabel,
  nextPageLabel,
  getPageHref,
}) => {
  return (
    <Flexbox container gap={1} alignItems="center">
      {currentPage !== 1 && (
        <ChevronLink
          direction="left"
          onClick={onClickPrevious}
          label={previousPageLabel}
          href={getPageHref(currentPage - 1)}
        />
      )}
      {currentPage !== numberOfPages && (
        <Box ml={currentPage <= 1 ? 9 : 0}>
          <ChevronLink
            direction="right"
            onClick={onClickNext}
            label={nextPageLabel}
            href={getPageHref(currentPage + 1)}
          />
        </Box>
      )}
    </Flexbox>
  );
};

export default React.memo(CompactLinks);

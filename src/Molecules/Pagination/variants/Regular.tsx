import React from 'react';
import { Button, Flexbox, Typography } from '../../../index';
import List from '../../../Atoms/List';
import PageItems from '../PageItems';
import { BrowseButtonProps, PageItemProps, PaginationDefaultProps } from '../Pagination.types';
import ChevronIcon from './components/ChevronIcon';
import { StyledFlexbox, TruncatedPageNumbers } from './components/RegularComponents';

const PageNumberItem: React.FC<PageItemProps> = ({
  isCurrentPage = false,
  children,
  onClick,
  label,
}) => (
  <Flexbox item as="li">
    {isCurrentPage ? (
      <Typography type="secondary" color={(t) => t.color.cta} weight="bold">
        {children}
      </Typography>
    ) : (
      <Button variant="neutral" onClick={onClick} aria-label={`${label} ${children}`}>
        <Typography type="secondary" color={(t) => t.color.text} weight="bold">
          {children}
        </Typography>
      </Button>
    )}
  </Flexbox>
);

const ChevronButton: React.FC<BrowseButtonProps> = ({ direction = 'left', onClick, label }) => (
  <Button variant="neutral" onClick={onClick} aria-label={label}>
    <ChevronIcon direction={direction} size={8} />
  </Button>
);

const Regular: React.FC<PaginationDefaultProps> = ({
  currentPage,
  numberOfPages,
  onClickPageItem,
  onClickPrevious,
  onClickNext,
  previousPageLabel,
  nextPageLabel,
  currentPageLabel,
  pageItemLabel,
}) => {
  if (numberOfPages <= 1) {
    return null;
  }

  return (
    <StyledFlexbox container $numberOfPages={numberOfPages}>
      {currentPage !== 1 && (
        <ChevronButton direction="left" onClick={onClickPrevious} label={previousPageLabel} />
      )}
      <Flexbox container item flex="1" justifyContent="center" gap={2} as={List}>
        <PageItems
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={onClickPageItem}
          PageItem={PageNumberItem}
          TruncatedPageNumbers={TruncatedPageNumbers}
          currentPageLabel={currentPageLabel}
          pageItemLabel={pageItemLabel}
        />
      </Flexbox>
      {currentPage !== numberOfPages && (
        <ChevronButton direction="right" onClick={onClickNext} label={nextPageLabel} />
      )}
    </StyledFlexbox>
  );
};

export default React.memo(Regular);

import React, { useCallback, useEffect, useState } from 'react';
import { PaginationProps } from './Pagination.types';
import Regular from './variants/Regular';
import Compact from './variants/Compact';
import Large from './variants/Large';

const Pagination: React.FC<PaginationProps> = ({
  variant,
  currentPage: currentPageFromProps,
  itemsPerPage,
  totalItems,
  onPageChange,
  label = 'Pagination',
  nextPageLabel = 'Go to next page',
  previousPageLabel = 'Go to previous page',
  currentPageLabel = 'Current Page, page:',
  pageItemLabel = 'Go to Page',
}) => {
  const [currentPageFromState, setCurrentPageFromState] = useState(1);

  // use current page value from props if provided (controlled), otherwise use current page from state (uncontrolled)
  const currentPage = currentPageFromProps ?? currentPageFromState;

  const numberOfPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const handlePageChange = useCallback(
    (newPage) => {
      setCurrentPageFromState(newPage);
      onPageChange(newPage);
    },
    [setCurrentPageFromState, onPageChange],
  );

  const onClickPrevious = useCallback(() => {
    if (currentPageFromState > 1) {
      handlePageChange(currentPageFromState - 1);
    }
  }, [currentPageFromState, handlePageChange]);

  const onClickNext = useCallback(() => {
    if (currentPageFromState < numberOfPages) {
      handlePageChange(currentPageFromState + 1);
    }
  }, [currentPageFromState, numberOfPages, handlePageChange]);

  useEffect(() => {
    handlePageChange(currentPageFromProps || 1);
  }, [totalItems, itemsPerPage, handlePageChange, currentPageFromProps]);

  return (
    <nav role="navigation" aria-label={label}>
      {variant === 'compact' && (
        <Compact
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
          nextPageLabel={nextPageLabel}
          previousPageLabel={previousPageLabel}
        />
      )}

      {variant === 'large' && (
        <Large
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={handlePageChange}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
          nextPageLabel={nextPageLabel}
          previousPageLabel={previousPageLabel}
          currentPageLabel={currentPageLabel}
          pageItemLabel={pageItemLabel}
        />
      )}

      {variant === 'regular' && (
        <Regular
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={handlePageChange}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
          nextPageLabel={nextPageLabel}
          previousPageLabel={previousPageLabel}
          currentPageLabel={currentPageLabel}
          pageItemLabel={pageItemLabel}
        />
      )}
    </nav>
  );
};

export default Pagination;

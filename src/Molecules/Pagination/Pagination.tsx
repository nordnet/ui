import React, { useCallback, useEffect, useState } from 'react';
import R from 'ramda';
import { PaginationProps } from './Pagination.types';
import Regular from './variants/Regular';
import RegularLinks from './variants/RegularLinks';
import Compact from './variants/Compact';
import CompactLinks from './variants/CompactLinks';
import Large from './variants/Large';
import LargeLinks from './variants/LargeLinks';

const Pagination: React.FC<PaginationProps> = ({
  variant,
  currentPage: currentPageFromProps,
  itemsPerPage,
  totalItems,
  onPageChange = () => {},
  label = 'Pagination',
  nextPageLabel = 'Go to next page',
  previousPageLabel = 'Go to previous page',
  currentPageLabel = 'Current Page, page:',
  pageItemLabel = 'Go to Page',
  getPageHref,
}) => {
  const [currentPage, setCurrentPage] = useState(currentPageFromProps || 1);

  const controlled = !R.isNil(currentPageFromProps);

  const numberOfPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const handlePageChange = useCallback(
    (newPage) => {
      setCurrentPage(newPage);
      onPageChange(newPage);
    },
    [setCurrentPage, onPageChange],
  );

  const onClickPrevious = useCallback(() => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  }, [currentPage, handlePageChange]);

  const onClickNext = useCallback(() => {
    if (currentPage < numberOfPages) {
      handlePageChange(currentPage + 1);
    }
  }, [currentPage, numberOfPages, handlePageChange]);

  /**
   * Resets the current page to 1 if it's uncontrolled and number of pages changes.
   * Prevents the component from remaining on a page that might not exist if the data is swapped.
   */
  useEffect(() => {
    if (!controlled) {
      handlePageChange(1);
    }
  }, [controlled, handlePageChange, numberOfPages]);

  return (
    <nav role="navigation" aria-label={label}>
      {variant === 'compact' && !getPageHref && (
        <Compact
          currentPage={currentPageFromProps || currentPage}
          numberOfPages={numberOfPages}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
          nextPageLabel={nextPageLabel}
          previousPageLabel={previousPageLabel}
        />
      )}

      {variant === 'compact' && getPageHref && (
        <CompactLinks
          currentPage={currentPageFromProps || currentPage}
          numberOfPages={numberOfPages}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
          nextPageLabel={nextPageLabel}
          previousPageLabel={previousPageLabel}
          getPageHref={getPageHref}
        />
      )}

      {variant === 'large' && !getPageHref && (
        <Large
          currentPage={currentPageFromProps || currentPage}
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

      {variant === 'large' && getPageHref && (
        <LargeLinks
          currentPage={currentPageFromProps || currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={handlePageChange}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
          nextPageLabel={nextPageLabel}
          previousPageLabel={previousPageLabel}
          currentPageLabel={currentPageLabel}
          pageItemLabel={pageItemLabel}
          getPageHref={getPageHref}
        />
      )}

      {variant === 'regular' && !getPageHref && (
        <Regular
          currentPage={currentPageFromProps || currentPage}
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

      {variant === 'regular' && getPageHref && (
        <RegularLinks
          currentPage={currentPageFromProps || currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={handlePageChange}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
          nextPageLabel={nextPageLabel}
          previousPageLabel={previousPageLabel}
          currentPageLabel={currentPageLabel}
          pageItemLabel={pageItemLabel}
          getPageHref={getPageHref}
        />
      )}
    </nav>
  );
};

export default Pagination;

import React from 'react';
import { Flexbox, Link, Typography } from '../../../index';
import List from '../../../Atoms/List';
import PageItems from '../PageItems';
import { BrowseLinkProps, PageItemProps, PaginationDefaultLinkProps } from '../Pagination.types';
import ChevronIcon from './components/ChevronIcon';
import { StyledFlexbox, TruncatedPageNumbers } from './components/RegularComponents';

const PageNumberLinkItem: React.FC<PageItemProps> = ({
  isCurrentPage = false,
  children,
  onClick,
  label,
  href,
}) => (
  <Flexbox item as="li">
    {isCurrentPage ? (
      <Typography type="secondary" color={(t) => t.color.cta} weight="bold">
        {children}
      </Typography>
    ) : (
      <Link onClick={onClick} aria-label={`${label} ${children}`} to={href}>
        <Typography type="secondary" color={(t) => t.color.text} weight="bold">
          {children}
        </Typography>
      </Link>
    )}
  </Flexbox>
);

const ChevronLink: React.FC<BrowseLinkProps> = ({ direction = 'left', onClick, label, href }) => (
  <Link onClick={onClick} aria-label={label} to={href} color="black">
    <ChevronIcon direction={direction} size={8} />
  </Link>
);

const RegularLinks: React.FC<PaginationDefaultLinkProps> = ({
  currentPage,
  numberOfPages,
  onClickPageItem = () => {},
  onClickPrevious,
  onClickNext,
  previousPageLabel,
  nextPageLabel,
  currentPageLabel,
  pageItemLabel,
  getPageHref,
}) => {
  if (numberOfPages <= 1) {
    return null;
  }

  return (
    <StyledFlexbox container $numberOfPages={numberOfPages} alignItems="center">
      {currentPage !== 1 && (
        <ChevronLink
          direction="left"
          onClick={onClickPrevious}
          label={previousPageLabel}
          href={getPageHref(currentPage - 1)}
        />
      )}
      <Flexbox container item flex="1" justifyContent="center" gap={2} as={List}>
        <PageItems
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={onClickPageItem}
          PageItem={PageNumberLinkItem}
          TruncatedPageNumbers={TruncatedPageNumbers}
          currentPageLabel={currentPageLabel}
          pageItemLabel={pageItemLabel}
          getPageHref={getPageHref}
        />
      </Flexbox>
      {currentPage !== numberOfPages && (
        <ChevronLink
          direction="right"
          onClick={onClickNext}
          label={nextPageLabel}
          href={getPageHref(currentPage + 1)}
        />
      )}
    </StyledFlexbox>
  );
};

export default React.memo(RegularLinks);

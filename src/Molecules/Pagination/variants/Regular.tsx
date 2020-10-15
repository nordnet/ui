import React from 'react';
import styled from 'styled-components';
import { Typography, Icon, Flexbox, Button } from '../../../index';
import List from '../../../Atoms/List';
import PageItems from '../PageItems';
import { PaginationDefaultProps, PageItemProps, BrowseButtonProps } from '../Pagination.types';

const StyledFlexbox = styled(Flexbox)<{ $numberOfPages: number }>`
  width: ${(p) => {
    const NUMBER_WIDTH = p.theme.spacing.unit(4.5);
    const CHEVRON_PADDING = 2 * p.theme.spacing.unit(2);
    const BETWEEN_8_AND_13_PAGES_WIDTH = p.theme.spacing.unit(38);
    const BETWEEN_14_AND_101_PAGES_WIDTH = p.theme.spacing.unit(42);
    const MORE_THAN_101_PAGES_WIDTH = p.theme.spacing.unit(50);

    if (p.$numberOfPages < 8) return p.$numberOfPages * NUMBER_WIDTH + CHEVRON_PADDING;

    if (p.$numberOfPages >= 8 && p.$numberOfPages <= 13) return BETWEEN_8_AND_13_PAGES_WIDTH;

    if (p.$numberOfPages >= 14 && p.$numberOfPages <= 101) return BETWEEN_14_AND_101_PAGES_WIDTH;

    return MORE_THAN_101_PAGES_WIDTH;
  }}px;
`;

const PageNumberItem: React.FC<PageItemProps> = ({
  isCurrentPage = false,
  children,
  onClick,
  label,
}) => (
  <Flexbox item as="li">
    <Button
      variant="neutral"
      onClick={!isCurrentPage ? onClick : undefined}
      aria-label={`${label} ${children}`}
      aria-disabled={isCurrentPage}
    >
      <Typography type="secondary" color={(t) => (isCurrentPage ? t.color.cta : t.color.text)}>
        {children}
      </Typography>
    </Button>
  </Flexbox>
);

const TruncatedPageNumbers = () => (
  <Flexbox item container alignItems="center" as="li">
    <Typography type="secondary">...</Typography>
  </Flexbox>
);

const ChevronButton: React.FC<BrowseButtonProps> = ({ direction = 'left', onClick, label }) => (
  <Button variant="neutral" onClick={onClick} aria-label={label}>
    {direction === 'left' ? <Icon.ChevronLeft size={2} /> : <Icon.ChevronRight size={2} />}
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
  return (
    <StyledFlexbox container $numberOfPages={numberOfPages}>
      <ChevronButton direction="left" onClick={onClickPrevious} label={previousPageLabel} />
      <Flexbox container item flex="1" justifyContent="center" gutter={2} as={List}>
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
      <ChevronButton direction="right" onClick={onClickNext} label={nextPageLabel} />
    </StyledFlexbox>
  );
};

export default React.memo(Regular);

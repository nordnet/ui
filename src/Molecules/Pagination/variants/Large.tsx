import React from 'react';
import styled from 'styled-components';
import { Flexbox, Typography, Icon, Button } from '../../../index';
import List from '../../../Atoms/List';
import { PageItemProps, PaginationDefaultProps, BrowseButtonProps } from '../Pagination.types';
import PageItems from '../PageItems';

const StyledButton = styled(Button)<{ $type: 'chevron' | 'page-item'; $isCurrentPage?: boolean }>`
  display: flex;
  height: ${(p) => p.theme.spacing.unit(10)}px;
  width: ${(p) => p.theme.spacing.unit(10)}px;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;

  ${({ $type, $isCurrentPage, theme }) =>
    $type === 'page-item' &&
    $isCurrentPage &&
    `background-color: ${theme.color.cta}; cursor: default`}
  ${({ $type, theme }) =>
    $type === 'chevron' && `box-sizing: border-box; border: 1px solid ${theme.color.inputBorder};`}
`;

const StyledTruncatedBox = styled.li`
  display: flex;
  height: ${(p) => p.theme.spacing.unit(10)}px;
  width: ${(p) => p.theme.spacing.unit(5)}px;
  border: none;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const getWidthForList = (
  pageItemWith: number,
  truncatedItemWidth: number,
  numberOfPages: number,
) => {
  const MAX_NUMBER_ITEMS = 7;
  const NUMBER_OF_CHEVRONS = 2;

  if (numberOfPages <= 5) {
    return numberOfPages * pageItemWith;
  }
  if (numberOfPages === 6) {
    return numberOfPages * pageItemWith - truncatedItemWidth;
  }
  return MAX_NUMBER_ITEMS * pageItemWith - NUMBER_OF_CHEVRONS * truncatedItemWidth;
};

const StyledList = styled(List)<{ $numberOfPages: number }>`
  display: flex;
  justify-content: center;
  ${(p) => {
    const PAGE_ITEM_WIDTH = p.theme.spacing.unit(10);
    const TRUNCATED_ITEM_WIDTH = p.theme.spacing.unit(5);
    return `width: ${getWidthForList(PAGE_ITEM_WIDTH, TRUNCATED_ITEM_WIDTH, p.$numberOfPages)}px`;
  }}
`;

const PageItem: React.FC<PageItemProps> = ({ isCurrentPage = false, onClick, children, label }) => (
  <Flexbox item as="li">
    <StyledButton
      $type="page-item"
      onClick={!isCurrentPage ? onClick : undefined}
      $isCurrentPage={isCurrentPage}
      aria-label={`${label} ${children}`}
      aria-disabled={isCurrentPage}
    >
      <Typography type="primary" color={(t) => (isCurrentPage ? t.color.buttonText : t.color.text)}>
        {children}
      </Typography>
    </StyledButton>
  </Flexbox>
);

const TruncatedPageNumbers = () => (
  <StyledTruncatedBox>
    <Typography type="secondary">...</Typography>
  </StyledTruncatedBox>
);

const ChevronButton: React.FC<BrowseButtonProps> = ({ direction, onClick, label }) => (
  <Flexbox item container alignItems="center">
    <StyledButton $type="chevron" onClick={onClick} aria-label={label}>
      {direction === 'left' ? (
        <Icon.ChevronLeft inline size={3} />
      ) : (
        <Icon.ChevronRight inline size={3} />
      )}
    </StyledButton>
  </Flexbox>
);

const Large: React.FC<PaginationDefaultProps> = ({
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
    <Flexbox container>
      <ChevronButton direction="left" onClick={onClickPrevious} label={previousPageLabel} />
      <StyledList $numberOfPages={numberOfPages}>
        <PageItems
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClickPageItem={onClickPageItem}
          PageItem={PageItem}
          TruncatedPageNumbers={TruncatedPageNumbers}
          currentPageLabel={currentPageLabel}
          pageItemLabel={pageItemLabel}
        />
      </StyledList>
      <ChevronButton direction="right" onClick={onClickNext} label={nextPageLabel} />
    </Flexbox>
  );
};

export default React.memo(Large);

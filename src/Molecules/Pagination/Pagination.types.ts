export type PaginationProps = {
  variant: 'regular' | 'large' | 'compact';
  currentPage?: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (newPage: number) => void;
  label?: string;
  nextPageLabel?: string;
  previousPageLabel?: string;
  currentPageLabel?: string;
  pageItemLabel?: string;
};

export type PageItemProps = {
  isCurrentPage?: boolean;
  onClick?: () => void;
  children: React.ReactText;
  label: string;
};

export type PageItemsProps = {
  currentPage: number;
  numberOfPages: number;
  onClickPageItem: (newPage: number) => void;
  PageItem: React.FC<PageItemProps>;
  TruncatedPageNumbers: React.FC<{}>;
  currentPageLabel: string;
  pageItemLabel: string;
};

export type BrowseButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
  label: string;
};

export type PaginationCompactProps = {
  onClickPrevious: BrowseButtonProps['onClick'];
  onClickNext: BrowseButtonProps['onClick'];
  nextPageLabel: string;
  previousPageLabel: string;
};

export type PaginationDefaultProps = PaginationCompactProps & {
  currentPage: number;
  numberOfPages: number;
  onClickPageItem: PageItemsProps['onClickPageItem'];
  currentPageLabel: string;
  pageItemLabel: string;
};

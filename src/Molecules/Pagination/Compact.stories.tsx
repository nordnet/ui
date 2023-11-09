import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import PaginationRouteHelper from './PaginationRouteHelper';
import docs from './Pagination.mdx';
import Pagination from './Pagination';

export default {
  title: 'Molecules / Pagination / Compact',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const CompactPagination = ({ totalItems = 10, itemsPerPage = 1 }) => (
  <Pagination
    variant="compact"
    totalItems={totalItems}
    itemsPerPage={itemsPerPage}
    onPageChange={action('Page change')}
  />
);

export const Regular = () => <CompactPagination />;

const ControlledCompactPagination = ({ totalItems = 10, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(5);

  const onPageChange = (newPage: number) => {
    action('Page change')(newPage);
    setCurrentPage(newPage);
  };

  return (
    <Pagination
      variant="compact"
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onPageChange={onPageChange}
    />
  );
};

export const ControlledPagination = () => <ControlledCompactPagination />;

const LinksPaginationComponent = ({ totalItems = 10, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(5);

  const getPageHref = (pageNumber: number) => `/${pageNumber}`;

  return (
    <PaginationRouteHelper currentPage={currentPage} setCurrentPage={setCurrentPage}>
      <Pagination
        variant="compact"
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        getPageHref={getPageHref}
      />
    </PaginationRouteHelper>
  );
};

export const LinksPagination = () => <LinksPaginationComponent />;

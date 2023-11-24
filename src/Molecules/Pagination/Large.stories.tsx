import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import PaginationRouteHelper from './PaginationRouteHelper';
import docs from './Pagination.mdx';
import Pagination from './Pagination';

export default {
  title: 'Molecules / Pagination / Large',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const LargePagination = ({ totalItems = 10, itemsPerPage = 1 }) => (
  <Pagination
    variant="large"
    totalItems={totalItems}
    itemsPerPage={itemsPerPage}
    onPageChange={action('Page change')}
  />
);

export const Large = () => <LargePagination />;

export const PaginationWithOnePage = {
  render: () => <LargePagination totalItems={1} itemsPerPage={1} />,
  name: '1 page',
};

export const PaginationWithTwoPages = {
  render: () => <LargePagination totalItems={2} itemsPerPage={1} />,
  name: '2 pages',
};

export const PaginationWithTwelvePages = {
  render: () => <LargePagination totalItems={12} itemsPerPage={1} />,
  name: '12 pages',
};

export const PaginationWithManyPages = {
  render: () => <LargePagination totalItems={999} itemsPerPage={1} />,
  name: '999 pages',
};

const ControlledLargePagination = ({ totalItems = 10, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(5);

  const onPageChange = (newPage: number) => {
    action('Page change')(newPage);
    setCurrentPage(newPage);
  };

  return (
    <Pagination
      variant="large"
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onPageChange={onPageChange}
    />
  );
};

export const ControlledPagination = () => <ControlledLargePagination />;

const LinksPaginationComponent = ({ totalItems = 10, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(5);

  const getPageHref = (pageNumber: number) => `/${pageNumber}`;

  return (
    <PaginationRouteHelper currentPage={currentPage} setCurrentPage={setCurrentPage}>
      <Pagination
        variant="large"
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        getPageHref={getPageHref}
      />
    </PaginationRouteHelper>
  );
};

export const LinksPagination = () => <LinksPaginationComponent />;

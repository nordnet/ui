import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import PaginationRouteHelper from './PaginationRouteHelper';
import docs from './Pagination.mdx';
import Pagination from './Pagination';

export default {
  title: 'Molecules / Pagination / Regular',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const RegularPagination = ({ totalItems = 10, itemsPerPage = 1 }) => (
  <Pagination
    variant="regular"
    totalItems={totalItems}
    itemsPerPage={itemsPerPage}
    onPageChange={action('Page change')}
  />
);

export const Regular = () => <RegularPagination />;

export const PaginationWithOnePage = {
  render: () => <RegularPagination totalItems={1} itemsPerPage={1} />,
  name: '1 page',
};

export const PaginationWithTwoPages = {
  render: () => <RegularPagination totalItems={2} itemsPerPage={1} />,
  name: '2 pages',
};

export const PaginationWithTwelvePages = {
  render: () => <RegularPagination totalItems={12} itemsPerPage={1} />,

  name: '12 pages',
};

export const PaginationWithManyPages = {
  render: () => <RegularPagination totalItems={999} itemsPerPage={1} />,

  name: '999 pages',
};

const ControlledRegularPagination = ({ totalItems = 10, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(5);

  const onPageChange = (newPage: number) => {
    action('Page change')(newPage);
    setCurrentPage(newPage);
  };

  return (
    <Pagination
      variant="regular"
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onPageChange={onPageChange}
    />
  );
};

export const ControlledPagination = () => <ControlledRegularPagination />;

const LinksPaginationComponent = ({ totalItems = 10, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(5);

  const getPageHref = (pageNumber: number) => `/${pageNumber}`;

  return (
    <PaginationRouteHelper currentPage={currentPage} setCurrentPage={setCurrentPage}>
      <Pagination
        variant="regular"
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        getPageHref={getPageHref}
      />
    </PaginationRouteHelper>
  );
};

export const LinksPagination = () => <LinksPaginationComponent />;

import React from 'react';
import { action } from '@storybook/addon-actions';
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

export const large = () => <LargePagination />;

export const paginationWithOnePage = () => <LargePagination totalItems={1} itemsPerPage={1} />;

paginationWithOnePage.story = {
  name: '1 page',
};

export const paginationWithTwoPages = () => <LargePagination totalItems={2} itemsPerPage={1} />;

paginationWithTwoPages.story = {
  name: '2 pages',
};

export const paginationWithTwelvePages = () => <LargePagination totalItems={12} itemsPerPage={1} />;

paginationWithTwelvePages.story = {
  name: '12 pages',
};

export const paginationWithManyPages = () => <LargePagination totalItems={999} itemsPerPage={1} />;

paginationWithManyPages.story = {
  name: '999 pages',
};

const ControlledLargePagination = ({ totalItems = 10, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = React.useState(5);

  return (
    <Pagination
      variant="large"
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onPageChange={setCurrentPage}
    />
  );
};

export const controlledPagination = () => <ControlledLargePagination />;

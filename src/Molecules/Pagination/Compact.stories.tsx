import React from 'react';
import { action } from '@storybook/addon-actions';
import docs from './Pagination.mdx';
import Pagination from './Pagination';

export default {
  title: 'Molecules / Pagination / Compact',
  parameters: {
    ...docs.parameters,
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

export const regular = () => <CompactPagination />;

const ControlledCompactPagination = ({ totalItems = 10, itemsPerPage = 1 }) => {
  const [currentPage, setCurrentPage] = React.useState(5);

  return (
    <Pagination
      variant="compact"
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onPageChange={setCurrentPage}
    />
  );
};

export const controlledPagination = () => <ControlledCompactPagination />;

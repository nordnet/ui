import React, { useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router';
import { action } from '@storybook/addon-actions';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';

interface PaginationRouteHelperProps {
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  children?: React.ReactNode;
}

const View: React.FC<PaginationRouteHelperProps> = ({ currentPage, setCurrentPage }) => {
  const params = useParams();

  useEffect(() => {
    const matchPage = +params.page!;
    if (currentPage !== matchPage) {
      action('Page change via router')(params);
      setCurrentPage(matchPage);
    }
  }, [currentPage, setCurrentPage, params]);

  return (
    <pre>
      <code>{JSON.stringify(params, null, 2)}</code>
    </pre>
  );
};

const PaginationRouteHelper: React.FC<PaginationRouteHelperProps> = ({
  children,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <Provider>
      {children}
      <Routes>
        <Route
          path="/:page"
          element={<View currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        />
      </Routes>
    </Provider>
  );
};

export default PaginationRouteHelper;

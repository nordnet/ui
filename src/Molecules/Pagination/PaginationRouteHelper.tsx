import React, { useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router';
import { action } from '@storybook/addon-actions';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';

type SharedProps = {
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
};

type ViewProps = SharedProps;

type PaginationRouteHelperProps = SharedProps & {
  children?: React.ReactNode;
};

const View = ({ currentPage, setCurrentPage }: ViewProps) => {
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

const PaginationRouteHelper = ({
  children,
  currentPage,
  setCurrentPage,
}: PaginationRouteHelperProps) => {
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

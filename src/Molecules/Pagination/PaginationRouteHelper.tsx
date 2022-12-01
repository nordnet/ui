import React, { useEffect } from 'react';
import { Route, match as MatchType, RouteComponentProps } from 'react-router';
import { action } from '@storybook/addon-actions';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';

interface MatchParams {
  page: string;
}

interface PaginationRouteHelperProps {
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  children?: React.ReactNode;
}

interface ViewProps extends PaginationRouteHelperProps {
  match: MatchType<MatchParams>;
}

const View: React.FC<ViewProps> = ({ match, currentPage, setCurrentPage }) => {
  useEffect(() => {
    const matchPage = +match.params.page;
    if (currentPage !== matchPage) {
      action('Page change via router')(match);
      setCurrentPage(matchPage);
    }
  }, [match, currentPage, setCurrentPage]);

  return (
    <pre>
      <code>{JSON.stringify(match, null, 2)}</code>
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
      <Route
        path="/:page"
        component={({ match }: RouteComponentProps<MatchParams>) => (
          <View match={match} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
      />
    </Provider>
  );
};

export default PaginationRouteHelper;

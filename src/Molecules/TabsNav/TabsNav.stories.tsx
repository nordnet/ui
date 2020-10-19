import React, { FC } from 'react';
import { Route, Redirect } from 'react-router';
import { MemoryRouter, Link, useRouteMatch } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { TabsNav, Separator, Flexbox, Box } from '../..';
import docs from './TabsNav.mdx';
import { LinkProvider, LinkProps } from '../../common/Links';

export default {
  title: 'Molecules / TabsNav',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const MyLink: FC<LinkProps> = ({ to, children, className }) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

type ContentProps = {
  height?: number;
  hideFirst?: boolean;
};

const Content = ({ height, hideFirst }: ContentProps) => {
  const route1Match = useRouteMatch('/route1');
  const route2Match = useRouteMatch('/route2');
  return (
    <Flexbox container direction="column" gutter={0}>
      <Flexbox item>
        <TabsNav height={height}>
          {!hideFirst && (
            <TabsNav.Tab
              title="Link to /route1"
              to="/route1"
              onTitleClick={action('Clicked title1')}
              active={route1Match}
            />
          )}
          <TabsNav.Tab
            title={<div>Link to /route2</div>}
            to="/route2"
            onTitleClick={action('Clicked title2')}
            active={route2Match}
          />
        </TabsNav>
      </Flexbox>
      <Flexbox item>
        <Separator />
      </Flexbox>
      <Flexbox item>
        <Box py={4}>
          <Route path="/route1" component={() => <>/route1 content</>} />
          <Route path="/route2" component={() => <>/route2 content</>} />
          <Route exact path="/" render={() => <Redirect to="/route1" />} />
        </Box>
      </Flexbox>
    </Flexbox>
  );
};

export const integrationWithReactRouter = () => (
  <MemoryRouter>
    <LinkProvider link={MyLink}>
      <Content />
    </LinkProvider>
  </MemoryRouter>
);

integrationWithReactRouter.story = {
  name: 'Integration: With react-router',
};

export const integrationWithReactRouterAndHeightModified = () => (
  <MemoryRouter>
    <LinkProvider link={MyLink}>
      <Content height={24} />
    </LinkProvider>
  </MemoryRouter>
);

integrationWithReactRouterAndHeightModified.story = {
  name: 'Integration: With react-router and height modified',
};

export const integrationConditionallyHideTab = () => {
  return (
    <MemoryRouter>
      <LinkProvider link={MyLink}>
        <Content hideFirst />
      </LinkProvider>
    </MemoryRouter>
  );
};

integrationConditionallyHideTab.story = {
  name: 'Integration: conditionally hide tab',
};

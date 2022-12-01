import React, { FC } from 'react';
import { Redirect, Route } from 'react-router';
import { Link, MemoryRouter, useRouteMatch } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { Box, Flexbox, Separator, TabsNav } from '../..';
import docs from './TabsNav.mdx';
import { LinkProvider } from '../../common/Links';
import { LinkProps } from '../../common/Links/types';

export default {
  title: 'Molecules / TabsNav',
  parameters: {
    component: TabsNav,
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

export type ContentProps = {
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

const ContentWithManyLinks = () => {
  const route1Match = useRouteMatch('/route1');
  const route2Match = useRouteMatch('/route2');
  const route3Match = useRouteMatch('/route3');
  const route4Match = useRouteMatch('/route4');
  const route5Match = useRouteMatch('/route5');
  const route6Match = useRouteMatch('/route6');

  return (
    <Flexbox container direction="column" gutter={0}>
      <Flexbox item>
        <TabsNav height={11} scrollOptions={{ active: true, scrollBarHidden: true }}>
          <TabsNav.Tab
            title={<div>Link to /route1</div>}
            to="/route1"
            onTitleClick={action('Clicked title1')}
            active={route1Match}
          />
          <TabsNav.Tab
            title={<div>Link to /route2</div>}
            to="/route2"
            onTitleClick={action('Clicked title2')}
            active={route2Match}
          />
          <TabsNav.Tab
            title={<div>Link to /route3</div>}
            to="/route3"
            onTitleClick={action('Clicked title3')}
            active={route3Match}
          />
          <TabsNav.Tab
            title={<div>Link to /route4</div>}
            to="/route4"
            onTitleClick={action('Clicked title4')}
            active={route4Match}
          />
          <TabsNav.Tab
            title={<div>Link to /route5</div>}
            to="/route5"
            onTitleClick={action('Clicked title5')}
            active={route5Match}
          />
          <TabsNav.Tab
            title={<div>Link to /route6</div>}
            to="/route6"
            onTitleClick={action('Clicked title6')}
            active={route6Match}
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
          <Route path="/route3" component={() => <>/route3 content</>} />
          <Route path="/route4" component={() => <>/route4 content</>} />
          <Route path="/route5" component={() => <>/route5 content</>} />
          <Route path="/route6" component={() => <>/route6 content</>} />
          <Route exact path="/" render={() => <Redirect to="/route1" />} />
        </Box>
      </Flexbox>
    </Flexbox>
  );
};

export const HorizontalScrollEnabled = () => {
  return (
    <MemoryRouter>
      <LinkProvider link={MyLink}>
        <div>
          This is a title
          <ContentWithManyLinks />
        </div>
      </LinkProvider>
    </MemoryRouter>
  );
};

HorizontalScrollEnabled.story = {
  name: 'Enabled horizontal scroll',
};

import { storiesOf } from '@storybook/react';
import React from 'react';
import { Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { TabsNav, Separator, Flexbox, Box } from '../..';

storiesOf('Molecules | TabsNav', module)
  .add('Integration: With react-router', () => (
    <HashRouter>
      <Flexbox container direction="column" gutter={0}>
        <Flexbox item>
          <TabsNav>
            <TabsNav.Tab
              title="Link to /route1"
              to="/route1"
              onTitleClick={action('Clicked title1')}
            />
            <TabsNav.Tab
              title={<div>Link to /route2</div>}
              to="/route2"
              onTitleClick={action('Clicked title2')}
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
    </HashRouter>
  ))
  .add('Integration: With react-router and height modified', () => (
    <HashRouter>
      <Flexbox container direction="column" gutter={0}>
        <Flexbox item>
          <TabsNav height={12}>
            <TabsNav.Tab
              title="Link to /route1"
              to="/route1"
              onTitleClick={action('Clicked title1')}
            />
            <TabsNav.Tab
              title={<div>Link to /route2</div>}
              to="/route2"
              onTitleClick={action('Clicked title2')}
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
    </HashRouter>
  ))
  .add('Integration: conditionally hide tab', () => {
    const showFirstTab = false;

    return (
      <HashRouter>
        <Flexbox container direction="column" gutter={0}>
          <Flexbox item>
            <TabsNav>
              {showFirstTab && <TabsNav.Tab title="Link to /route1" to="/route1" />}
              <TabsNav.Tab title={<div>Link to /route2</div>} to="/route2" />
              <TabsNav.Tab title={<div>Link to /route2</div>} to="/route3" />
            </TabsNav>
          </Flexbox>
        </Flexbox>
      </HashRouter>
    );
  });

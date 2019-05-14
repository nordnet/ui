import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { Typography, TabsNav, Separator, Flexbox } from '../..';

const SpacingInside = styled.div`
  padding-left: ${p => p.theme.spacing.unit(5)}px;
  padding-right: ${p => p.theme.spacing.unit(5)}px;
  padding-top: ${p => p.theme.spacing.unit(4)}px;
`;

storiesOf('Molecules | TabsNav', module).add(
  'Integration: With react-router (extra space inside)',
  () => (
    <HashRouter>
      <Flexbox.Container direction="column" gutter={0}>
        <Flexbox.Item>
          <Typography type="secondary">
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
          </Typography>
        </Flexbox.Item>
        <Flexbox.Item>
          <Separator />
        </Flexbox.Item>
        <Flexbox.Item>
          <SpacingInside>
            <Route path="/route1" component={() => <>/route1 content</>} />
            <Route path="/route2" component={() => <>/route2 content</>} />
            <Route exact path="/" render={() => <Redirect to="/route1" />} />
          </SpacingInside>
        </Flexbox.Item>
      </Flexbox.Container>
    </HashRouter>
  ),
);

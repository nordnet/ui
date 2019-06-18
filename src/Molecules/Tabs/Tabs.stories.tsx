import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Tabs, Typography } from '../..';

const SpacingInside = styled.div`
  padding-left: ${p => p.theme.spacing.unit(5)}px;
  padding-right: ${p => p.theme.spacing.unit(5)}px;
  padding-top: ${p => p.theme.spacing.unit(4)}px;
`;

const StyledTabs = styled(Tabs)`
  padding: 0 ${p => p.theme.spacing.unit(5)}px;
`;

storiesOf('Molecules | Tabs', module)
  .add('Default', () => (
    <Typography type="secondary">
      <Tabs>
        <Tabs.Tab title="One" onTitleClick={action('Clicked title1')}>
          Ones children
        </Tabs.Tab>
        <Tabs.Tab
          title={
            <div>
              Node as well
              <span role="img" aria-label="goodjob">
                👍
              </span>
            </div>
          }
          onTitleClick={action('Clicked title2')}
        >
          Moving focus from a tab will put it on the next <a href="#link">focusable</a> Tab in the
          tab panel.
        </Tabs.Tab>
      </Tabs>
    </Typography>
  ))
  .add('With custom styling (like spacing)', () => (
    <Typography type="secondary">
      <StyledTabs>
        <Tabs.Tab title="One" onTitleClick={action('Clicked title1')}>
          <SpacingInside>Ones children</SpacingInside>
        </Tabs.Tab>
        <Tabs.Tab title="two" onTitleClick={action('Clicked title2')}>
          <SpacingInside>Twos children</SpacingInside>
        </Tabs.Tab>
      </StyledTabs>
    </Typography>
  ))
  .add('Controlled behaviour', () => {
    const ControlledExample = () => {
      const [active, setActive] = useState(0);

      return (
        <Typography type="secondary">
          <button type="button" onClick={() => setActive(active === 0 ? 1 : 0)}>
            Change state outside
          </button>
          <Tabs activeTabIndex={active}>
            <Tabs.Tab title="One" onTitleClick={() => setActive(0)}>
              Ones children
            </Tabs.Tab>
            <Tabs.Tab title="Two" onTitleClick={() => setActive(1)}>
              Twos children
            </Tabs.Tab>
          </Tabs>
        </Typography>
      );
    };
    return <ControlledExample />;
  })
  .add('With conditionally hidden tab', () => {
    const showFirstTab = false;
    return (
      <Typography type="secondary">
        <StyledTabs>
          {showFirstTab && (
            <Tabs.Tab title="One" onTitleClick={action('Clicked title1')}>
              <SpacingInside>Ones children</SpacingInside>
            </Tabs.Tab>
          )}
          <Tabs.Tab title="two" onTitleClick={action('Clicked title2')}>
            <SpacingInside>Twos children</SpacingInside>
          </Tabs.Tab>
        </StyledTabs>
      </Typography>
    );
  });

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { HashRouter } from 'react-router-dom';

import { Button, Flexbox } from '../..';
import { Display } from '../../common/Display';

storiesOf('Molecules | Button', module)
  .add('Default usage', () => <Button onClick={action('clicked')}>Button</Button>)
  .add('Disabled button', () => (
    <Button disabled onClick={action('clicked')}>
      Button
    </Button>
  ))
  .add('Button with variant', () => (
    <Button onClick={action('clicked')} variant="secondary">
      Button
    </Button>
  ))
  .add('Button primary with size modified', () => (
    <Display
      horizontal
      items={[
        {
          title: 'Small',
          component: (
            <Button size="s" onClick={action('clickSmall')}>
              Small
            </Button>
          ),
        },
        {
          title: 'Medium',
          component: (
            <Button size="m" onClick={action('clickMedium')}>
              Medium
            </Button>
          ),
        },
        {
          title: 'Large',
          component: (
            <Button size="l" onClick={action('clickLarge')}>
              Large
            </Button>
          ),
        },
      ]}
    />
  ))
  .add('Button secondary with size modified', () => (
    <Display
      horizontal
      items={[
        {
          title: 'Small',
          component: (
            <Button size="s" variant="secondary" onClick={action('clickSmall')}>
              Small
            </Button>
          ),
        },
        {
          title: 'Medium',
          component: (
            <Button size="m" variant="secondary" onClick={action('clickMedium')}>
              Medium
            </Button>
          ),
        },
        {
          title: 'Large',
          component: (
            <Button size="l" variant="secondary" onClick={action('clickLarge')}>
              Large
            </Button>
          ),
        },
      ]}
    />
  ))
  .add('Button with type modified', () => (
    <Display
      items={[
        {
          title: 'Reset',
          component: (
            <Button type="reset" onClick={action('reset')}>
              Reset
            </Button>
          ),
        },
        {
          title: 'Submit',
          component: (
            <Button type="submit" onClick={action('submit')}>
              Submit
            </Button>
          ),
        },
      ]}
    />
  ))
  .add('Button that is full width', () => (
    <Button onClick={action('clicked')} fullWidth>
      Button
    </Button>
  ))
  .add('Buttons composed in a group', () => (
    <Flexbox.Container>
      <Flexbox.Item flex="1 1 50%">
        <Button type="submit" onClick={action('submit')} fullWidth>
          Submit
        </Button>
      </Flexbox.Item>
      <Flexbox.Item flex="1 1 50%">
        <Button type="reset" onClick={action('reset')} variant="secondary" fullWidth>
          Reset
        </Button>
      </Flexbox.Item>
    </Flexbox.Container>
  ))
  .add('Link looking like a button', () => (
    <Display
      items={[
        {
          title: 'Reset',
          component: (
            <HashRouter>
              <Button to="route1">To Route1</Button>
            </HashRouter>
          ),
        },
        {
          title: 'Submit',
          component: (
            <HashRouter>
              <Button to="route2" variant="secondary">
                To Route2
              </Button>
            </HashRouter>
          ),
        },
      ]}
    />
  ))
  .add('Link looking like a button that is full width', () => (
    <HashRouter>
      <Button to="www.google.com" onClick={action('clicked')} fullWidth>
        Button
      </Button>
    </HashRouter>
  ))
  .add('Link looking like a buttons composed in a group', () => (
    <HashRouter>
      <Flexbox.Container>
        <Flexbox.Item flex="1">
          <Button to="route1" onClick={action('submit')} fullWidth>
            Submit
          </Button>
        </Flexbox.Item>
        <Flexbox.Item flex="1">
          <Button to="route2" onClick={action('reset')} variant="secondary" fullWidth>
            Reset
          </Button>
        </Flexbox.Item>
      </Flexbox.Container>
    </HashRouter>
  ))
  .add('Link looking like a button with rel as nofollow', () => (
    <HashRouter>
      <Button to="www.google.com" rel="nofollow" onClick={action('clicked')} fullWidth>
        Button
      </Button>
    </HashRouter>
  ));

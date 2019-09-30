import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '../..';
import { Display } from '../../common/Display';

storiesOf('Molecules | Avatar', module)
  .add('Basic usage', () => <Avatar>ASK</Avatar>)
  .add('Different sizes', () => (
    <Display
      items={[
        { title: 'Size `s`', component: <Avatar size="s">ASK</Avatar> },
        { title: 'Size `m` (default)', component: <Avatar size="m">ASK</Avatar> },
      ]}
    />
  ))
  .add('Best practice, with element as children', () => (
    <Avatar>
      <abbr title="Investeringssparkonto">ISK</abbr>
    </Avatar>
  ));

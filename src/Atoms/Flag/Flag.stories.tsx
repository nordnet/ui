import React from 'react';
import { storiesOf } from '@storybook/react';
// @ts-ignore
import flags from './flags';
import { Flag } from '../..';
import { Display } from '../../common/Display';

storiesOf('Atoms | Flag', module)
  .add('Default use', () => <Flag country="SE" />)
  .add('Different size ', () => <Flag country="SE" height={10} />)
  .add('Renders nothing if wrong country code', () => <Flag country="WRONG" />)
  .add('Available flags', () => (
    <Display
      items={Object.keys(flags).map((flagName: string) => ({
        title: flagName,
        component: <Flag country={flagName} />,
      }))}
    />
  ));

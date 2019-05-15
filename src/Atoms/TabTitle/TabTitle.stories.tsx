import React from 'react';
import { storiesOf } from '@storybook/react';
import { TabTitle, Flexbox } from '../..';

storiesOf('Atoms | TabTitle', module)
  .add('Default', () => <TabTitle>This is tab title</TabTitle>)
  .add('Active', () => <TabTitle active>This is tab title</TabTitle>)
  .add('Integration: with Flexbox', () => (
    <Flexbox container direction="row">
      <Flexbox item>
        <TabTitle>TabTitle1</TabTitle>
      </Flexbox>
      <Flexbox item>
        <TabTitle active>TabTitle2</TabTitle>
      </Flexbox>
      <Flexbox item>
        <TabTitle>TabTitle3</TabTitle>
      </Flexbox>
    </Flexbox>
  ));

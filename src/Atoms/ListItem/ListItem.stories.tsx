import { storiesOf } from '@storybook/react';
import React from 'react';
import { ListItem } from '../..';

storiesOf('Atoms | ListItem', module).add('Basic list item', () => (
  <ul>
    <ListItem>List item</ListItem>
  </ul>
));

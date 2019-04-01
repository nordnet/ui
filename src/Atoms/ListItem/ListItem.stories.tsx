import { storiesOf } from '@storybook/react';
import React from 'react';
import ListItem from '.';

const stories = storiesOf('Atoms/ListItem', module);

stories.add('Basic list item', () => (
  <ul>
    <ListItem>List item</ListItem>
  </ul>
));

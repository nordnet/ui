import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Switch } from '../..';

storiesOf('Atoms | Switch', module)
  .add('Default Off', () => <Switch labelText="Notify me by email" onClick={action('clicked')} />)
  .add('Disabled On', () => (
    <Switch labelText="Notify me by email" onClick={action('clicked')} defaultOn />
  ))
  .add('Disabled', () => <Switch labelText="Notify me by email" disabled />)
  .add('With onChange callback', () => (
    <Switch
      labelText="Notify me by email"
      onClick={action('clicked')}
      onChange={checked => console.log('checked: ', checked)}
    />
  ));

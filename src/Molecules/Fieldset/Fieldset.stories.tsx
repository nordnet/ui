import React from 'react';
import { storiesOf } from '@storybook/react';
import { Fieldset, Legend, Input } from '../..';

storiesOf('Molecules | Fieldset', module)
  .add('Docs', () => <p>The Fieldset component is used to group related elements in a form.</p>)
  .add('Default', () => (
    <Fieldset>
      <Legend>Colors</Legend>
      <Input.Checkbox name="example" value="green" label="Green" />
      <Input.Checkbox name="example" value="blue" label="Blue" />
      <Input.Checkbox name="example" value="yellow" label="Yellow" />
    </Fieldset>
  ));

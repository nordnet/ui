import React from 'react';
import { Fieldset, Input, Legend } from '../..';

export default {
  title: 'Molecules / Fieldset',
  parameters: {
    component: Fieldset,
  },
};

export const Docs = () => (
  <p>The Fieldset component is used to group related elements in a form.</p>
);

export const DefaultStory = {
  render: () => (
    <Fieldset>
      <Legend>Colors</Legend>
      <Input.Checkbox name="example" value="green" label="Green" />
      <Input.Checkbox name="example" value="blue" label="Blue" />
      <Input.Checkbox name="example" value="yellow" label="Yellow" />
    </Fieldset>
  ),

  name: 'Default',
};

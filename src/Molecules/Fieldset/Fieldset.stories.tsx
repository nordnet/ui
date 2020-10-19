import React from 'react';
import { Fieldset, Legend, Input } from '../..';

export default {
  title: 'Molecules / Fieldset',
  parameters: {
    component: Fieldset,
  },
};

export const docs = () => (
  <p>The Fieldset component is used to group related elements in a form.</p>
);

export const defaultStory = () => (
  <Fieldset>
    <Legend>Colors</Legend>
    <Input.Checkbox name="example" value="green" label="Green" />
    <Input.Checkbox name="example" value="blue" label="Blue" />
    <Input.Checkbox name="example" value="yellow" label="Yellow" />
  </Fieldset>
);

defaultStory.story = {
  name: 'Default',
};

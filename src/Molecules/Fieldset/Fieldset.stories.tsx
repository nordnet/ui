import React from 'react';
import { storiesOf } from '@storybook/react';
import { Fieldset } from '../../index';

/* eslint-disable jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
storiesOf('Molecules | Fieldset', module)
  .add('Docs', () => <p>The Fieldset component is used to group related elements in a form.</p>)
  .add('Default', () => (
    <Fieldset>
      <legend>Colors</legend>
      <label>
        <input type="checkbox" name="example" value="green" />
        Green
      </label>
      <label>
        <input type="checkbox" name="example" value="blue" />
        Blue
      </label>
      <label>
        <input type="checkbox" name="example" value="yellow" />
        Yellow
      </label>
    </Fieldset>
  ));

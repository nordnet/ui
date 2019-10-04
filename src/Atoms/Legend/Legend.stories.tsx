import React from 'react';
import { storiesOf } from '@storybook/react';
import { Legend } from '../..';

storiesOf('Atoms | Legend', module)
  .add('Docs', () => <p>The Legend component defines a caption for the Fieldset component.</p>)
  .add('Default', () => <Legend>Caption text</Legend>)
  .add('Looking like a label', () => <Legend styleType="label">Caption text</Legend>);

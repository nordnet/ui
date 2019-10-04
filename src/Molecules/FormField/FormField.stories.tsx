import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Flexbox, FormField } from '../..';

storiesOf('Molecules | FormField', module)
  .add('Docs', () => (
    <p>
      This component provides a label including the required look of the label. It also provides the
      displaying of error message and additional information.
    </p>
  ))
  .add('Default', () => (
    <FormField label="Label" fieldId="unique-id-1">
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ))
  .add('With group of items', () => (
    <FormField label="Caption to a group of items" fieldId="unique-id-1" group>
      <Flexbox container gutter={5}>
        <Flexbox item>
          <div style={{ background: 'aqua' }}>Pass in any children you want</div>
        </Flexbox>
        <Flexbox item>
          <div style={{ background: 'aqua' }}>Pass in any children you want</div>
        </Flexbox>
      </Flexbox>
    </FormField>
  ))
  .add('Required', () => (
    <FormField label="Label" fieldId="unique-id-1" required>
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ))
  .add('Error', () => (
    <FormField label="Label" error="error" fieldId="unique-id-2">
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ))
  .add('Extra info', () => (
    <FormField label="Label" extraInfo="Some extra info" fieldId="unique-id-2">
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ));

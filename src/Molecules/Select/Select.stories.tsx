import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';

const options = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' },
];

storiesOf('Molecules | Select', module)
  .add('Select with placeholder', () => (
    <div style={{ width: 200 }}>
      <Select options={options} placeholder="Select option" label="Options" />
    </div>
  ))
  .add('Select with placeholder and preselected value', () => (
    <Select options={options} value="Option 2" placeholder="Select option" label="Options" />
  ))
  .add('Select without placeholder', () => <Select options={options} label="Stocks" />)
  .add('Select with preselected value', () => (
    <Select options={options} value="Option 2" label="Stocks" />
  ))
  .add('Select with hidden label', () => (
    <Select options={options} value="Option 2" label="Stocks" hideLabel />
  ))
  .add('Select with prepended empty value', () => (
    <Select
      options={[{ label: 'All', value: '' }, ...options]}
      value=""
      label="Stocks"
      hideLabel
    />
  ));

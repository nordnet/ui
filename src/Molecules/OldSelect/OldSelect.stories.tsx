import React from 'react';
import OldSelect from '.';

const options = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' },
];

export default {
  title: 'DEPRECATED / Molecules / Select ',
};

export const selectWithPlaceholder = () => (
  <OldSelect options={options} placeholder="Select option" label="Options" />
);

selectWithPlaceholder.story = {
  name: 'Select with placeholder',
};

export const selectWithOverflowingPlaceholder = () => (
  <div style={{ width: 150 }}>
    <OldSelect
      options={[{ label: 'Reaaaaaaaaaally long option', value: 1 }]}
      value={1}
      label="Options"
    />
  </div>
);

selectWithOverflowingPlaceholder.story = {
  name: 'Select with overflowing placeholder',
};

export const selectWithPlaceholderAndPreselectedValue = () => (
  <OldSelect options={options} value="Option 2" placeholder="Select option" label="Options" />
);

selectWithPlaceholderAndPreselectedValue.story = {
  name: 'Select with placeholder and preselected value',
};

export const selectWithoutPlaceholder = () => <OldSelect options={options} label="Stocks" />;

selectWithoutPlaceholder.story = {
  name: 'Select without placeholder',
};

export const selectWithPreselectedValue = () => (
  <OldSelect options={options} value="Option 2" label="Stocks" />
);

selectWithPreselectedValue.story = {
  name: 'Select with preselected value',
};

export const selectWithHiddenLabel = () => (
  <OldSelect options={options} value="Option 2" label="Stocks" hideLabel />
);

selectWithHiddenLabel.story = {
  name: 'Select with hidden label',
};

export const selectWithPrependedEmptyValue = () => (
  <OldSelect
    options={[{ label: 'All', value: '' }, ...options]}
    value=""
    label="Stocks"
    hideLabel
  />
);

selectWithPrependedEmptyValue.story = {
  name: 'Select with prepended empty value',
};

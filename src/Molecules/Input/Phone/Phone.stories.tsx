import React from 'react';
import { Meta, Story } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { Flexbox, Input } from '../../..';
import { Props } from './Phone.types';

const { onChange } = actions('onBlur', 'onFocus', 'onChange');

export default {
  title: 'Molecules / Input / Phone',
  component: Input.Phone,
} as Meta;

const Template: Story<Props> = (args) => <Input.Phone {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  name: 'default-example',
  label: 'Phone number',
  placeholder: '123 456 789',
};
DefaultStory.storyName = 'Default';

export const prefilledDefaultValues = () => (
  <Input.Phone
    onChange={onChange}
    name="disabled-example"
    label="Phone number"
    defaultValue={{ countryCode: '46', phoneNumber: '123 456 789' }}
  />
);

export const autoFocus = () => (
  <Input.Phone
    name="default-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={onChange}
    autoFocus
  />
);

export const fullWidth = () => (
  <Input.Phone
    name="full-width-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={onChange}
    width="100%"
  />
);

export const withHelpText = () => (
  <Input.Phone
    name="with-help-text-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={onChange}
    extraInfo="Please fill in your phone number"
  />
);

export const hasError = () => (
  <Input.Phone
    name="has-error-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={onChange}
    error="Incorrect phone number"
  />
);

export const hasSuccess = () => (
  <Input.Phone
    name="has-success-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={onChange}
    success
  />
);

export const isDisabled = () => (
  <Input.Phone
    name="disabled-example"
    label="Phone number"
    defaultValue={{ countryCode: '46', phoneNumber: '123 456 789' }}
    disabled
  />
);

export const sortByCountry = () => (
  <Flexbox container direction="column" gutter={3}>
    <Input.Phone name="country-code-example" label="Sweden" sortByCountry="se" />
    <Input.Phone name="country-code-example" label="Denmark" sortByCountry="dk" />
    <Input.Phone name="country-code-example" label="Finland" sortByCountry="fi" />
    <Input.Phone name="country-code-example" label="Norway" sortByCountry="no" />
    <Input.Phone name="country-code-example" label="Other" sortByCountry="other" />
  </Flexbox>
);

export const EnableSearchComponent = Template.bind({});
EnableSearchComponent.args = {
  ...DefaultStory.args,
  name: 'enable-search-component-example',
  disableSearchComponent: false,
};

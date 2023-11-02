import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { Box, Flexbox, Input, Modal } from '../../..';
import { Props } from './Phone.types';

const { onChange } = actions('onBlur', 'onFocus', 'onChange');

export default {
  title: 'Molecules / Input / Phone',
  component: Input.Phone,
} as Meta;

const Template: StoryFn<Props> = (args) => <Input.Phone {...args} />;

export const DefaultStory = {
  render: Template,

  args: {
    name: 'default-example',
    label: 'Phone number',
    placeholder: '123 456 789',
  },

  name: 'Default',
};

export const PrefilledDefaultValues = () => (
  <Input.Phone
    onChange={onChange}
    name="disabled-example"
    label="Phone number"
    defaultValue={{ countryCode: '46', phoneNumber: '123 456 789' }}
  />
);

export const AutoFocus = () => (
  <Input.Phone
    name="default-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={onChange}
    autoFocus
  />
);

export const FullWidth = () => (
  <Input.Phone
    name="full-width-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={onChange}
    width="100%"
  />
);

export const WithHelpText = () => (
  <Input.Phone
    name="with-help-text-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={onChange}
    extraInfo="Please fill in your phone number"
  />
);

export const HasError = () => (
  <Input.Phone
    name="has-error-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={onChange}
    error="Incorrect phone number"
  />
);

export const HasSuccess = () => (
  <Input.Phone
    name="has-success-example"
    label="Phone number"
    placeholder="123 456 789"
    onChange={onChange}
    success
  />
);

export const IsDisabled = () => (
  <Input.Phone
    name="disabled-example"
    label="Phone number"
    defaultValue={{ countryCode: '46', phoneNumber: '123 456 789' }}
    disabled
  />
);

export const SortByCountry = () => (
  <Flexbox container direction="column" gap={3}>
    <Input.Phone name="country-code-example" label="Sweden" sortByCountry="se" />
    <Input.Phone name="country-code-example" label="Denmark" sortByCountry="dk" />
    <Input.Phone name="country-code-example" label="Finland" sortByCountry="fi" />
    <Input.Phone name="country-code-example" label="Norway" sortByCountry="no" />
    <Input.Phone name="country-code-example" label="Other" sortByCountry="other" />
  </Flexbox>
);

export const EnableSearchComponent = {
  render: Template,

  args: {
    ...DefaultStory.args,
    name: 'enable-search-component-example',
    disableSearchComponent: false,
  },
};

export const WithLabelTooltipInsideModal = {
  render: () => {
    const Example = () => {
      const [open, setOpen] = useState(true);

      const onOpen = () => {
        setOpen(true);
      };

      const onClose = () => {
        setOpen(false);
      };

      return (
        <>
          <button type="button" onClick={onOpen}>
            Open modal
          </button>
          <Modal onClose={onClose} title="Dialog information" open={open}>
            <Box mb={2}>
              <Input.Phone
                name="country-code-example"
                label="Sweden"
                sortByCountry="se"
                labelTooltipInModal
                labelTooltip="Tooltip content"
              />
            </Box>
          </Modal>
        </>
      );
    };
    return <Example />;
  },

  name: 'With label tooltip inside modal',
};

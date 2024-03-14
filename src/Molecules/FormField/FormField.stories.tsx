import React, { useState } from 'react';
import { Box, Flexbox, FormField, Modal } from '../..';

export default {
  title: 'Molecules / FormField',
  parameters: {
    component: FormField,
  },
};

export const Docs = () => (
  <p>
    This component provides a label including the required look of the label. It also provides the
    displaying of error message and additional information.
  </p>
);

export const DefaultStory = {
  render: () => (
    <FormField label="Label" fieldId="default-input-1">
      <input type="text" id="default-input-1" />
    </FormField>
  ),

  name: 'Default',
};

export const WithGroupOfItems = {
  render: () => (
    <FormField label="Make a choice" group>
      <Flexbox container gap={5}>
        <FormField label="Red pill" fieldId="group-red-1">
          <input type="radio" id="group-red-1" name="red-or-blue" />
        </FormField>
        <FormField label="Blue pill" fieldId="group-blue-1">
          <input type="radio" id="group-blue-1" name="red-or-blue" />
        </FormField>
      </Flexbox>
    </FormField>
  ),

  name: 'With group of items',
};

export const RequiredStory = {
  render: () => (
    <FormField label="Label" fieldId="required-id-1" required>
      <input type="text" id="required-id-1" />
    </FormField>
  ),

  name: 'Required',
};

export const ErrorStory = {
  render: () => (
    <FormField label="Label" error="error" fieldId="error-id-1">
      <input type="text" id="error-id-1" />
    </FormField>
  ),

  name: 'Error',
};

export const ExtraInfoStory = {
  render: () => (
    <FormField label="Label" extraInfo="Some extra info" fieldId="extra-id-1">
      <input type="text" id="extra-id-1" />
    </FormField>
  ),

  name: 'Extra info',
};

export const WithLabelTooltip = {
  render: () => (
    <FormField label="Label" labelTooltip="Tooltip content" fieldId="tooltip-id-1">
      <input type="text" id="tooltip-id-1" />{' '}
    </FormField>
  ),

  name: 'With label tooltip',
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
              <FormField
                label="Label"
                labelTooltip="Tooltip content"
                fieldId="tooltip-modal-id-1"
                labelTooltipInModal
              >
                <input type="text" id="tooltip-modal-id-1" />{' '}
              </FormField>
            </Box>
          </Modal>
        </>
      );
    };
    return <Example />;
  },

  name: 'With label tooltip inside modal',
};

export const WithHiddenLabel = {
  render: () => (
    <FormField label="Label" fieldId="hidden-id-1" hideLabel>
      <input type="text" id="hidden-id-1" />{' '}
    </FormField>
  ),
};

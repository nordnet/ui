import React, { useState } from 'react';
import { Box, Flexbox, FormField, Modal } from '../..';

export default {
  title: 'Molecules / FormField',
  parameters: {
    component: FormField,
  },
};

export const docs = () => (
  <p>
    This component provides a label including the required look of the label. It also provides the
    displaying of error message and additional information.
  </p>
);

export const defaultStory = {
  render: () => (
    <FormField label="Label" fieldId="unique-id-1">
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ),

  name: 'Default',
};

export const withGroupOfItems = {
  render: () => (
    <FormField label="Caption to a group of items" fieldId="unique-id-1" group>
      <Flexbox container gap={5}>
        <Flexbox item>
          <div style={{ background: 'aqua' }}>Pass in any children you want</div>
        </Flexbox>
        <Flexbox item>
          <div style={{ background: 'aqua' }}>Pass in any children you want</div>
        </Flexbox>
      </Flexbox>
    </FormField>
  ),

  name: 'With group of items',
};

export const requiredStory = {
  render: () => (
    <FormField label="Label" fieldId="unique-id-1" required>
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ),

  name: 'Required',
};

export const errorStory = {
  render: () => (
    <FormField label="Label" error="error" fieldId="unique-id-2">
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ),

  name: 'Error',
};

export const extraInfoStory = {
  render: () => (
    <FormField label="Label" extraInfo="Some extra info" fieldId="unique-id-2">
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ),

  name: 'Extra info',
};

export const withLabelTooltip = {
  render: () => (
    <FormField label="Label" labelTooltip="Tooltip content" fieldId="unique-id-1">
      <div style={{ background: 'aqua' }}>Pass in any children you want</div>
    </FormField>
  ),

  name: 'With label tooltip',
};

export const withLabelTooltipInsideModal = {
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
                fieldId="unique-id-1"
                labelTooltipInModal
              >
                <div style={{ background: 'aqua' }}>Pass in any children you want</div>
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

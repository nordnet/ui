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

export const defaultStory = () => (
  <FormField label="Label" fieldId="unique-id-1">
    <div style={{ background: 'aqua' }}>Pass in any children you want</div>
  </FormField>
);

defaultStory.story = {
  name: 'Default',
};

export const withGroupOfItems = () => (
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
);

withGroupOfItems.story = {
  name: 'With group of items',
};

export const requiredStory = () => (
  <FormField label="Label" fieldId="unique-id-1" required>
    <div style={{ background: 'aqua' }}>Pass in any children you want</div>
  </FormField>
);

requiredStory.story = {
  name: 'Required',
};

export const errorStory = () => (
  <FormField label="Label" error="error" fieldId="unique-id-2">
    <div style={{ background: 'aqua' }}>Pass in any children you want</div>
  </FormField>
);

errorStory.story = {
  name: 'Error',
};

export const extraInfoStory = () => (
  <FormField label="Label" extraInfo="Some extra info" fieldId="unique-id-2">
    <div style={{ background: 'aqua' }}>Pass in any children you want</div>
  </FormField>
);

extraInfoStory.story = {
  name: 'Extra info',
};

export const withLabelTooltip = () => (
  <FormField label="Label" labelTooltip="Tooltip content" fieldId="unique-id-1">
    <div style={{ background: 'aqua' }}>Pass in any children you want</div>
  </FormField>
);

withLabelTooltip.story = {
  name: 'With label tooltip',
};

export const withLabelTooltipInsideModal = () => {
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
};

withLabelTooltipInsideModal.story = {
  name: 'With label tooltip inside modal',
};

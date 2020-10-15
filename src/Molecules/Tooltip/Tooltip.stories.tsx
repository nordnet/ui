import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Tooltip, Modal, Drawer } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Molecules | Tooltip',
  parameters: {
    component: Tooltip,
  },
};

const label = 'Information in a Tooltip should not be vital for the user to complete a task';

const Button = styled.button`
  display: block;
`;

export const defaultStory = () => (
  <Tooltip label={label}>
    <Button type="button">Hover me</Button>
  </Tooltip>
);

defaultStory.story = {
  name: 'Default',
};

export const withPosition = () => (
  <Display
    items={[
      {
        component: (
          <Tooltip label={label} position="bottom">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'bottom',
      },
      {
        component: (
          <Tooltip label={label} position="left">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'left',
      },
      {
        component: (
          <Tooltip label={label} position="top">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'top',
      },
      {
        component: (
          <Tooltip label={label} position="right">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'right',
      },
    ]}
  />
);

withPosition.story = {
  name: 'With position defined',
};

export const zindexWars = () => {
  const Example = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
      setOpen(true);
    };

    const closeModal = () => {
      setOpen(false);
    };

    return (
      <Drawer>
        <Box mb={4}>
          <Tooltip label={label}>
            <Button>Hover me</Button>
          </Tooltip>
        </Box>
        <Button onClick={openModal}>Open modal</Button>
        <Modal open={open} onClose={closeModal}>
          <Tooltip label={label} inModal>
            <Button>Hover me</Button>
          </Tooltip>
        </Modal>
      </Drawer>
    );
  };

  return <Example />;
};

zindexWars.story = {
  name: 'Integration: With Drawer and Modal',
};

export const customMaxWidth = () => (
  <Tooltip label={label} maxWidth={100}>
    <Button type="button">Hover me</Button>
  </Tooltip>
);

customMaxWidth.story = {
  name: 'Custom max-width',
};

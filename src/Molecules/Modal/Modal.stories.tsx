import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Modal, Typography } from '../..';

storiesOf('Molecules | Modal', module)
  .add('Default', () => {
    const Example = () => {
      const [open, setOpen] = useState(true);

      const onOpen = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };

      return (
        <div>
          <button type="button" onClick={onOpen}>
            Open modal
          </button>
          <Modal open={open} onClose={onClose} title="Title">
            <Typography type="primary">
              Page contents inside the PageWrapper can be anything.
            </Typography>
          </Modal>
        </div>
      );
    };
    return <Example />;
  })
  .add('Without header', () => {
    const Example = () => {
      const [open, setOpen] = useState(false);

      const onOpen = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };

      return (
        <div>
          <button type="button" onClick={onOpen}>
            Open modal
          </button>
          <Modal open={open} onClose={onClose}>
            <Typography type="primary">
              Page contents inside the PageWrapper can be anything.
            </Typography>
          </Modal>
        </div>
      );
    };
    return <Example />;
  });

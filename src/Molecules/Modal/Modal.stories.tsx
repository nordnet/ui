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
          <Modal onClose={onClose} title="Confirm order" open={open}>
            <Typography type="primary">Please confirm your oder</Typography>
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
          <Modal onClose={onClose} open={open}>
            <Typography type="primary">Confirm order</Typography>
          </Modal>
        </div>
      );
    };
    return <Example />;
  });

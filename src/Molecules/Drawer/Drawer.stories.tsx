import React, { useState } from 'react';
import { Drawer, Typography, Box } from '../../index';

export default {
  title: 'Molecules | Drawer',
  parameters: {
    component: Drawer,
  },
};

export const defaultStory = () => {
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
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Drawer onClose={onClose} title="Dialog information" open={open}>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Modals should be used with care as they are quite intrusive on the user experience and
              demand immediate attention (while also blocking all other actions on the site). Always
              consider if you can solve a problem in another way first before you choose to go with
              the modal.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              That being said they are a good tool if you need to grab the users attention, either
              to communicate something very important or make them take an action before proceeding.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Nielsen/Norman has an excellent article about their usage here
            </Typography>
          </Box>
          <Typography type="primary" as="p">
            <a href="https:// www.nngroup.com/articles/modal-nonmodal-dialog/">
              https:// www.nngroup.com/articles/modal-nonmodal-dialog/
            </a>
          </Typography>
        </Drawer>
      </div>
    );
  };
  return <Example />;
};

defaultStory.story = {
  name: 'Default',
};

export const withoutHeader = () => {
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
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Drawer onClose={onClose} open={open}>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Modals should be used with care as they are quite intrusive on the user experience and
              demand immediate attention (while also blocking all other actions on the site). Always
              consider if you can solve a problem in another way first before you choose to go with
              the modal.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              That being said they are a good tool if you need to grab the users attention, either
              to communicate something very important or make them take an action before proceeding.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Nielsen/Norman has an excellent article about their usage here
            </Typography>
          </Box>
          <Typography type="primary" as="p">
            <a href="https:// www.nngroup.com/articles/modal-nonmodal-dialog/">
              https:// www.nngroup.com/articles/modal-nonmodal-dialog/
            </a>
          </Typography>
        </Drawer>
      </div>
    );
  };
  return <Example />;
};

withoutHeader.story = {
  name: 'Without header',
};

export const uncontrolledBehavior = () => {
  const Example = () => {
    return (
      <div>
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Drawer title="Dialog information">
          <Box mb={2}>
            <Typography type="primary" as="p">
              Modals should be used with care as they are quite intrusive on the user experience and
              demand immediate attention (while also blocking all other actions on the site). Always
              consider if you can solve a problem in another way first before you choose to go with
              the modal.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              That being said they are a good tool if you need to grab the users attention, either
              to communicate something very important or make them take an action before proceeding.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Nielsen/Norman has an excellent article about their usage here
            </Typography>
          </Box>
          <Typography type="primary" as="p">
            <a href="https:// www.nngroup.com/articles/modal-nonmodal-dialog/">
              https:// www.nngroup.com/articles/modal-nonmodal-dialog/
            </a>
          </Typography>
        </Drawer>
      </div>
    );
  };
  return <Example />;
};

uncontrolledBehavior.story = {
  name: 'Uncontrolled behavior',
};

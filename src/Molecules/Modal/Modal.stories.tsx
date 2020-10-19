import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Typography, Box, Button, Flexbox, Icon, FadedScroll } from '../..';

const ScrollMaker = styled.div`
  background-image: linear-gradient(
    ${(p) => p.theme.color.positive},
    ${(p) => p.theme.color.negative}
  );
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 200vh;
`;

export default {
  title: 'Molecules / Modal',
  parameters: {
    component: Modal,
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
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal onClose={onClose} title="Dialog information" open={open}>
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
        </Modal>
      </div>
    );
  };
  return <Example />;
};

defaultStory.story = {
  name: 'Default',
};

export const footerStory = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <div>
        <Typography type="primary" as="p">
          This is a footer which is a ReactNode, which could e.g. contain a button or only text
        </Typography>
        <Button variant="primary" onClick={() => {}}>
          Button
        </Button>
      </div>
    );

    return (
      <div>
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal onClose={onClose} title="Dialog information" open={open} footer={footer}>
          <FadedScroll enableMobileFade>
            <Box mb={2}>
              <Typography type="primary" as="p">
                Modals should be used with care as they are quite intrusive on the user experience
                and demand immediate attention (while also blocking all other actions on the site).
                Always consider if you can solve a problem in another way first before you choose to
                go with the modal. Modals should be used with care as they are quite intrusive on
                the user experience and demand immediate attention (while also blocking all other
                actions on the site). Always consider if you can solve a problem in another way
                first before you choose to go with the modal.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography type="primary" as="p">
                That being said they are a good tool if you need to grab the users attention, either
                to communicate something very important or make them take an action before
                proceeding. That being said they are a good tool if you need to grab the users
                attention, either to communicate something very important or make them take an
                action before proceeding.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography type="primary" as="p">
                Modals should be used with care as they are quite intrusive on the user experience
                and demand immediate attention (while also blocking all other actions on the site).
                Always consider if you can solve a problem in another way first before you choose to
                go with the modal. Modals should be used with care as they are quite intrusive on
                the user experience and demand immediate attention (while also blocking all other
                actions on the site). Always consider if you can solve a problem in another way
                first before you choose to go with the modal.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography type="primary" as="p">
                Modals should be used with care as they are quite intrusive on the user experience
                and demand immediate attention (while also blocking all other actions on the site).
                Always consider if you can solve a problem in another way first before you choose to
                go with the modal. Modals should be used with care as they are quite intrusive on
                the user experience and demand immediate attention (while also blocking all other
                actions on the site). Always consider if you can solve a problem in another way
                first before you choose to go with the modal.
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
          </FadedScroll>
        </Modal>
      </div>
    );
  };
  return <Example />;
};

footerStory.story = {
  name: 'Integration: Modal with a footer and Button',
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
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal onClose={onClose} open={open}>
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
        </Modal>
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
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal title="Dialog information">
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
        </Modal>
      </div>
    );
  };
  return <Example />;
};

uncontrolledBehavior.story = {
  name: 'Uncontrolled behavior',
};

export const hideClose = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    const hideCloseButton = true;

    return (
      <div>
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal onClose={onClose} title="Dialog information" open={open} hideClose={hideCloseButton}>
          <Box mb={2}>
            <Typography type="primary" as="p">
              The close button in the upper right corner is now hidden because the prop hideClose is
              true.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  };
  return <Example />;
};

hideClose.story = {
  name: 'Hide Close button',
};

export const nodeAsTitle = () => {
  const Title = (
    <Flexbox container gutter={2} alignItems="center">
      <Icon.Bolt />
      <Typography type="title2" as="h2">
        React Node Title
      </Typography>
      <Icon.Bolt />
    </Flexbox>
  );
  const Example = () => {
    return (
      <div>
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal title={Title}>
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
        </Modal>
      </div>
    );
  };
  return <Example />;
};

export const closeOnBackdropClickStory = () => {
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
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal onClose={onClose} title="Dialog information" open={open} closeOnBackdropClick>
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
        </Modal>
      </div>
    );
  };
  return <Example />;
};

nodeAsTitle.story = {
  name: 'Node as Title',
};

export const notFullScreenMobile = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <Flexbox container justifyContent="flex-end">
        <Box mr={2}>
          <Button variant="secondary" size="l" onClick={() => {}}>
            Cancel
          </Button>
        </Box>
        <Button size="l" onClick={() => {}}>
          Confirm
        </Button>
      </Flexbox>
    );

    return (
      <div>
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
        <ScrollMaker />
        <Modal
          onClose={onClose}
          title="Dialog information"
          open={open}
          footer={footer}
          fullScreenMobile={false}
        >
          <Box mb={2}>
            <Typography type="primary" as="p">
              Resize the window to see the result of setting fullScreenMobile to false.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  };
  return <Example />;
};

export const statusModal = () => {
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
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal
          onClose={onClose}
          open={open}
          closeOnBackdropClick
          isStatusModal
          fullScreenMobile={false}
        >
          <Box md={{ pt: 5 }}>
            <Flexbox container direction="column" alignItems="center" gutter={6} md={{ gutter: 7 }}>
              <Icon.CheckMarkCircle color={(t) => t.color.positive} size={24} />
              <Flexbox container justifyContent="center">
                <Typography type="title2">Title</Typography>
              </Flexbox>
              <Flexbox container justifyContent="center">
                <Typography type="primary">Lorum ipsum</Typography>
              </Flexbox>
              <Flexbox item>
                <Box pt={2}>
                  <Button size="l">Ok</Button>
                </Box>
              </Flexbox>
            </Flexbox>
          </Box>
        </Modal>
      </div>
    );
  };
  return <Example />;
};

notFullScreenMobile.story = {
  name: 'Not full screen mobile',
};

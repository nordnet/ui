import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  FadedScroll,
  Flexbox,
  OldIcon,
  Modal,
  Typography,
  SelectionCard,
} from '../..';

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
      <>
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
      </>
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
      <>
        <Typography type="primary" as="p">
          This is a footer which is a ReactNode, which could e.g. contain a button or only text
        </Typography>
        <Button variant="primary" onClick={() => {}}>
          Button
        </Button>
      </>
    );

    return (
      <>
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
      </>
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
      <>
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
      </>
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
      <>
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
      </>
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
      <>
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
      </>
    );
  };
  return <Example />;
};

hideClose.story = {
  name: 'Hide Close button',
};

export const nodeAsTitle = () => {
  const Title = (
    <Flexbox container gap={2} alignItems="center">
      <OldIcon.Bolt />
      <Typography type="title2" as="h2">
        React Node Title
      </Typography>
      <OldIcon.Bolt />
    </Flexbox>
  );
  const Example = () => {
    return (
      <>
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
      </>
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
      <>
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
      </>
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
      <>
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
      </>
    );
  };
  return <Example />;
};

notFullScreenMobile.story = {
  name: 'Not full screen mobile',
};

notFullScreenMobile.parameters = {
  viewport: {
    defaultViewport: 'iphone6',
  },
};

export const notFullScreenMobileFixedBottom = () => {
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
      <>
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
          fixedBottomMobile
        >
          <Box mb={2}>
            <Typography type="primary" as="p">
              Resize the window to see the result of setting fullScreenMobile to false.
            </Typography>
          </Box>
        </Modal>
      </>
    );
  };
  return <Example />;
};

notFullScreenMobileFixedBottom.story = {
  name: 'Not full screen mobile fixed at bottom',
};

notFullScreenMobileFixedBottom.parameters = {
  viewport: {
    defaultViewport: 'iphone6',
  },
};

export const modalStandardSmall = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <Flexbox container alignItems="center" justifyContent="space-between">
        <Flexbox container item alignItems="center">
          <Box mr={2}>
            <OldIcon.ThinArrow direction="left" size={4} color={(t) => t.color.cta} />
          </Box>
          <Typography type="primary" weight="bold">
            Back
          </Typography>
        </Flexbox>
        <Flexbox container item>
          <Box mr={2}>
            <Button variant="secondary" size="l" onClick={() => {}}>
              Button
            </Button>
          </Box>
          <Button size="l" onClick={() => {}}>
            Button
          </Button>
        </Flexbox>
      </Flexbox>
    );

    return (
      <>
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal
          onClose={onClose}
          title="Header"
          open={open}
          fullScreenMobile={false}
          footer={footer}
        >
          <Box>
            <Typography type="primary" as="p">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered the undoubtable
              source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et
              Malorum (The Extremes of Good and
            </Typography>
          </Box>
        </Modal>
      </>
    );
  };
  return <Example />;
};

modalStandardSmall.story = {
  name: 'Modal Standard Small',
};

modalStandardSmall.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};

export const modalStandardMedium = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <Flexbox container alignItems="center" justifyContent="space-between">
        <Flexbox container item alignItems="center">
          <Box mr={2}>
            <OldIcon.ThinArrow direction="left" size={4} color={(t) => t.color.cta} />
          </Box>
          <Typography type="primary" weight="bold">
            Back
          </Typography>
        </Flexbox>
        <Flexbox container item>
          <Box mr={2}>
            <Button variant="secondary" size="l" onClick={() => {}}>
              Button
            </Button>
          </Box>
          <Button size="l" onClick={() => {}}>
            Button
          </Button>
        </Flexbox>
      </Flexbox>
    );

    return (
      <Modal onClose={onClose} title="Header" open={open} fullScreenMobile={false} footer={footer}>
        <Box>
          <Typography type="primary" as="p">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The
            Extremes of Good and
          </Typography>
        </Box>
      </Modal>
    );
  };
  return <Example />;
};

modalStandardMedium.story = {
  name: 'Modal Standard Medium',
};

modalStandardMedium.parameters = {
  viewport: {
    defaultViewport: 'tabletLg',
  },
};

export const modalStandardLarge = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <Flexbox container alignItems="center" justifyContent="space-between">
        <Flexbox container item alignItems="center">
          <Box mr={2}>
            <OldIcon.ThinArrow direction="left" size={4} color={(t) => t.color.cta} />
          </Box>
          <Typography type="primary" weight="bold">
            Back
          </Typography>
        </Flexbox>
        <Flexbox container item>
          <Box mr={2}>
            <Button variant="secondary" size="l" onClick={() => {}}>
              Button
            </Button>
          </Box>
          <Button size="l" onClick={() => {}}>
            Button
          </Button>
        </Flexbox>
      </Flexbox>
    );

    return (
      <Modal onClose={onClose} title="Header" open={open} fullScreenMobile={false} footer={footer}>
        <Box>
          <Typography type="primary" as="p">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The
            Extremes of Good and
          </Typography>
        </Box>
      </Modal>
    );
  };
  return <Example />;
};

modalStandardLarge.story = {
  name: 'Modal Standard Large',
};

modalStandardLarge.parameters = {
  viewport: {
    defaultViewport: 'desktopLg',
  },
};

export const modalStandardLargeWithScroll = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <Flexbox container alignItems="center" justifyContent="space-between">
        <Flexbox container item alignItems="center">
          <Box mr={2}>
            <OldIcon.ThinArrow direction="left" size={4} color={(t) => t.color.cta} />
          </Box>
          <Typography type="primary" weight="bold">
            Back
          </Typography>
        </Flexbox>
        <Flexbox container item>
          <Box mr={2}>
            <Button variant="secondary" size="l" onClick={() => {}}>
              Button
            </Button>
          </Box>
          <Button size="l" onClick={() => {}}>
            Button
          </Button>
        </Flexbox>
      </Flexbox>
    );

    return (
      <>
        <button type="button" onClick={() => {}}>
          Open modal
        </button>
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal
          onClose={onClose}
          title="Header"
          open={open}
          fullScreenMobile={false}
          footer={footer}
        >
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
          </FadedScroll>
        </Modal>
      </>
    );
  };
  return <Example />;
};

modalStandardLargeWithScroll.story = {
  name: 'Modal Standard Large with scroll',
};

modalStandardLargeWithScroll.parameters = {
  viewport: {
    defaultViewport: 'desktopLgMax90Height',
  },
};

export const modalStandardMobile = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <Flexbox container gap={2}>
        <Flexbox container item flex="1">
          <Button variant="secondary" size="l" onClick={() => {}} fullWidth>
            Cancel
          </Button>
        </Flexbox>
        <Flexbox container item flex="1">
          <Button size="l" onClick={() => {}} fullWidth>
            Confirm
          </Button>
        </Flexbox>
      </Flexbox>
    );

    return (
      <>
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
        <ScrollMaker />
        <Modal
          onClose={onClose}
          title="Dialog information"
          open={open}
          footer={footer}
          fullScreenMobile
        >
          <Box mb={2}>
            <Typography type="primary" as="p">
              Modals should be used with care as they are quite intrusive on the user experience and
              demand immediate attention (while also blocking all other actions on the site). Always
              consider if you can solve a problem in another way first before you choose to go with
              the modal. Modals should be used with care as they are quite intrusive on the user
              experience and demand immediate attention (while also blocking all other actions on
              the site). Always consider if you can solve a problem in another way first before you
              choose to go with the modal.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Modals should be used with care as they are quite intrusive on the user experience and
              demand immediate attention (while also blocking all other actions on the site). Always
              consider if you can solve a problem in another way first before you choose to go with
              the modal. Modals should be used with care as they are quite intrusive on the user
              experience. Modals should be used with care as they are
            </Typography>
          </Box>
        </Modal>
      </>
    );
  };
  return <Example />;
};

modalStandardMobile.story = {
  name: 'Modal Standard Mobile, 2 Buttons, Fullscreen',
};

modalStandardMobile.parameters = {
  viewport: {
    defaultViewport: 'iphone6',
  },
};

export const modalStandardMobileScroll = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <Flexbox container>
        <Flexbox container item flex="1">
          <Button size="l" onClick={() => {}} fullWidth>
            Confirm
          </Button>
        </Flexbox>
      </Flexbox>
    );

    return (
      <>
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
        <ScrollMaker />
        <Modal
          onClose={onClose}
          title="Dialog information"
          open={open}
          footer={footer}
          fullScreenMobile
        >
          <Box mb={2}>
            <Typography type="primary" as="p">
              Modals should be used with care as they are quite intrusive on the user experience and
              demand immediate attention (while also blocking all other actions on the site). Always
              consider if you can solve a problem in another way first before you choose to go with
              the modal. Modals should be used with care as they are quite intrusive on the user
              experience and demand immediate attention (while also blocking all other actions on
              the site). Always consider if you can solve a problem in another way first before you
              choose to go with the modal.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Modals should be used with care as they are quite intrusive on the user experience and
              demand immediate attention (while also blocking all other actions on the site). Always
              consider if you can solve a problem in another way first before you choose to go with
              the modal. Modals should be used with care as they are quite intrusive on the user
              experience. Modals should be used with care as they are
            </Typography>
          </Box>
        </Modal>
      </>
    );
  };
  return <Example />;
};

modalStandardMobileScroll.story = {
  name: 'Modal Standard Mobile, 1 Button, Fullscreen',
};

modalStandardMobileScroll.parameters = {
  viewport: {
    defaultViewport: 'iphone6',
  },
};

export const modalMobileSmall = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <Flexbox container gap={2}>
        <Flexbox container item flex="1">
          <Button variant="secondary" size="l" onClick={() => {}} fullWidth>
            Button
          </Button>
        </Flexbox>
        <Flexbox container item flex="1">
          <Button size="l" onClick={() => {}} fullWidth>
            Button
          </Button>
        </Flexbox>
      </Flexbox>
    );

    return (
      <>
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
        <ScrollMaker />
        <Modal
          onClose={onClose}
          title="Header"
          open={open}
          footer={footer}
          fullScreenMobile={false}
        >
          <Box mb={2}>
            <Typography type="primary" as="p">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered the undoubtable
            </Typography>
          </Box>
        </Modal>
      </>
    );
  };
  return <Example />;
};

modalMobileSmall.story = {
  name: 'Modal Standard Mobile, 2 Buttons, Small',
};

modalMobileSmall.parameters = {
  viewport: {
    defaultViewport: 'iphone6',
  },
};

export const modalMobileSmallOneButton = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <Flexbox container>
        <Flexbox container item flex="1">
          <Button size="l" onClick={() => {}} fullWidth>
            Button
          </Button>
        </Flexbox>
      </Flexbox>
    );

    return (
      <>
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
        <ScrollMaker />
        <Modal
          onClose={onClose}
          title="Header"
          open={open}
          footer={footer}
          fullScreenMobile={false}
        >
          <Box mb={2}>
            <Typography type="primary" as="p">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered the undoubtable
            </Typography>
          </Box>
        </Modal>
      </>
    );
  };
  return <Example />;
};

modalMobileSmallOneButton.story = {
  name: 'Modal Standard Mobile, 1 Button, Small',
};

modalMobileSmallOneButton.parameters = {
  viewport: {
    defaultViewport: 'iphone6',
  },
};

export const modalMobileFullscreenWithScroll = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <Flexbox container gap={2}>
        <Flexbox container item flex="1">
          <Button variant="secondary" size="l" onClick={() => {}} fullWidth>
            Button
          </Button>
        </Flexbox>
        <Flexbox container item flex="1">
          <Button size="l" onClick={() => {}} fullWidth>
            Button
          </Button>
        </Flexbox>
      </Flexbox>
    );

    return (
      <>
        <button type="button" onClick={() => {}}>
          Open modal
        </button>
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal onClose={onClose} title="Header" open={open} fullScreenMobile footer={footer}>
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
                go with the modal. Modals
              </Typography>
            </Box>
          </FadedScroll>
        </Modal>
      </>
    );
  };
  return <Example />;
};

modalMobileFullscreenWithScroll.story = {
  name: 'Modal Standard Mobile with scroll, Fullscreen',
};

modalMobileFullscreenWithScroll.parameters = {
  viewport: {
    defaultViewport: 'iphone6',
  },
};

export const modalMobileFullscreenWithScrollTwoButtons = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onClose = () => {
      setOpen(false);
    };

    const footer = (
      <Flexbox container>
        <Flexbox container item flex="1">
          <Button size="l" onClick={() => {}} fullWidth>
            Button
          </Button>
        </Flexbox>
      </Flexbox>
    );

    return (
      <>
        <button type="button" onClick={() => {}}>
          Open modal
        </button>
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal onClose={onClose} title="Header" open={open} fullScreenMobile footer={footer}>
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
          </FadedScroll>
        </Modal>
      </>
    );
  };
  return <Example />;
};

modalMobileFullscreenWithScrollTwoButtons.story = {
  name: 'Modal Standard Mobile With Scroll, One Button, Fullscreen',
};

modalMobileFullscreenWithScrollTwoButtons.parameters = {
  viewport: {
    defaultViewport: 'iphone6',
  },
};

export const modalWithAnimationComplete = () => {
  const Example = () => {
    const [text, setText] = useState('initial text');

    return (
      <>
        <ScrollMaker />
        <Modal
          title="Dialog information"
          onAnimationComplete={() => setText('animation complete text')}
        >
          <Box mb={2}>
            <Typography type="primary" as="p">
              {text}
            </Typography>
          </Box>
        </Modal>
      </>
    );
  };
  return <Example />;
};

modalWithAnimationComplete.story = {
  name: 'Animation Complete',
};

export const modalWithoutBackdrop = () => {
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
        <ScrollMaker />
        {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
        <Modal onClose={onClose} title="Dialog information" open={open} showBackdrop={false}>
          <Box mb={2}>
            <Typography type="primary" as="p">
              Modals should be used with care as they are quite intrusive on the user experience and
              demand immediate attention (while also blocking all other actions on the site). Always
              consider if you can solve a problem in another way first before you choose to go with
              the modal.
            </Typography>
          </Box>
        </Modal>
      </>
    );
  };
  return <Example />;
};

modalWithoutBackdrop.story = {
  name: 'Modal without backdrop',
};

export const modalWithDisabledEscapePress = () => {
  return (
    <Modal
      onClose={() => {
        // eslint-disable-next-line no-alert
        alert('This should never be called when pressing the escape-key');
      }}
      title="Dialog information"
      open
      closeOnEscapePress={false}
    >
      <Box mb={2}>
        <Typography type="primary" as="p">
          Pressing the escape-key will usually call the modal&apos;s onClose function. The prop
          closeOnEscapePress=false will prevent this functionality.
        </Typography>
      </Box>
    </Modal>
  );
};

modalWithDisabledEscapePress.story = {
  name: 'Modal with disabled escape-key press',
};

export const modalWithProgressIndicator = () => {
  const Example = () => {
    const [value, setValue] = useState(false);

    return (
      <Modal
        onClose={() => {
          // eslint-disable-next-line no-alert
          alert('This should never be called when pressing the escape-key');
        }}
        title="Modal with progress indicator "
        open
        progressIndicator={{ numberOfSteps: 3, currentStep: 2 }}
        progressIndicatorDescription="Find investments"
        fixedBottomMobile
        fullScreenMobile={false}
      >
        <Flexbox container gap={2}>
          <Flexbox item width="50%">
            <SelectionCard
              border
              title="Controlled selection card"
              text="This component is controlled"
              selected={value}
              onChange={() => setValue(!value)}
            />
          </Flexbox>
          <Flexbox item width="50%">
            <SelectionCard
              border
              title="Controlled selection card"
              text="This component is controlled"
              selected={value}
              onChange={() => setValue(!value)}
            />
          </Flexbox>
        </Flexbox>
      </Modal>
    );
  };
  return <Example />;
};
modalWithProgressIndicator.story = {
  name: 'Modal with progress indicator',
};

import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  FadedScroll,
  Flexbox,
  Modal,
  Typography,
  SelectionCard,
  Icon,
  useMedia,
  Illustration,
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

export const Default = {
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
          <ScrollMaker />
          {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
          <Modal onClose={onClose} title="Dialog information" open={open}>
            <Box mb={2}>
              <Typography type="primary" as="p">
                Modals should be used with care as they are quite intrusive on the user experience
                and demand immediate attention (while also blocking all other actions on the site).
                Always consider if you can solve a problem in another way first before you choose to
                go with the modal.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography type="primary" as="p">
                That being said they are a good tool if you need to grab the users attention, either
                to communicate something very important or make them take an action before
                proceeding.
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
  },
};

export const FooterStory = {
  render: () => {
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
                  and demand immediate attention (while also blocking all other actions on the
                  site). Always consider if you can solve a problem in another way first before you
                  choose to go with the modal. Modals should be used with care as they are quite
                  intrusive on the user experience and demand immediate attention (while also
                  blocking all other actions on the site). Always consider if you can solve a
                  problem in another way first before you choose to go with the modal.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography type="primary" as="p">
                  That being said they are a good tool if you need to grab the users attention,
                  either to communicate something very important or make them take an action before
                  proceeding. That being said they are a good tool if you need to grab the users
                  attention, either to communicate something very important or make them take an
                  action before proceeding.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography type="primary" as="p">
                  Modals should be used with care as they are quite intrusive on the user experience
                  and demand immediate attention (while also blocking all other actions on the
                  site). Always consider if you can solve a problem in another way first before you
                  choose to go with the modal. Modals should be used with care as they are quite
                  intrusive on the user experience and demand immediate attention (while also
                  blocking all other actions on the site). Always consider if you can solve a
                  problem in another way first before you choose to go with the modal.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography type="primary" as="p">
                  Modals should be used with care as they are quite intrusive on the user experience
                  and demand immediate attention (while also blocking all other actions on the
                  site). Always consider if you can solve a problem in another way first before you
                  choose to go with the modal. Modals should be used with care as they are quite
                  intrusive on the user experience and demand immediate attention (while also
                  blocking all other actions on the site). Always consider if you can solve a
                  problem in another way first before you choose to go with the modal.
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
  },

  name: 'Integration: Modal with a footer and Button',
};

export const WithoutHeader = {
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
          <ScrollMaker />
          {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
          <Modal onClose={onClose} open={open}>
            <Box mb={2}>
              <Typography type="primary" as="p">
                Modals should be used with care as they are quite intrusive on the user experience
                and demand immediate attention (while also blocking all other actions on the site).
                Always consider if you can solve a problem in another way first before you choose to
                go with the modal.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography type="primary" as="p">
                That being said they are a good tool if you need to grab the users attention, either
                to communicate something very important or make them take an action before
                proceeding.
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
  },
};

export const UncontrolledBehavior = {
  render: () => {
    const Example = () => {
      return (
        <>
          <ScrollMaker />
          {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
          <Modal title="Dialog information">
            <Box mb={2}>
              <Typography type="primary" as="p">
                Modals should be used with care as they are quite intrusive on the user experience
                and demand immediate attention (while also blocking all other actions on the site).
                Always consider if you can solve a problem in another way first before you choose to
                go with the modal.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography type="primary" as="p">
                That being said they are a good tool if you need to grab the users attention, either
                to communicate something very important or make them take an action before
                proceeding.
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
  },
};

export const HideClose = {
  render: () => {
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
          <Modal
            onClose={onClose}
            title="Dialog information"
            open={open}
            hideClose={hideCloseButton}
          >
            <Box mb={2}>
              <Typography type="primary" as="p">
                The close button in the upper right corner is now hidden because the prop hideClose
                is true.
              </Typography>
            </Box>
          </Modal>
        </>
      );
    };
    return <Example />;
  },

  name: 'Hide Close button',
};

export const NodeAsTitle = {
  render: () => {
    const Title = (
      <Flexbox container gap={2} alignItems="center">
        <Icon.Bolt16 />
        <Typography type="title2" as="h2">
          React Node Title
        </Typography>
        <Icon.Bolt16 />
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
                Modals should be used with care as they are quite intrusive on the user experience
                and demand immediate attention (while also blocking all other actions on the site).
                Always consider if you can solve a problem in another way first before you choose to
                go with the modal.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography type="primary" as="p">
                That being said they are a good tool if you need to grab the users attention, either
                to communicate something very important or make them take an action before
                proceeding.
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
  },
};

const CloseOnBackdropClickStoryExample = () => {
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
            That being said they are a good tool if you need to grab the users attention, either to
            communicate something very important or make them take an action before proceeding.
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
export const CloseOnBackdropClickStory = {
  render: () => <CloseOnBackdropClickStoryExample />,
};

export const NotFullScreenMobile = {
  render: () => {
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
  },

  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const NotFullScreenMobileFixedBottom = {
  render: () => {
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
  },

  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const ModalStandardSmall = {
  render: () => {
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
              <Icon.ArrowLeft16 color={(t) => t.color.cta} />
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
                piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                going through the cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de
                Finibus Bonorum et Malorum (The Extremes of Good and
              </Typography>
            </Box>
          </Modal>
        </>
      );
    };
    return <Example />;
  },

  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const ModalStandardMedium = {
  render: () => {
    const Example = () => {
      const [open, setOpen] = useState(true);

      const onClose = () => {
        setOpen(false);
      };

      const footer = (
        <Flexbox container alignItems="center" justifyContent="space-between">
          <Flexbox container item alignItems="center">
            <Box mr={2}>
              <Icon.ArrowLeft16 color={(t) => t.color.cta} />
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
      );
    };
    return <Example />;
  },

  parameters: {
    viewport: {
      defaultViewport: 'tabletLg',
    },
  },
};

export const ModalStandardLarge = {
  render: () => {
    const Example = () => {
      const [open, setOpen] = useState(true);

      const onClose = () => {
        setOpen(false);
      };

      const footer = (
        <Flexbox container alignItems="center" justifyContent="space-between">
          <Flexbox container item alignItems="center">
            <Box mr={2}>
              <Icon.ArrowLeft16 color={(t) => t.color.cta} />
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
      );
    };
    return <Example />;
  },

  parameters: {
    viewport: {
      defaultViewport: 'desktopLg',
    },
  },
};

export const ModalStandardLargeWithScroll = {
  render: () => {
    const Example = () => {
      const [open, setOpen] = useState(true);

      const onClose = () => {
        setOpen(false);
      };

      const footer = (
        <Flexbox container alignItems="center" justifyContent="space-between">
          <Flexbox container item alignItems="center">
            <Box mr={2}>
              <Icon.ArrowLeft16 color={(t) => t.color.cta} />
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
                  and demand immediate attention (while also blocking all other actions on the
                  site). Always consider if you can solve a problem in another way first before you
                  choose to go with the modal. Modals should be used with care as they are quite
                  intrusive on the user experience and demand immediate attention (while also
                  blocking all other actions on the site). Always consider if you can solve a
                  problem in another way first before you choose to go with the modal.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography type="primary" as="p">
                  That being said they are a good tool if you need to grab the users attention,
                  either to communicate something very important or make them take an action before
                  proceeding. That being said they are a good tool if you need to grab the users
                  attention, either to communicate something very important or make them take an
                  action before proceeding.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography type="primary" as="p">
                  Modals should be used with care as they are quite intrusive on the user experience
                  and demand immediate attention (while also blocking all other actions on the
                  site). Always consider if you can solve a problem in another way first before you
                  choose to go with the modal. Modals should be used with care as they are quite
                  intrusive on the user experience and demand immediate attention (while also
                  blocking all other actions on the site). Always consider if you can solve a
                  problem in another way first before you choose to go with the modal.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography type="primary" as="p">
                  Modals should be used with care as they are quite intrusive on the user experience
                  and demand immediate attention (while also blocking all other actions on the
                  site). Always consider if you can solve a problem in another way first before you
                  choose to go with the modal. Modals should be used with care as they are quite
                  intrusive on the user experience and demand immediate attention (while also
                  blocking all other actions on the site). Always consider if you can solve a
                  problem in another way first before you choose to go with the modal.
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
  },

  parameters: {
    viewport: {
      defaultViewport: 'desktopLgMax90Height',
    },
  },
};

export const ModalStandardMobile = {
  render: () => {
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
                the user experience. Modals should be used with care as they are
              </Typography>
            </Box>
          </Modal>
        </>
      );
    };
    return <Example />;
  },

  name: 'Modal Standard Mobile, 2 Buttons, Fullscreen',

  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const ModalStandardMobileScroll = {
  render: () => {
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
                the user experience. Modals should be used with care as they are
              </Typography>
            </Box>
          </Modal>
        </>
      );
    };
    return <Example />;
  },

  name: 'Modal Standard Mobile, 1 Button, Fullscreen',

  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const ModalMobileSmall = {
  render: () => {
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
                piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                going through the cites of the word in classical literature, discovered the
                undoubtable
              </Typography>
            </Box>
          </Modal>
        </>
      );
    };
    return <Example />;
  },

  name: 'Modal Standard Mobile, 2 Buttons, Small',

  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const ModalMobileSmallOneButton = {
  render: () => {
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
                piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                going through the cites of the word in classical literature, discovered the
                undoubtable
              </Typography>
            </Box>
          </Modal>
        </>
      );
    };
    return <Example />;
  },

  name: 'Modal Standard Mobile, 1 Button, Small',

  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const ModalMobileFullscreenWithScroll = {
  render: () => {
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
                  and demand immediate attention (while also blocking all other actions on the
                  site). Always consider if you can solve a problem in another way first before you
                  choose to go with the modal. Modals should be used with care as they are quite
                  intrusive on the user experience and demand immediate attention (while also
                  blocking all other actions on the site). Always consider if you can solve a
                  problem in another way first before you choose to go with the modal.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography type="primary" as="p">
                  That being said they are a good tool if you need to grab the users attention,
                  either to communicate something very important or make them take an action before
                  proceeding. That being said they are a good tool if you need to grab the users
                  attention, either to communicate something very important or make them take an
                  action before proceeding.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography type="primary" as="p">
                  Modals should be used with care as they are quite intrusive on the user experience
                  and demand immediate attention (while also blocking all other actions on the
                  site). Always consider if you can solve a problem in another way first before you
                  choose to go with the modal. Modals should be used with care as they are quite
                  intrusive on the user experience and demand immediate attention (while also
                  blocking all other actions on the site). Always consider if you can solve a
                  problem in another way first before you choose to go with the modal.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography type="primary" as="p">
                  Modals should be used with care as they are quite intrusive on the user experience
                  and demand immediate attention (while also blocking all other actions on the
                  site). Always consider if you can solve a problem in another way first before you
                  choose to go with the modal. Modals
                </Typography>
              </Box>
            </FadedScroll>
          </Modal>
        </>
      );
    };
    return <Example />;
  },

  name: 'Modal Standard Mobile with scroll, Fullscreen',

  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const ModalMobileFullscreenWithScrollTwoButtons = {
  render: () => {
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
                  and demand immediate attention (while also blocking all other actions on the
                  site). Always consider if you can solve a problem in another way first before you
                  choose to go with the modal. Modals should be used with care as they are quite
                  intrusive on the user experience and demand immediate attention (while also
                  blocking all other actions on the site). Always consider if you can solve a
                  problem in another way first before you choose to go with the modal.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography type="primary" as="p">
                  That being said they are a good tool if you need to grab the users attention,
                  either to communicate something very important or make them take an action before
                  proceeding. That being said they are a good tool if you need to grab the users
                  attention, either to communicate something very important or make them take an
                  action before proceeding.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography type="primary" as="p">
                  Modals should be used with care as they are quite intrusive on the user experience
                  and demand immediate attention (while also blocking all other actions on the
                  site). Always consider if you can solve a problem in another way first before you
                  choose to go with the modal. Modals should be used with care as they are quite
                  intrusive on the user experience and demand immediate attention (while also
                  blocking all other actions on the site). Always consider if you can solve a
                  problem in another way first before you choose to go with the modal.
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography type="primary" as="p">
                  Modals should be used with care as they are quite intrusive on the user experience
                  and demand immediate attention (while also blocking all other actions on the
                  site). Always consider if you can solve a problem in another way first before you
                  choose to go with the modal. Modals should be used with care as they are quite
                  intrusive on the user experience and demand immediate attention (while also
                  blocking all other actions on the site). Always consider if you can solve a
                  problem in another way first before you choose to go with the modal.
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
  },

  name: 'Modal Standard Mobile With Scroll, One Button, Fullscreen',

  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const ModalWithAnimationComplete = {
  render: () => {
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
  },

  name: 'Animation Complete',
};

export const ModalWithoutBackdrop = {
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
          <ScrollMaker />
          {/* ScrollMaker is just used to show how the Modal locks scrolling when open */}
          <Modal onClose={onClose} title="Dialog information" open={open} showBackdrop={false}>
            <Box mb={2}>
              <Typography type="primary" as="p">
                Modals should be used with care as they are quite intrusive on the user experience
                and demand immediate attention (while also blocking all other actions on the site).
                Always consider if you can solve a problem in another way first before you choose to
                go with the modal.
              </Typography>
            </Box>
          </Modal>
        </>
      );
    };
    return <Example />;
  },

  name: 'Modal without backdrop',
};

export const ModalWithDisabledEscapePress = {
  render: () => {
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
  },

  name: 'Modal with disabled escape-key press',
};

export const ModalWithBlurBackground = {
  render: () => {
    return (
      <>
        <Typography type="title1">BLUR TITLE ONE</Typography>
        <Icon.Book32 />
        <Typography type="primary" as="p">
          Modals should be used with care as they are quite intrusive on the user experience and
          demand immediate attention (while also blocking all other actions on the site). Always
          consider if you can solve a problem in another way first before you choose to go with the
          modal. Modals should be used with care as they are quite intrusive on the user experience
          and demand immediate attention (while also blocking all other actions on the site).
        </Typography>
        <Illustration.AppropriatenessTest375 />
        <Illustration.InvestForLongTerm375 />
        <Modal
          onClose={() => {
            // eslint-disable-next-line no-alert
            alert('This should never be called when pressing the escape-key');
          }}
          title="Dialog information"
          open
          closeOnEscapePress={false}
          blurBackdrop
        >
          <Box mb={2}>
            <Typography type="primary" as="p">
              This text should be sharp
            </Typography>
          </Box>
        </Modal>
      </>
    );
  },

  name: 'Modal With blur background',
};

export const ModalWithProgressIndicator = {
  render: () => {
    const Example = () => {
      const [value, setValue] = useState(false);
      const isMobile = useMedia((t) => t.media.lessThan(t.breakpoints.sm));

      return (
        <Modal
          onClose={() => {
            // eslint-disable-next-line no-alert
            alert('This should never be called when pressing the escape-key');
          }}
          title="Modal with progress indicator "
          open
          progressIndicator={{ numberOfSteps: 3, currentStep: 2, borderBottomMobile: false }}
          progressIndicatorDescription="Find investments"
          fixedBottomMobile
          fullScreenMobile={false}
        >
          <Flexbox container gap={2} direction={isMobile ? 'column' : 'row'}>
            <Flexbox item width={isMobile ? '100%' : '50%'}>
              <SelectionCard
                border
                horizontal={!!isMobile}
                icon={<Icon.Book32 />}
                onChange={() => setValue(!value)}
                selected={value}
                text="This component is controlled"
                title="Controlled selection card"
              />
            </Flexbox>
            <Flexbox item width={isMobile ? '100%' : '50%'}>
              <SelectionCard
                border
                horizontal={!!isMobile}
                icon={<Icon.Book32 />}
                onChange={() => setValue(!value)}
                selected={value}
                text="This component is controlled"
                title="Controlled selection card"
              />
            </Flexbox>
          </Flexbox>
        </Modal>
      );
    };
    return <Example />;
  },
};

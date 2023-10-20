import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import styled from 'styled-components';
import Box from '../../Atoms/Box';
import {
  Accordion,
  AccordionItem,
  Button,
  Drawer,
  FadedScroll,
  Flexbox,
  OldIcon,
  Typography,
  Link,
  LinkBuy,
  LinkSell,
  PageWrapper,
} from '../../index';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Molecules / Drawer',
};

export default meta;

const contentSmall = (
  <Typography type="primary" as="p">
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
    sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
  </Typography>
);

const contentLarge = (
  <>
    <Typography type="primary" as="p">
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
      sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </Typography>
    <Typography type="primary">
      <ul>
        <li>
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
          ultricies in, diam. Sed arcu. Cras consequat.
        </li>
        <li>
          Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna
          eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
          facilisis luctus, metus.
        </li>
        <li>
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
          sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
        </li>
        <li>
          Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut,
          elementum vulputate, nunc.
        </li>
      </ul>
    </Typography>
    <Typography type="primary" as="p">
      Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
      commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
      ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
      facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue,
      eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
      porttitor, facilisis luctus, metus
    </Typography>
  </>
);

const ExampleContent = () => (
  <Typography as="p" type="secondary" color={(t) => t.color.accordionText}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat
  </Typography>
);

const contentWithAccordion = (
  <Accordion>
    <AccordionItem title="Låg CO₂ risk">
      <ExampleContent />
    </AccordionItem>
    <AccordionItem title="Sustainability score">
      <ExampleContent />
    </AccordionItem>
  </Accordion>
);

export const defaultStory = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <PageWrapper background={(t) => t.color.card}>
        <Box py={100}>
          <button type="button" onClick={toggle}>
            Toggle drawer
          </button>
          <Drawer onClose={onClose} title="Drawer title" open={open}>
            {contentLarge}
          </Drawer>
        </Box>
      </PageWrapper>
    );
  };
  return <Example />;
};

defaultStory.story = {
  name: 'Default',
};

export const withCustomTitle = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <button type="button" onClick={toggle}>
          Toggle drawer
        </button>
        <Drawer
          onClose={onClose}
          title={
            <Flexbox container gap={2} alignItems="center">
              <OldIcon.Bank />
              <Typography type="title2" as="h2">
                Custom title
              </Typography>
            </Flexbox>
          }
          open={open}
        >
          {contentSmall}
        </Drawer>
      </>
    );
  };
  return <Example />;
};

withCustomTitle.story = {
  name: 'With a custom title',
};

export const withNoTitle = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <button type="button" onClick={toggle}>
          Toggle drawer
        </button>
        <Drawer onClose={onClose} open={open}>
          {contentSmall}
        </Drawer>
      </>
    );
  };
  return <Example />;
};

withNoTitle.story = {
  name: 'With no title',
};

export const withCloseButtonTitle = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <button type="button" onClick={toggle}>
          Toggle drawer
        </button>
        <Drawer onClose={onClose} title="Drawer title" closeButtonTitle="Close" open={open}>
          {contentLarge}
        </Drawer>
      </>
    );
  };
  return <Example />;
};

export const integrationWithFadedScroll = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <button type="button" onClick={toggle}>
          Toggle drawer
        </button>
        <Drawer onClose={onClose} title="Drawer title" open={open}>
          <FadedScroll enableMobileFade>{contentLarge}</FadedScroll>
        </Drawer>
      </>
    );
  };
  return <Example />;
};

integrationWithFadedScroll.story = {
  name: 'Integration: With FadedScroll',
};

export const withFooterAndintegrationWithFadedScroll = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <button type="button" onClick={toggle}>
          Toggle drawer
        </button>
        <Drawer
          onClose={onClose}
          title="Drawer title"
          open={open}
          footer={
            <Button variant="secondary" fullWidth>
              Agree
            </Button>
          }
        >
          <FadedScroll enableMobileFade>{contentLarge}</FadedScroll>
        </Drawer>
      </>
    );
  };
  return <Example />;
};

withFooterAndintegrationWithFadedScroll.story = {
  name: 'Integration: FadedScroll with sticky footer',
};

export const WithoutCloseOnClickOutside = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <button type="button" onClick={toggle}>
          Toggle drawer
        </button>
        <Drawer onClose={onClose} title="Drawer title" open={open} closeOnClickOutside={false}>
          <Typography>
            This Drawer uses a forwardRef. The ref is used with useOnClickOutside hook. Try to click
            outside the Drawer to close it.
          </Typography>
        </Drawer>
      </>
    );
  };
  return <Example />;
};

WithoutCloseOnClickOutside.story = {
  name: 'Without closing the drawer when clicking outside',
};

const StyledBoxBlue = styled(Box)`
  background: ${(p) => p.theme.color.paletteBlue[3]};
`;
const StyledBoxGreen = styled(Box)`
  background: ${(p) => p.theme.color.paletteGreen[4]};
`;

export const WithoutCloseOnSpecificElementClick = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Box>
          <button type="button" onClick={toggle}>
            Toggle drawer (Buggy with close on click outside)
          </button>
        </Box>
        <Box>
          <button type="button" onClick={toggle} data-drawer-prevent-click-outside>
            Toggle drawer (Drawer click outside disabled on this element)
          </button>
        </Box>
        <Box>
          <button type="button">Random button</button>
        </Box>
        <StyledBoxBlue data-drawer-prevent-click-outside p={8}>
          <Typography type="title3">Random area</Typography>
          <Box>
            <Typography type="primary">
              Clicking anywhere here does not close the drawer, using the default{' '}
              <Typography weight="bold">&quot;data-drawer-prevent-click-outside&quot;</Typography>
              -attribute.
            </Typography>
          </Box>
          <Box mt={4}>
            <button type="button">Random button</button>
          </Box>
        </StyledBoxBlue>
        <StyledBoxGreen data-custom-prevent-click-outside p={8}>
          <Typography type="title3">Another random area</Typography>
          <Typography type="primary">
            Clicking anywhere here does not close the drawer as well. But this area uses a custom
            &quot;data-custom-prevent-click-outside&quot;-attribute, which is passed to the Drawer
            to recognize it.
          </Typography>
          <Box mt={4}>
            <Typography type="primary">
              Useful for when multiple drawers might be open but only one should remain open while
              clicking this area.
            </Typography>
          </Box>
          <Box mt={4}>
            <input placeholder="Random text input" />
          </Box>
        </StyledBoxGreen>
        <Box>
          {/* eslint-disable-next-line */}
          <Link data-custom-prevent-click-outside>Buy</Link>
        </Box>
        <Box>
          <Button data-custom-prevent-click-outside>Buy Button</Button>
        </Box>
        <Box>
          <LinkBuy data-custom-prevent-click-outside>Buy Link</LinkBuy>
        </Box>
        <Box>
          <LinkSell data-custom-prevent-click-outside>Sell Link</LinkSell>
        </Box>
        <Drawer
          onClose={onClose}
          title="Drawer title"
          open={open}
          preventOnClickOutsideDataAttributes={['data-custom-prevent-click-outside']}
        >
          <Box>
            <Typography>
              Certain elements on this page has special data-attributes attached to them, which
              prevents the Drawer from closing. Try clicking on those elements and compare with
              clicking somewhere else.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography type="primary">
              Warning: ALL drawers&apos; remain open when clicking on elements with the default
              attribute (
              <Typography weight="bold">&quot;data-drawer-prevent-click-outside&quot;</Typography>).
            </Typography>
          </Box>
        </Drawer>
      </>
    );
  };
  return <Example />;
};

WithoutCloseOnSpecificElementClick.story = {
  name: 'Without closing the drawer when clicking outside on specified elements',
};

export const noInitialAnimationStory = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <button type="button" onClick={toggle}>
          Toggle drawer
        </button>
        <Drawer onClose={onClose} title="Drawer title" open={open} disableInitialAnimation>
          {contentLarge}
        </Drawer>
      </>
    );
  };
  return <Example />;
};

noInitialAnimationStory.story = {
  name: 'No initial animation',
};

export const onAnimationCompleteStory = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <button type="button" onClick={toggle}>
          Toggle drawer
        </button>
        <Drawer
          onClose={onClose}
          title="Drawer title"
          open={open}
          onAnimationComplete={action('Animation complete')}
        >
          {contentLarge}
        </Drawer>
      </>
    );
  };
  return <Example />;
};

onAnimationCompleteStory.story = {
  name: 'With on animation complete',
};

export const withAccordion = () => {
  const WithAccordion = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <button type="button" onClick={toggle}>
          Toggle drawer
        </button>
        <Drawer onClose={onClose} title="Drawer title" open={open}>
          {contentWithAccordion}
        </Drawer>
      </>
    );
  };
  return <WithAccordion />;
};

withAccordion.story = {
  name: 'With Accordion',
};

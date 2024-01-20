import React, { useState } from 'react';
import {
  Box,
  BottomSheet,
  Button,
  Typography,
  Accordion,
  AccordionItem,
  FadedScroll,
  FlexTable,
} from '../..';

export default {
  title: 'Molecules / BottomSheet',
  parameters: {
    component: BottomSheet,
  },
};

const AccordionComponent: React.FC = () => (
  <Accordion>
    <AccordionItem title="Accordion 1" withChevron disableFocusOutline>
      <Typography type="primary" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
        sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
        lacinia nunc.
      </Typography>
    </AccordionItem>
    <AccordionItem title="Accordion 2" withChevron disableFocusOutline>
      <Typography type="primary" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
        sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
        lacinia nunc.
      </Typography>
    </AccordionItem>
    <AccordionItem title="Accordion 3" withChevron disableFocusOutline>
      <Typography type="primary" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
        sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
        lacinia nunc.
      </Typography>
    </AccordionItem>
    <AccordionItem title="Accordion 4" withChevron disableFocusOutline>
      <Typography type="primary" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
        sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
        lacinia nunc.
      </Typography>
    </AccordionItem>
    <AccordionItem title="Accordion 5" withChevron disableFocusOutline>
      <Typography type="primary" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
        sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
        lacinia nunc.
      </Typography>
    </AccordionItem>
    <AccordionItem title="Accordion 6" withChevron disableFocusOutline>
      <Typography type="primary" as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
        sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
        lacinia nunc.
      </Typography>
    </AccordionItem>
  </Accordion>
);

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
          <Button type="button" onClick={onOpen}>
            Show BottomSheet [not fullscreen]
          </Button>
          <Box p={2}>
            <Typography type="primary" as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
              imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
              porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
              ligula in libero. Sed dignissim lacinia nunc.
            </Typography>
          </Box>
          <Box p={2}>
            <Typography type="primary" as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
              imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
              porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
              ligula in libero. Sed dignissim lacinia nunc.
            </Typography>
          </Box>
          <BottomSheet
            closeOnClickOutside
            onClose={onClose}
            open={open}
            title={
              <Typography type="primary" weight="extrabold">
                Filters
              </Typography>
            }
          >
            <Box mb={2}>
              <FadedScroll enableMobileFade maxHeight="calc(33dvh);">
                <AccordionComponent />
                <AccordionComponent />
              </FadedScroll>
            </Box>
          </BottomSheet>
        </>
      );
    };
    return <Example />;
  },

  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

export const InvertedColors = {
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
          <Button type="button" onClick={onOpen}>
            Show BottomSheet [not fullscreen]
          </Button>
          <Box p={2}>
            <Typography type="primary" as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
              imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
              porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
              ligula in libero. Sed dignissim lacinia nunc.
            </Typography>
          </Box>
          <Box p={2}>
            <Typography type="primary" as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
              imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
              porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
              ligula in libero. Sed dignissim lacinia nunc.
            </Typography>
          </Box>
          <BottomSheet
            closeOnClickOutside
            invertedColors
            onClose={onClose}
            open={open}
            title={
              <Typography type="primary" weight="extrabold" color="inherit">
                Lorem ipsum
              </Typography>
            }
          >
            <Box mb={2}>
              <Typography type="primary" as="p" color="inherit">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
                porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography type="primary" as="p" color="inherit">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent mauris.
              </Typography>
            </Box>
          </BottomSheet>
        </>
      );
    };
    return <Example />;
  },

  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

export const LargerVariant = {
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
          <Button type="button" onClick={onOpen}>
            Show BottomSheet [not fullscreen]
          </Button>
          <Box p={2}>
            <Typography type="primary" as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
              imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
              porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
              ligula in libero. Sed dignissim lacinia nunc.
            </Typography>
          </Box>
          <Box p={2}>
            <Typography type="primary" as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
              imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
              porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
              ligula in libero. Sed dignissim lacinia nunc.
            </Typography>
          </Box>
          <BottomSheet
            closeOnClickOutside
            height={600}
            onClose={onClose}
            open={open}
            title={
              <Typography type="primary" weight="extrabold">
                Filters
              </Typography>
            }
          >
            <Box mb={2}>
              <Box p={2}>
                <Typography type="primary" as="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                  Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                  elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
                </Typography>
              </Box>
              <FadedScroll enableMobileFade maxHeight="calc(36dvh);">
                <AccordionComponent />
                <AccordionComponent />
              </FadedScroll>
            </Box>
          </BottomSheet>
        </>
      );
    };
    return <Example />;
  },

  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

export const LargerVariantAboveFlexTable = {
  render: () => {
    const Example = () => {
      const [open, setOpen] = useState(true);

      const onOpen = () => {
        setOpen(true);
      };

      const onClose = () => {
        setOpen(false);
      };

      const columnData = [
        { label: 'Country', value: 'SE' }, // visible in all screen sizes having `expandable = true`
        { label: 'Currency', value: 'SEK', sm: { hidden: true } }, // this expand item will be hidden on sm devices (and up)
      ];

      return (
        <>
          <Button type="button" onClick={onOpen}>
            Show BottomSheet [not fullscreen]
          </Button>
          <Box p={2}>
            <Typography type="primary" as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
              imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
              porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
              ligula in libero. Sed dignissim lacinia nunc.
            </Typography>
          </Box>
          <Box p={2}>
            <FlexTable stickyHeader expandable>
              <FlexTable.HeaderRow>
                <FlexTable.Header columnId="instrumentName">Instrument Name</FlexTable.Header>
                <FlexTable.Header columnId="country" hidden md={{ hidden: false }}>
                  Country
                </FlexTable.Header>
                <FlexTable.Header columnId="currency" hidden sm={{ hidden: false }}>
                  Currency
                </FlexTable.Header>
              </FlexTable.HeaderRow>

              <FlexTable.Row expandItems={columnData}>
                <FlexTable.Cell columnId="instrumentName">Ericsson</FlexTable.Cell>
                <FlexTable.Cell columnId="country" hidden md={{ hidden: false }}>
                  SE
                </FlexTable.Cell>
                <FlexTable.Cell columnId="currency" hidden sm={{ hidden: false }}>
                  SEK
                </FlexTable.Cell>
              </FlexTable.Row>
            </FlexTable>
          </Box>
          <Box p={2}>
            <FlexTable stickyHeader>
              <FlexTable.HeaderRow>
                <FlexTable.Header columnId="instrument-name">Instrument Name</FlexTable.Header>
                <FlexTable.Header columnId="currency">Currency</FlexTable.Header>
                <FlexTable.Header columnId="country">Country</FlexTable.Header>
              </FlexTable.HeaderRow>
              <FlexTable.Row>
                <FlexTable.Cell columnId="instrument-name">Ericsson</FlexTable.Cell>
                <FlexTable.Cell columnId="currency">SEK</FlexTable.Cell>
                <FlexTable.Cell columnId="country">SE</FlexTable.Cell>
              </FlexTable.Row>
              <FlexTable.Row>
                <FlexTable.Cell columnId="instrument-name">Apple</FlexTable.Cell>
                <FlexTable.Cell columnId="currency">USD</FlexTable.Cell>
                <FlexTable.Cell columnId="country">US</FlexTable.Cell>
              </FlexTable.Row>
              <FlexTable.Row>
                <FlexTable.Cell columnId="instrument-name">Nokia</FlexTable.Cell>
                <FlexTable.Cell columnId="currency">EUR</FlexTable.Cell>
                <FlexTable.Cell columnId="country">FI</FlexTable.Cell>
              </FlexTable.Row>
            </FlexTable>
          </Box>
          <BottomSheet
            closeOnClickOutside
            height={600}
            onClose={onClose}
            open={open}
            title={
              <Typography type="primary" weight="extrabold">
                Filters
              </Typography>
            }
          >
            <Box mb={2}>
              <Box p={2}>
                <Typography type="primary" as="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                  Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                  elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
                </Typography>
              </Box>
              <FadedScroll enableMobileFade maxHeight="calc(31dvh);">
                <AccordionComponent />
                <AccordionComponent />
              </FadedScroll>
            </Box>
          </BottomSheet>
        </>
      );
    };
    return <Example />;
  },

  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

export const FullscreenMobile = {
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
          <Button type="button" onClick={onOpen}>
            Show BottomSheet [fullscreen]
          </Button>

          <BottomSheet
            onClose={onClose}
            fullScreenMobile
            open={open}
            title={
              <Typography type="primary" weight="extrabold">
                Filters
              </Typography>
            }
          >
            <Box mb={2}>
              <FadedScroll enableMobileFade maxHeight="calc(100dvh - 60px);">
                <AccordionComponent />
                <AccordionComponent />
                <AccordionComponent />
              </FadedScroll>
            </Box>
          </BottomSheet>
        </>
      );
    };

    return <Example />;
  },

  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

export const NoBackDrop = {
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
          <Button type="button" onClick={onOpen}>
            Show BottomSheet [no backdrop]
          </Button>

          <BottomSheet
            closeOnClickOutside
            onClose={onClose}
            open={open}
            showBackdrop={false}
            title={
              <Typography type="primary" weight="extrabold">
                Filters
              </Typography>
            }
          >
            <Box mb={2}>
              <FadedScroll enableMobileFade maxHeight="calc(100dvh - 60px);">
                <AccordionComponent />
                <AccordionComponent />
                <AccordionComponent />
              </FadedScroll>
            </Box>
          </BottomSheet>
        </>
      );
    };

    return <Example />;
  },

  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

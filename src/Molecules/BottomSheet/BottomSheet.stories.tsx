import React, { useState } from 'react';
import { Box, BottomSheet, Button, Typography, Accordion, AccordionItem } from '../..';

export default {
  title: 'Molecules / BottomSheet',
  parameters: {
    component: BottomSheet,
  },
};

const AccordionComponent = () => (
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
            maxHeight="calc(33dvh);"
            onClose={onClose}
            open={open}
            title={
              <Typography type="primary" weight="extrabold">
                Filters
              </Typography>
            }
          >
            <Box mb={2}>
              <AccordionComponent />
              <AccordionComponent />
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
            maxHeight="calc(100dvh - 60px);"
          >
            <Box mb={2}>
              <AccordionComponent />
              <AccordionComponent />
              <AccordionComponent />
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

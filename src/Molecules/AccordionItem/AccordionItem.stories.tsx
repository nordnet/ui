import React, { useState } from 'react';
import styled from 'styled-components';
import { AccordionItem, Box, Button, Flexbox, Typography } from '../..';

export default {
  title: 'Molecules / AccordionItem',
  parameters: {
    component: AccordionItem,
  },
};

const StyledAccordionItem = styled(AccordionItem)`
  ${AccordionItem.components.Content} {
    padding-left: ${(p) => p.theme.spacing.unit(20)}px;
  }
`;

const ExampleContent = () => (
  <Typography as="p" type="secondary" color={(t) => t.color.accordionText}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat
  </Typography>
);

export const defaultCollapsed = () => (
  <AccordionItem title="Lemon drops and several cakes for two persons or more">
    <ExampleContent />
  </AccordionItem>
);

export const expanded = () => (
  <AccordionItem title="Låg CO₂ risk" expandedInitial>
    <ExampleContent />
  </AccordionItem>
);

export const withStyledContent = () => (
  <StyledAccordionItem title="Sustainability score">
    <ExampleContent />
  </StyledAccordionItem>
);

export const controlled = () => {
  const ControlledExample = () => {
    const [expandedAreas, setExpandedAreas] = useState<string[]>([]);

    const clickHandler = (id: string) => {
      if (expandedAreas.includes(id)) {
        const removed = expandedAreas.filter((x) => x !== id);
        setExpandedAreas([...removed]);
      } else {
        setExpandedAreas([...expandedAreas, id]);
      }
    };

    return (
      <>
        <Box mb={4}>
          <Flexbox container gutter={4}>
            <Flexbox item>
              <Button variant="primary" onClick={() => clickHandler('first')}>
                Toggle first
              </Button>
            </Flexbox>
            <Flexbox item>
              <Button variant="primary" onClick={() => clickHandler('second')}>
                Toggle second
              </Button>
            </Flexbox>
          </Flexbox>
        </Box>
        <AccordionItem
          title="Låg CO₂ risk"
          expanded={expandedAreas.includes('first')}
          onClick={() => clickHandler('first')}
        >
          <ExampleContent />
        </AccordionItem>
        <AccordionItem
          title="Sustainability score"
          expanded={expandedAreas.includes('second')}
          onClick={() => clickHandler('second')}
        >
          <ExampleContent />
        </AccordionItem>
      </>
    );
  };

  return <ControlledExample />;
};

export const TextOnlyContentIsFormattedCorrect = () => (
  <>
    <AccordionItem title="Content is text only">Plain vanilla text content</AccordionItem>
    <AccordionItem title="Content is a component">
      <div>Content is wrapped in a div and does not get default text styling</div>
    </AccordionItem>
  </>
);

export const withChevron = () => (
  <AccordionItem withChevron title="How much risk are you willing to take?">
    <ExampleContent />
  </AccordionItem>
);

export const withDisabledBackgroundColor = () => (
  <AccordionItem title="This card has its hover and focus color disabled" disableBackgroundColor>
    <ExampleContent />
  </AccordionItem>
);

export const withDifferentPaddings = () => (
  <>
    <AccordionItem title="This accordion item has a custom padding" p={10}>
      <ExampleContent />
    </AccordionItem>
    <AccordionItem title="This accordion item has a custom horizontal padding" px={20}>
      <ExampleContent />
    </AccordionItem>
    <AccordionItem title="This accordion item has a custom vertical padding" py={10}>
      <ExampleContent />
    </AccordionItem>
    <AccordionItem title="This accordion item has a custom top padding" pt={10}>
      <ExampleContent />
    </AccordionItem>
    <AccordionItem title="This accordion item has a custom bottom padding" pb={10}>
      <ExampleContent />
    </AccordionItem>
    <AccordionItem title="This accordion item has a custom left padding" pl={20}>
      <ExampleContent />
    </AccordionItem>
    <AccordionItem
      title="This accordion item has a custom right padding and chevron to demonstrate"
      pr={20}
      withChevron
    >
      <ExampleContent />
    </AccordionItem>
  </>
);

export const disabled = () => (
  <>
    <AccordionItem title="This accordion item is disabled" disabled>
      <ExampleContent />
    </AccordionItem>
    <AccordionItem title="This accordion item is disabled with chevron" disabled withChevron>
      <ExampleContent />
    </AccordionItem>
  </>
);

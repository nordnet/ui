import React, { useState } from 'react';
import styled from 'styled-components';
import { AccordionItem, Badge, Box, Button, Flexbox, Icon, Typography } from '../..';

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

export const DefaultCollapsed = () => (
  <AccordionItem title="Lemon drops and several cakes for two persons or more">
    <ExampleContent />
  </AccordionItem>
);

export const Expanded = () => (
  <AccordionItem title="Låg CO₂ risk" expandedInitial>
    <ExampleContent />
  </AccordionItem>
);

export const WithStyledContent = () => (
  <StyledAccordionItem title="Sustainability score">
    <ExampleContent />
  </StyledAccordionItem>
);

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
        <Flexbox container gap={4}>
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

export const Controlled = {
  render: () => <ControlledExample />,
};

export const TextOnlyContentIsFormattedCorrect = () => (
  <>
    <AccordionItem title="Content is text only">Plain vanilla text content</AccordionItem>
    <AccordionItem title="Content is a component">
      <div>Content is wrapped in a div and does not get default text styling</div>
    </AccordionItem>
  </>
);

export const WithChevron = () => (
  <AccordionItem withChevron title="How much risk are you willing to take?">
    <ExampleContent />
  </AccordionItem>
);

export const WithTypePrimaryAndChevron = () => (
  <AccordionItem type="primary" withChevron title="How much risk are you willing to take?">
    <ExampleContent />
  </AccordionItem>
);

export const WithTypePrimaryAndChevronAndLeftBadgeIcon = () => (
  <AccordionItem
    disableFocusOutline
    disableBackgroundColor
    type="primary"
    withChevron
    title="Leverage products without stop loss"
    label="Valid until 2023-12-31"
    leftBadgeIcon={
      <Badge.Icon badgeColor={(t) => t.color.badgeBackground} badgeSize="s">
        <Icon.Warning16 color={(t) => t.color.badgeIconColor} />{' '}
      </Badge.Icon>
    }
  >
    <ExampleContent />
  </AccordionItem>
);

export const WithRightAddon = () => (
  <AccordionItem
    title="How much risk are you willing to take?"
    rightAddon={<Button.Pill onClick={() => {}}>right addon</Button.Pill>}
  >
    <ExampleContent />
  </AccordionItem>
);

export const WithDisabledBackgroundColor = () => (
  <AccordionItem title="This card has its hover and focus color disabled" disableBackgroundColor>
    <ExampleContent />
  </AccordionItem>
);

export const WithDifferentPaddings = () => (
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

export const Disabled = () => (
  <>
    <AccordionItem title="This accordion item is disabled" disabled>
      <ExampleContent />
    </AccordionItem>
    <AccordionItem title="This accordion item is disabled with chevron" disabled withChevron>
      <ExampleContent />
    </AccordionItem>
  </>
);

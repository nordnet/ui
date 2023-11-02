import React from 'react';
import { Accordion, AccordionItem, Badge, Box, Icon, Spinner, Typography } from '../..';
import docs from './Accordion.mdx';

export default {
  title: 'Molecules / Accordion',
  parameters: {
    docs: {
      page: docs,
    },
    component: Accordion,
  },
};

const ExampleContent = () => (
  <Typography as="p" type="secondary" color={(t) => t.color.accordionText}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat
  </Typography>
);

const exampleFooter = (
  <Typography as="p" type="secondary" weight="bold">
    Did not find what you look for? ...That&apos;s a shame. <Spinner id="shame" />
  </Typography>
);

export const DefaultStory = {
  render: () => (
    <Accordion>
      <AccordionItem title="Låg CO₂ risk">
        <ExampleContent />
      </AccordionItem>
      <AccordionItem title="Sustainability score">
        <ExampleContent />
      </AccordionItem>
    </Accordion>
  ),

  name: 'Default',
};

export const WithFooter = () => (
  <Accordion footer={exampleFooter}>
    <AccordionItem title="Låg CO₂ risk">
      <ExampleContent />
    </AccordionItem>
    <AccordionItem title="Sustainability score">
      <ExampleContent />
    </AccordionItem>
  </Accordion>
);

export const WithBadges = () => (
  <Box p={10} backgroundColor={(t) => t.color.card}>
    <Accordion>
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
    </Accordion>
  </Box>
);

import React from 'react';
import { Accordion, AccordionItem, Typography, Spinner } from '../..';
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
    Did not find what you look for? ...Thats a shame. <Spinner id="shame" />
  </Typography>
);

export const defaultStory = () => (
  <Accordion>
    <AccordionItem title="Låg CO₂ risk">
      <ExampleContent />
    </AccordionItem>
    <AccordionItem title="Sustainability score">
      <ExampleContent />
    </AccordionItem>
  </Accordion>
);

defaultStory.story = {
  name: 'Default',
};

export const withFooter = () => (
  <Accordion footer={exampleFooter}>
    <AccordionItem title="Låg CO₂ risk">
      <ExampleContent />
    </AccordionItem>
    <AccordionItem title="Sustainability score">
      <ExampleContent />
    </AccordionItem>
  </Accordion>
);

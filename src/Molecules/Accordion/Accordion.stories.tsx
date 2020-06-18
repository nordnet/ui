import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Accordion, AccordionItem, Typography, Link } from '../..';
import docs from './Accordion.mdx';

export default {
  title: 'Molecules | Accordion',
  parameters: {
    ...docs.parameters,
    component: Accordion,
  },
};

const ExampleContent = () => (
  <Typography as="p" type="secondary" color={t => t.color.accordionText}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat
  </Typography>
);

const exampleFooter = (
  <Typography as="p" type="secondary" weight="bold">
    Did not find what you look for? <Link to="/#">Check out FAQ</Link>
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
  <HashRouter>
    <Accordion footer={exampleFooter}>
      <AccordionItem title="Låg CO₂ risk">
        <ExampleContent />
      </AccordionItem>
      <AccordionItem title="Sustainability score">
        <ExampleContent />
      </AccordionItem>
    </Accordion>
  </HashRouter>
);

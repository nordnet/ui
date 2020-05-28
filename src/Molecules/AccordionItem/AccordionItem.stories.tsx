import React from 'react';
import { storiesOf } from '@storybook/react';
import { Typography } from '../..';
import { AccordionItem } from '.';

const ExampleContent = () => (
  <Typography as="p" type="secondary" color={t => t.color.accordionText}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat
  </Typography>
);

storiesOf('Instrument | AccordionItem', module)
  .add('Default collapsed', () => (
    <>
      <AccordionItem title="Låg CO₂ risk">
        <ExampleContent />
      </AccordionItem>
      <AccordionItem title="Sustainability score">
        <ExampleContent />
      </AccordionItem>
    </>
  ))
  .add('Expanded', () => (
    <>
      <AccordionItem title="Låg CO₂ risk" expandedInitial>
        <ExampleContent />
      </AccordionItem>
      <AccordionItem title="Sustainability score" expandedInitial>
        <ExampleContent />
      </AccordionItem>
    </>
  ));

import React, { useState } from 'react';
import { AccordionItem, Box, Button, Flexbox, Typography } from '../..';

export default {
  title: 'Molecules / AccordionItem',
  parameters: {
    component: AccordionItem,
  },
};

const ExampleContent = () => (
  <Typography as="p" type="secondary" color={(t) => t.color.accordionText}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat
  </Typography>
);

export const defaultCollapsed = () => (
  <>
    <AccordionItem title="Låg CO₂ risk">
      <ExampleContent />
    </AccordionItem>
  </>
);

export const expanded = () => (
  <>
    <AccordionItem title="Låg CO₂ risk" expandedInitial>
      <ExampleContent />
    </AccordionItem>
  </>
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

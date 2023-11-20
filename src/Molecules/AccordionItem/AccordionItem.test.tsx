import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccordionItem } from '../..';
import { PageProviders } from '../../common/testUtils';

const buttonText = 'Lorem ipsum';
const content = 'Dolor simit';

test('Panel is not visible', () => {
  render(
    <PageProviders>
      <AccordionItem title={buttonText}>{content}</AccordionItem>
    </PageProviders>,
  );

  expect(screen.queryByText(content)).toBeNull();
});

test('Panel is visible', () => {
  render(
    <PageProviders>
      <AccordionItem title={buttonText}>{content}</AccordionItem>
    </PageProviders>,
  );
  fireEvent.click(screen.getByText(buttonText));

  expect(screen.getByText(content)).toBeVisible();
});

test('Panel is visible controlled', () => {
  render(
    <PageProviders>
      <AccordionItem title={buttonText} expanded>
        {content}
      </AccordionItem>
    </PageProviders>,
  );

  expect(screen.getByText(content)).toBeVisible();
});

test('Panel is not visible controlled', () => {
  render(
    <PageProviders>
      <AccordionItem title={buttonText} expanded={false}>
        {content}
      </AccordionItem>
    </PageProviders>,
  );

  expect(screen.queryByText(content)).toBeNull();
});

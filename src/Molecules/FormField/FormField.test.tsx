import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../theme';
import { FormField } from './FormField';

describe('FormField', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <IntlProvider locale="en-GB">
      <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
    </IntlProvider>
  );

  test('should have a label', async () => {
    render(
      <FormField label="Label" fieldId="unique-id-1">
        <input type="text" id="unique-id-1" />
      </FormField>,
      {
        wrapper,
      },
    );
    const input = screen.getByLabelText('Label');
    expect(input).toBeInTheDocument();
  });

  test('label should have a star if required', async () => {
    render(
      <FormField label="Label" fieldId="unique-id-1" required>
        <input type="text" id="unique-id-1" />
      </FormField>,
      {
        wrapper,
      },
    );
    const input = screen.getByLabelText('Label *');
    expect(input).toBeInTheDocument();
  });

  test('should have extra info', async () => {
    render(
      <FormField label="Label" fieldId="unique-id-1" extraInfo="More information">
        <input type="text" id="unique-id-1" />
      </FormField>,
      {
        wrapper,
      },
    );
    const extraInfo = screen.getByText('More information');
    expect(extraInfo).toBeVisible();
  });

  test('should have error message', async () => {
    render(
      <FormField label="Label" fieldId="unique-id-1" error="Error message">
        <input type="text" id="unique-id-1" />
      </FormField>,
      {
        wrapper,
      },
    );
    const extraInfo = screen.getByText('Error message');
    expect(extraInfo).toBeVisible();
  });

  test('Label should be hidden', async () => {
    render(
      <FormField label="Label" fieldId="unique-id-1" hideLabel>
        <input type="text" id="unique-id-1" />
      </FormField>,
      {
        wrapper,
      },
    );
    const label = screen.getByText('Label');
    expect(label).toBeInTheDocument();
    expect(label).not.toBeVisible();
  });
});

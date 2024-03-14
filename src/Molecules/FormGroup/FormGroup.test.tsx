import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../theme';
import { FormGroup } from './FormGroup';

describe('FormGroup', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <IntlProvider locale="en-GB">
      <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
    </IntlProvider>
  );

  test('should have a label', async () => {
    render(
      <FormGroup label="Label">
        <input type="text" id="unique-id-1" />
      </FormGroup>,
      {
        wrapper,
      },
    );
    const label = screen.getByText('Label');
    expect(label).toBeInTheDocument();
  });

  test('should have a error message', async () => {
    render(
      <FormGroup label="Label" error="Error message">
        <input type="text" id="unique-id-1" />
      </FormGroup>,
      {
        wrapper,
      },
    );
    const error = screen.getByText('Error message');
    expect(error).toBeInTheDocument();
  });

  test('should have extra info', async () => {
    render(
      <FormGroup label="Label" extraInfo="More information">
        <input type="text" id="unique-id-1" />
      </FormGroup>,
      {
        wrapper,
      },
    );
    const extraInfo = screen.getByText('More information');
    expect(extraInfo).toBeInTheDocument();
  });

  test('should have a tooltip', async () => {
    render(
      <FormGroup label="Label" labelTooltip="Tooltip content">
        <input type="text" id="unique-id-1" />
      </FormGroup>,
      {
        wrapper,
      },
    );
    const extraInfo = screen.getByTestId('FormField-Tooltip-svg');
    expect(extraInfo).toBeInTheDocument();
  });
});

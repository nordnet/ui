import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../../theme';
import { QuietText } from './QuietText';

describe('Input.QuietText', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <IntlProvider locale="en-GB">
      <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
    </IntlProvider>
  );

  test('should have a label', async () => {
    render(
      // id is used to render htmlFor, testing-library did not find the label otherwise
      <QuietText label="Username" id="quiet-text-input" placeholder="Please enter a username" />,
      {
        wrapper,
      },
    );
    const input = screen.getByLabelText('Username');
    expect(input).toBeVisible();

    await userEvent.type(input, '123');
    expect(input).toHaveValue('123');
  });

  test('should be editable', async () => {
    render(<QuietText label="Username" placeholder="Please enter a username" />, {
      wrapper,
    });
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');

    await userEvent.type(input, '123');
    expect(input).toHaveValue('123');
  });

  test('hidden span should mirror input value', async () => {
    render(<QuietText label="label" placeholder="My placeholder" />, { wrapper });
    const input = screen.getByRole('textbox');
    const hiddenSpan = screen.getByTestId('quiettext-hidden-measurement');

    expect(input).toHaveAttribute('placeholder', 'My placeholder');
    expect(hiddenSpan).toHaveTextContent('My placeholder');
    expect(hiddenSpan).not.toBeVisible();
    expect(hiddenSpan).toHaveAttribute('aria-hidden', 'true');

    await userEvent.type(input, '123');
    expect(input).toHaveValue('123');
    expect(hiddenSpan).toHaveTextContent('123');
  });

  test('Default value should be visible', async () => {
    render(<QuietText label="label" placeholder="My placeholder" defaultValue="JohnDoe" />, {
      wrapper,
    });
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('JohnDoe');
  });

  test('controlled value should be visible, and readonly', async () => {
    render(
      <QuietText
        label="label"
        placeholder="My placeholder"
        defaultValue="JohnDoe"
        value="President"
      />,
      {
        wrapper,
      },
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('President');
    await userEvent.type(input, 'New value');
    expect(input).toHaveValue('President');
  });

  test('should show error', async () => {
    render(<QuietText label="label" placeholder="My placeholder" error="error message" />, {
      wrapper,
    });
    const errorMessage = screen.getByText('error message');
    expect(errorMessage).toBeVisible();
  });

  test('should have a prefix and a suffix (string)', async () => {
    render(
      <QuietText label="label" placeholder="My placeholder" leftAddon="$" rightAddon="SEK" />,
      {
        wrapper,
      },
    );
    const input = screen.getByRole('textbox');
    const leftAddon = screen.getByText('$');
    const rightAddon = screen.getByText('SEK');
    expect(leftAddon).toBeVisible();
    expect(rightAddon).toBeVisible();

    // Also check order
    expect(leftAddon.nextSibling).toEqual(input);
    expect(input.nextSibling).toEqual(rightAddon);
  });

  test('should have a prefix and a suffix (react element)', async () => {
    render(
      <QuietText
        label="label"
        placeholder="My placeholder"
        leftAddon={<div data-testid="left-addon">$</div>}
        rightAddon={<div data-testid="right-addon">SEK</div>}
      />,
      {
        wrapper,
      },
    );
    const input = screen.getByRole('textbox');
    const leftAddon = screen.getByTestId('left-addon');
    const rightAddon = screen.getByTestId('right-addon');
    expect(leftAddon).toHaveTextContent('$');
    expect(rightAddon).toHaveTextContent('SEK');

    // Also check order
    expect(leftAddon.nextSibling).toEqual(input);
    expect(input.nextSibling).toEqual(rightAddon);
  });

  test('should have extra information', async () => {
    render(<QuietText label="label" placeholder="My placeholder" extraInfo="message" />, {
      wrapper,
    });
    const input = screen.getByRole('textbox');
    const extraInfo = screen.getByText('message');
    expect(input).toBeVisible();
    expect(extraInfo).toBeVisible();
  });
});

import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../../theme';
import { FormattedNumber } from './FormattedNumber';

describe('Input.FormattedNumber', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <IntlProvider locale="en-GB">
      <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
    </IntlProvider>
  );

  test('should call onEnter when pressing Enter key', async () => {
    const onEnter = jest.fn();
    render(<FormattedNumber id="id" label="label" onEnter={onEnter} />, { wrapper });
    const input = screen.getByRole('textbox');
    await userEvent.click(input);
    expect(input).toHaveValue('');
    await userEvent.keyboard(`[Enter]`);
    expect(onEnter).toHaveBeenCalledWith(null);
    await userEvent.type(input, '1234.23');
    await userEvent.keyboard(`[Enter]`);
    expect(onEnter).toHaveBeenCalledWith(1234.23);
  });

  test('should step up/down on key up/key down press', async () => {
    render(<FormattedNumber id="id" label="label" min={-1} />, { wrapper });
    const input = screen.getByRole('textbox');
    await userEvent.click(input);
    expect(input).toHaveValue('');
    await userEvent.keyboard(`[ArrowUp]`);
    expect(input).toHaveValue('1');
    await userEvent.keyboard(`[ArrowUp]`);
    expect(input).toHaveValue('2');
    await userEvent.keyboard(`[ArrowDown]`);
    expect(input).toHaveValue('1');
    await userEvent.keyboard(`[ArrowDown]`);
    expect(input).toHaveValue('0');
    await userEvent.keyboard(`[ArrowDown]`);
    expect(input).toHaveValue('-1');
  });

  test('should step up/down on key up/key down press with default value', async () => {
    render(<FormattedNumber id="id" label="label" defaultValue={1} />, { wrapper });
    const input = screen.getByRole('textbox');
    await userEvent.click(input);
    expect(input).toHaveValue('1');
    await userEvent.keyboard(`[ArrowUp]`);
    expect(input).toHaveValue('2');
    await userEvent.keyboard(`[ArrowDown]`);
    expect(input).toHaveValue('1');
    await userEvent.keyboard(`[ArrowDown]`);
    expect(input).toHaveValue('0');
  });

  test('should step up/down on when clicking on steppers', async () => {
    const { container } = render(<FormattedNumber id="id" label="label" min={-2} />, { wrapper });
    const input = screen.getByRole('textbox');
    const decrementButton = screen.getByRole('button', { name: '−1' });
    const incrementButton = screen.getByRole('button', { name: '+1' });

    expect(input).not.toHaveFocus();
    await userEvent.click(decrementButton);
    expect(input).toHaveValue('-1');
    expect(input).toHaveFocus();
    await userEvent.click(decrementButton);
    expect(input).toHaveValue('-2');

    await userEvent.click(container); // unfocus;
    expect(input).not.toHaveFocus();

    await userEvent.click(incrementButton);
    expect(input).toHaveValue('-1');
    expect(input).toHaveFocus();
    await userEvent.click(incrementButton);
    expect(input).toHaveValue('0');
    await userEvent.click(incrementButton);
    expect(input).toHaveValue('1');
  });

  test('should submit empty value', async () => {
    const onSubmit = jest.fn((e) => e.preventDefault());
    const inputName = 'inputName';
    render(
      <form onSubmit={onSubmit}>
        <FormattedNumber id="input-id" label="label" name={inputName} />
        <button type="submit">Submit</button>
      </form>,
      { wrapper },
    );
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await userEvent.click(submitButton);

    const submitEvent = onSubmit.mock.calls[0][0];
    const formData = new FormData(submitEvent.target);
    const submittedValues = {};

    formData.forEach((value, key) => {
      submittedValues[key] = value;
    });

    expect(submittedValues).toEqual({ inputName: '' });
  });

  test('should submit set value', async () => {
    const onSubmit = jest.fn((e) => e.preventDefault());
    const inputName = 'inputName';
    render(
      <form onSubmit={onSubmit}>
        <FormattedNumber id="input-id" label="label" name={inputName} />
        <button type="submit">Submit</button>
      </form>,
      { wrapper },
    );
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    const input = screen.getByRole('textbox');
    await userEvent.type(input, '-1234.23');
    await userEvent.click(submitButton);

    const submitEvent = onSubmit.mock.calls[0][0];
    const formData = new FormData(submitEvent.target);
    const submittedValues = {};

    formData.forEach((value, key) => {
      submittedValues[key] = value;
    });

    expect(submittedValues).toEqual({ inputName: '-1234.23' });
  });

  /* Known Issues... */
  test.todo('does not use colorTokens. FormattedNumber.styled.tsx needs to be refactored');
  test.todo('does not currently preserve trailing zeros when stepping');
  test.todo(`doesn't currently respect min and max props`);
  test.todo('blurs input field when clicking on steppers');
});

import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import { Datepicker } from '../Datepicker';
import { createTheme } from '../../../theme';

const theme = createTheme();
afterEach(cleanup);

test('Select single date', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = (date: Date) => {
    expect(date.getDate()).toBe(20);
  };

  const { getByText, getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Datepicker id={INPUT_ID} label="Label" onChange={onChange} />
    </ThemeProvider>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);

  const date = getByText('20');
  fireEvent.click(date);
});

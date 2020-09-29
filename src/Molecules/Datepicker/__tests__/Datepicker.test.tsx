import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import { Datepicker } from '../Datepicker';
import { createTheme } from '../../../theme';

const theme = createTheme();
afterEach(cleanup);

test('Select single date', async () => {
  const onChange = (date: Date) => {
    expect(date.getDate()).toBe(20);
  };
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Datepicker label="Label" onChange={onChange} />
    </ThemeProvider>,
  );

  const date = getByText('20');
  fireEvent.click(date);
});

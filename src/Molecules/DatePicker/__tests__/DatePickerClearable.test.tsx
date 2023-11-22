import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { advanceTo, clear } from 'jest-date-mock';
import DatePickerClearable from '../SingleClearable';
import { PageProviders } from '../../../common/testUtils';

afterEach(cleanup);

beforeAll(() => {
  advanceTo(new Date(2020, 8, 29, 0, 0, 0));
});

afterAll(() => {
  clear();
});

test('Clear date by clearing the input', async () => {
  const INPUT_ID = 'datepicker-input';

  const onChange = jest.fn();

  const { getByTestId } = render(
    <PageProviders>
      <DatePickerClearable
        id={INPUT_ID}
        selectedDate={new Date('12/12/1990')}
        label="Label"
        onChange={onChange}
      />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);
  expect(screen.getByTestId('styled-dropdown-bubble-wrapper')).toBeVisible();

  const dateElementDay = screen.getByTestId('December 12');
  expect(dateElementDay).toBeInTheDocument();
  expect(dateElementDay).toHaveAttribute('data-selected', 'true');

  fireEvent.change(input, { target: { value: '' } });

  expect(onChange).toHaveBeenCalledWith(undefined);
  expect(input).toHaveValue('');
});

test('Clear date by using clear button', async () => {
  const INPUT_ID = 'datepicker-input';

  const onChange = jest.fn();
  const onClearDate = jest.fn();

  const { getByTestId } = render(
    <PageProviders>
      <DatePickerClearable
        id={INPUT_ID}
        selectedDate={new Date('12/12/1990')}
        label="Label"
        onChange={onChange}
        clearDateButton={{
          clearButtonLabel: 'Clear date and state',
          onClearDate,
        }}
      />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);
  expect(screen.getByTestId('styled-dropdown-bubble-wrapper')).toBeVisible();

  const dateElementDay = screen.getByTestId('December 12');
  expect(dateElementDay).toBeInTheDocument();
  expect(dateElementDay).toHaveAttribute('data-selected', 'true');

  const clearDateButton = screen.getByRole('button', { name: 'Clear date and state' });
  expect(clearDateButton).toBeVisible();
  fireEvent.click(clearDateButton);

  expect(onClearDate).toHaveBeenCalledWith();
  expect(input).toHaveValue('');
});

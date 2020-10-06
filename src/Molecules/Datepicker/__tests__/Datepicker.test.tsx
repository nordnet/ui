import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { advanceTo, clear } from 'jest-date-mock';
import { Datepicker } from '../Datepicker';
import { PageProviders } from '../../../common/testUtils';

afterEach(cleanup);

beforeAll(() => {
  advanceTo(new Date(2020, 8, 29, 0, 0, 0));
});

afterAll(() => {
  clear();
});

test('Select single date', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = (date: Date) => {
    expect(date.getDate()).toBe(20);
  };

  const { getByText, getByTestId } = render(
    <PageProviders>
      <Datepicker id={INPUT_ID} label="Label" onChange={onChange} />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);

  const date = getByText('20');
  fireEvent.click(date);
});

test('Select previous month', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = (date: Date) => {
    expect(date.getMonth()).toBe(7);
    expect(date.getDate()).toBe(20);
  };

  const { getByText, getByTestId } = render(
    <PageProviders>
      <Datepicker id={INPUT_ID} label="Label" onChange={onChange} />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);

  const arrowLeft = getByTestId('datepicker-arrow-left');
  fireEvent.click(arrowLeft);

  const date = getByText('20');
  fireEvent.click(date);
});

test('Select next month with left arrow', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = (date: Date) => {
    expect(date.getMonth()).toBe(9);
    expect(date.getDate()).toBe(20);
  };

  const { getByText, getByTestId } = render(
    <PageProviders>
      <Datepicker id={INPUT_ID} label="Label" onChange={onChange} />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);

  const arrowRight = getByTestId('datepicker-arrow-right');
  fireEvent.click(arrowRight);

  const date = getByText('20');
  fireEvent.click(date);
});

test('Select next month with right arrow', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = (date: Date) => {
    expect(date.getMonth()).toBe(9);
    expect(date.getDate()).toBe(20);
  };

  const { getByText, getByTestId } = render(
    <PageProviders>
      <Datepicker id={INPUT_ID} label="Label" onChange={onChange} />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);

  const arrowRight = getByTestId('datepicker-arrow-right');
  fireEvent.click(arrowRight);

  const date = getByText('20');
  fireEvent.click(date);
});

test('Change month with select input', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = (date: Date) => {
    expect(date.getMonth()).toBe(3);
    expect(date.getDate()).toBe(20);
  };

  const { getByText, getByTestId } = render(
    <PageProviders>
      <Datepicker id={INPUT_ID} label="Label" onChange={onChange} />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);

  const select = getByTestId('datepicker-select-month');
  fireEvent.click(select);

  const month = getByText('April');
  fireEvent.click(month);

  const date = getByText('20');
  fireEvent.click(date);
});

test('Change year with select input', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = (date: Date) => {
    expect(date.getFullYear()).toBe(2019);
    expect(date.getDate()).toBe(20);
  };

  const { getByText, getByTestId } = render(
    <PageProviders>
      <Datepicker id={INPUT_ID} label="Label" onChange={onChange} />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);

  const select = getByTestId('datepicker-select-year');
  fireEvent.click(select);

  const year = getByText('2019');
  fireEvent.click(year);

  const date = getByText('20');
  fireEvent.click(date);
});

test('Disable certain dates', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = () => {
    expect(true).toBe(false);
  };

  const { getByText, getByTestId } = render(
    <PageProviders>
      <Datepicker
        id={INPUT_ID}
        label="Label"
        onChange={onChange}
        disableDate={(date: Date) => date.getDate() === 20}
      />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);

  const select = getByTestId('datepicker-select-year');
  fireEvent.click(select);

  const date = getByText('20');
  fireEvent.click(date);

  expect(date.parentElement.className).toContain('disabled');
});

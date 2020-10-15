import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { advanceTo, clear } from 'jest-date-mock';
import { DatePicker } from '../DatePicker';
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
      <DatePicker id={INPUT_ID} label="Label" onChange={onChange} />
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
      <DatePicker id={INPUT_ID} label="Label" onChange={onChange} />
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
      <DatePicker id={INPUT_ID} label="Label" onChange={onChange} />
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
      <DatePicker id={INPUT_ID} label="Label" onChange={onChange} />
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
      <DatePicker id={INPUT_ID} label="Label" onChange={onChange} />
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
      <DatePicker id={INPUT_ID} label="Label" onChange={onChange} />
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
      <DatePicker
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

test('Select previous date with arrow left', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = (date: Date) => {
    expect(date.getMonth()).toBe(8);
    expect(date.getDate()).toBe(28);
  };

  const { getByTestId } = render(
    <PageProviders>
      <DatePicker id={INPUT_ID} label="Label" onChange={onChange} />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);

  const calendar = getByTestId('datepicker-calendar');
  fireEvent.keyDown(calendar, {
    key: 'ArrowLeft',
    keyCode: 37,
  });

  fireEvent.keyUp(calendar, {
    key: 'ArrowLeft',
    keyCode: 37,
  });

  fireEvent.keyDown(calendar, {
    key: 'Enter',
    keyCode: 13,
  });
});

test('Select next date with arrow right', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = (date: Date) => {
    expect(date.getMonth()).toBe(8);
    expect(date.getDate()).toBe(30);
  };

  const { getByTestId } = render(
    <PageProviders>
      <DatePicker id={INPUT_ID} label="Label" onChange={onChange} />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);

  const calendar = getByTestId('datepicker-calendar');
  fireEvent.keyDown(calendar, {
    key: 'ArrowRight',
    keyCode: 39,
  });

  fireEvent.keyUp(calendar, {
    key: 'ArrowRight',
    keyCode: 39,
  });

  fireEvent.keyDown(calendar, {
    key: 'Enter',
    keyCode: 13,
  });
});

test('Select previous week date with arrow up', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = (date: Date) => {
    expect(date.getMonth()).toBe(8);
    expect(date.getDate()).toBe(22);
  };

  const { getByTestId } = render(
    <PageProviders>
      <DatePicker id={INPUT_ID} label="Label" onChange={onChange} />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);

  const calendar = getByTestId('datepicker-calendar');
  fireEvent.keyDown(calendar, {
    key: 'ArrowUp',
    keyCode: 38,
  });

  fireEvent.keyUp(calendar, {
    key: 'ArrowUp',
    keyCode: 38,
  });

  fireEvent.keyDown(calendar, {
    key: 'Enter',
    keyCode: 13,
  });
});

test('Select next week date with arrow up', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = (date: Date) => {
    expect(date.getMonth()).toBe(9);
    expect(date.getDate()).toBe(6);
  };

  const { getByTestId } = render(
    <PageProviders>
      <DatePicker id={INPUT_ID} label="Label" onChange={onChange} />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);

  const calendar = getByTestId('datepicker-calendar');
  fireEvent.keyDown(calendar, {
    key: 'ArrowDown',
    keyCode: 40,
  });

  fireEvent.keyUp(calendar, {
    key: 'ArrowDown',
    keyCode: 40,
  });

  fireEvent.keyDown(calendar, {
    key: 'Enter',
    keyCode: 13,
  });
});

test('Enter date manually', async () => {
  const INPUT_ID = 'datepicker-input';
  const onChange = (date: Date) => {
    expect(date.getDate()).toBe(19);
  };

  const { getByText, getByTestId } = render(
    <PageProviders>
      <DatePicker id={INPUT_ID} label="Label" onChange={onChange} />
    </PageProviders>,
  );

  const input = getByTestId(INPUT_ID);
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: '19/08/2020' } });

  const date = getByText('19');
  expect(date.parentElement.className).toContain('selected');
});

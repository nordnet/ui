import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { advanceTo, clear } from 'jest-date-mock';
import { format } from 'date-fns';
import { DoubleDatePicker } from '../../..';
import { PageProviders } from '../../../common/testUtils';

afterEach(cleanup);

beforeAll(() => {
  advanceTo(new Date(2020, 8, 29, 0, 0, 0));
});
afterAll(() => {
  clear();
});

const ID = 'double-datepicker';
const startInputId = 'datepicker-input-start';
const endInputId = 'datepicker-input-end';

describe('Double date picker', () => {
  it('select a range by clicking on both calendars', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId, findByTestId } = render(
      <PageProviders>
        <DoubleDatePicker
          id={ID}
          labelFrom="Label"
          // @ts-expect-error
          onChange={onChange}
        />
      </PageProviders>,
    );

    const expectedStart = 'September 1';
    const expectedEnd = 'October 8';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);

    const startDay = await findByTestId(expectedStart);
    const endDay = await findByTestId(expectedEnd);

    fireEvent.click(startDay);
    expect(onChange).toHaveLastReturnedWith([expectedStart, null]);

    fireEvent.click(endDay);
    expect(onChange).toHaveLastReturnedWith([expectedStart, expectedEnd]);
  });

  it('select a range by clicking on one calendar', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId, findByTestId } = render(
      <PageProviders>
        <DoubleDatePicker
          id={ID}
          labelFrom="Label"
          // @ts-expect-error
          onChange={onChange}
        />
      </PageProviders>,
    );

    const expectedStart = 'September 1';
    const expectedEnd = 'September 8';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);

    const startDay = await findByTestId(expectedStart);
    const endDay = await findByTestId(expectedEnd);

    fireEvent.click(startDay);
    expect(onChange).toHaveLastReturnedWith([expectedStart, null]);

    fireEvent.click(endDay);
    expect(onChange).toHaveLastReturnedWith([expectedStart, expectedEnd]);
  });

  it('select a range by clicking on first date and input second date', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId, findByTestId } = render(
      <PageProviders>
        <DoubleDatePicker
          id={ID}
          labelFrom="Label"
          // @ts-expect-error
          onChange={onChange}
        />
      </PageProviders>,
    );

    const expectedStart = 'September 1';
    const expectedEnd = 'September 8';

    const startInput = getByTestId(startInputId);
    const endInput = getByTestId(endInputId);
    fireEvent.focus(startInput);

    const startDay = await findByTestId(expectedStart);

    fireEvent.click(startDay);
    expect(onChange).toHaveLastReturnedWith([expectedStart, null]);

    fireEvent.focus(endInput);
    fireEvent.change(endInput, { target: { value: '08/09/2020' } });
    fireEvent.keyDown(endInput, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveLastReturnedWith([expectedStart, expectedEnd]);
  });

  it('select a range by input first date and click second date', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId, findByTestId } = render(
      <PageProviders>
        <DoubleDatePicker
          id={ID}
          labelFrom="Label"
          // @ts-expect-error
          onChange={onChange}
        />
      </PageProviders>,
    );

    const expectedStart = 'September 1';
    const expectedEnd = 'September 8';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);

    fireEvent.change(startInput, { target: { value: '01/09/2020' } });
    fireEvent.keyDown(startInput, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveLastReturnedWith([expectedStart, null]);

    const endDay = await findByTestId(expectedEnd);

    fireEvent.click(endDay);
    expect(onChange).toHaveLastReturnedWith([expectedStart, expectedEnd]);
  });

  it('select a range by using input for both dates', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId } = render(
      <PageProviders>
        <DoubleDatePicker
          id={ID}
          labelFrom="Label"
          // @ts-expect-error
          onChange={onChange}
        />
      </PageProviders>,
    );

    const expectedStart = 'September 1';
    const expectedEnd = 'October 8';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);
    fireEvent.change(startInput, { target: { value: '01/09/2020' } });
    fireEvent.keyDown(startInput, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveLastReturnedWith([expectedStart, null]);

    const endInput = getByTestId(endInputId);
    fireEvent.focus(endInput);
    fireEvent.change(endInput, { target: { value: '08/10/2020' } });
    fireEvent.keyDown(endInput, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveLastReturnedWith([expectedStart, expectedEnd]);
  });

  // TODO: Re-implement this test when arrow navigation is added.
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('select a range by using arrow keys', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId, findByTestId } = render(
      <PageProviders>
        <DoubleDatePicker
          id={ID}
          labelFrom="Label"
          // @ts-expect-error
          onChange={onChange}
        />
      </PageProviders>,
    );

    const expectedStart = 'September 7';
    const expectedEnd = 'September 8';
    const tempDate = 'August 31';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);

    const startDay = await findByTestId(expectedStart);
    const tempDay = await findByTestId(tempDate);
    const endDay = await findByTestId(expectedEnd);

    // focus 31 august
    fireEvent.keyDown(startInput, {
      key: 'ArrowDown',
      keyCode: 40,
    });
    // focus 7 september
    fireEvent.keyDown(tempDay, {
      key: 'ArrowDown',
      keyCode: 40,
    });
    // select
    fireEvent.keyDown(startDay, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveLastReturnedWith([expectedStart, null]);

    // focus 8 september
    fireEvent.keyDown(startDay, {
      key: 'ArrowRight',
      keyCode: 39,
    });
    // select
    fireEvent.keyDown(endDay, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveLastReturnedWith([expectedStart, expectedEnd]);
  });

  it('select a range of one day by clicking', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId, findByTestId } = render(
      <PageProviders>
        <DoubleDatePicker
          id={ID}
          labelFrom="Label"
          // @ts-expect-errors
          onChange={onChange}
        />
      </PageProviders>,
    );

    const expectedDate = 'September 1';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);

    const dayToSelect = await findByTestId(expectedDate);
    fireEvent.click(dayToSelect);
    expect(onChange).toHaveLastReturnedWith([expectedDate, null]);

    fireEvent.click(dayToSelect);
    expect(onChange).toHaveLastReturnedWith([expectedDate, expectedDate]);
  });

  // TODO: Re-implement this test when arrow navigation is added.
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('select a range of one day by using arrow keys', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId, findByTestId } = render(
      <PageProviders>
        <DoubleDatePicker
          id={ID}
          labelFrom="Label"
          // @ts-expect-error
          onChange={onChange}
        />
      </PageProviders>,
    );

    const expectedDate = 'September 7';
    const tempDate = 'August 31';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);

    const dayToSelect = await findByTestId(expectedDate);
    const tempDay = await findByTestId(tempDate);

    // focus 31 august
    fireEvent.keyDown(startInput, {
      key: 'ArrowDown',
      keyCode: 40,
    });
    // focus 7 september
    fireEvent.keyDown(tempDay, {
      key: 'ArrowDown',
      keyCode: 40,
    });
    // select
    fireEvent.keyDown(dayToSelect, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveLastReturnedWith([expectedDate, null]);

    // select again
    fireEvent.keyDown(dayToSelect, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveLastReturnedWith([expectedDate, expectedDate]);
  });

  it('select a range of one day by using text input', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId } = render(
      <PageProviders>
        <DoubleDatePicker
          id={ID}
          labelFrom="Label"
          // @ts-expect-error
          onChange={onChange}
        />
      </PageProviders>,
    );

    const expectedDate = 'September 1';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);
    fireEvent.change(startInput, { target: { value: '01/09/2020' } });
    fireEvent.keyDown(startInput, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveLastReturnedWith([expectedDate, null]);

    // The user leaves the left textinput, and onBlur is called.
    fireEvent.blur(startInput);
    expect(onChange).toHaveLastReturnedWith([expectedDate, null]);

    const endInput = getByTestId(endInputId);
    fireEvent.focus(endInput);
    fireEvent.change(endInput, { target: { value: '01/09/2020' } });
    fireEvent.keyDown(endInput, { key: 'Enter', code: 'Enter' });

    expect(onChange).toHaveLastReturnedWith([expectedDate, expectedDate]);
  });

  it('not select a range of one day by clicking', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId, findByTestId } = render(
      <PageProviders>
        <DoubleDatePicker
          id={ID}
          labelFrom="Label"
          // @ts-expect-error
          onChange={onChange}
          allowSingleDayRange={false}
        />
      </PageProviders>,
    );

    const expectedDate = 'September 1';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);

    const dayToSelect = await findByTestId(expectedDate);
    fireEvent.click(dayToSelect);
    expect(onChange).toHaveLastReturnedWith([expectedDate, null]);

    fireEvent.click(dayToSelect);
    expect(onChange).toHaveLastReturnedWith([expectedDate, null]);
  });

  // TODO: Re-implement this test when arrow navigation is added.
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('not select a range of one day by using arrow keys', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId, findByTestId } = render(
      <PageProviders>
        <DoubleDatePicker
          id={ID}
          labelFrom="Label"
          // @ts-expect-error
          onChange={onChange}
          allowSingleDayRange={false}
        />
      </PageProviders>,
    );

    const expectedDate = 'September 7';
    const tempDate = 'August 31';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);

    const dayToSelect = await findByTestId(expectedDate);
    const tempDay = await findByTestId(tempDate);

    // focus 31 august
    fireEvent.keyDown(startInput, {
      key: 'ArrowDown',
      keyCode: 40,
    });
    // focus 7 september
    fireEvent.keyDown(tempDay, {
      key: 'ArrowDown',
      keyCode: 40,
    });
    // select
    fireEvent.keyDown(dayToSelect, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveLastReturnedWith([expectedDate, null]);

    // select again
    fireEvent.keyDown(dayToSelect, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveLastReturnedWith([expectedDate, null]);
  });

  it('not select a one range of day by using text input', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId } = render(
      <PageProviders>
        <DoubleDatePicker
          id={ID}
          labelFrom="Label"
          // @ts-expect-error
          onChange={onChange}
          allowSingleDayRange={false}
        />
      </PageProviders>,
    );

    const expectedDate = 'September 1';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);
    fireEvent.change(startInput, { target: { value: '01/09/2020' } });
    fireEvent.keyDown(startInput, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveLastReturnedWith([expectedDate, null]);

    // The user leaves the left textinput, and onBlur is called.
    fireEvent.blur(startInput);
    expect(onChange).toHaveLastReturnedWith([expectedDate, null]);

    const endInput = getByTestId(endInputId);
    fireEvent.focus(endInput);
    fireEvent.change(endInput, { target: { value: '01/09/2020' } });
    fireEvent.keyDown(endInput, { key: 'Enter', code: 'Enter' });

    expect(onChange).toHaveLastReturnedWith([expectedDate, null]);
  });
});

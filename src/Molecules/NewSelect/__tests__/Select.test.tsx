import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { clear } from 'jest-date-mock';
import { PageProviders } from '../../../common/testUtils';
import { Select, Option } from '..';
import FormField from '../../FormField';

afterEach(cleanup);

beforeAll(() => {});

afterAll(() => {
  clear();
});

const options = [
  {
    label: 'Red is the best color according to scientific research',
    value: '#Red is the best color according to scientific research',
  },
  {
    label: 'Green',
    value: '#4CAF50',
  },
  {
    label: 'Blue',
    value: '#2196F3',
  },
];

const SELECT_ID = 'select-inside-a-form';
const SELECT_NAME = 'select-name';
const SUBMIT_BUTTON_ID = 'submit-button';

test('submitting a form with Select', async () => {
  const onSubmit = jest.fn();

  const { getByTestId } = render(
    <PageProviders>
      <form onSubmit={onSubmit}>
        <FormField label="Label" required extraInfo="Extra info">
          <Select
            id={SELECT_ID}
            data-testid={SELECT_ID}
            name={SELECT_NAME}
            placeholder="Select a option..."
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value} label={option.label} />
            ))}
          </Select>
        </FormField>
        <button type="submit" id={SUBMIT_BUTTON_ID} data-testid={SUBMIT_BUTTON_ID}>
          Submit
        </button>
      </form>
    </PageProviders>,
  );

  const input = getByTestId(SELECT_ID);
  fireEvent.focus(input);

  const optionElement = getByTestId(options[0].value);
  fireEvent.click(optionElement);

  const submitButtonElement = getByTestId(SUBMIT_BUTTON_ID);
  fireEvent.click(submitButtonElement);

  const submittedEvent = onSubmit.mock.calls[0][0];

  expect(submittedEvent.target).toBeDefined();

  // Access the form data from the event object
  const formData = new FormData(submittedEvent.target);

  // Access specific form field values and make assertions
  const selectValue = formData.get(SELECT_NAME);
  expect(selectValue).toBe(options[0].value);
});

test('submitting a form with multi Select', async () => {
  const onSubmit = jest.fn();

  const { getByTestId } = render(
    <PageProviders>
      <form onSubmit={onSubmit}>
        <FormField label="Label" required extraInfo="Extra info">
          <Select
            id={SELECT_ID}
            data-testid={SELECT_ID}
            name={SELECT_NAME}
            placeholder="Select a option..."
            multiple
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value} label={option.label} />
            ))}
          </Select>
        </FormField>
        <button type="submit" id={SUBMIT_BUTTON_ID} data-testid={SUBMIT_BUTTON_ID}>
          Submit
        </button>
      </form>
    </PageProviders>,
  );

  const input = getByTestId(SELECT_ID);
  fireEvent.focus(input);

  const optionElementOne = getByTestId(options[0].value);
  fireEvent.click(optionElementOne);

  const optionElementTwo = getByTestId(options[1].value);
  fireEvent.click(optionElementTwo);

  const submitButtonElement = getByTestId(SUBMIT_BUTTON_ID);
  fireEvent.click(submitButtonElement);

  const submittedEvent = onSubmit.mock.calls[0][0];

  expect(submittedEvent.target).toBeDefined();

  // Access the form data from the event object
  const formData = new FormData(submittedEvent.target);

  // Access specific form field values and make assertions
  const selectValues = formData.getAll(SELECT_NAME);
  const expectedValues = [options[0].value, options[1].value];

  expect(selectValues).toEqual(expectedValues);
});

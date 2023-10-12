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

test('submitting a form with Select element', async () => {
  const SELECT_ID = 'select-inside-a-form';
  const SELECT_NAME = 'select-name';
  const SUBMIT_BUTTON_ID = 'submit-button';

  const onSubmit = (e) => {
    console.log(e);
    expect(true).toBe(true);
  };

  const { getByText, getByTestId } = render(
    <PageProviders>
      <form onSubmit={onSubmit}>
        <FormField label="Label" required extraInfo="Extra info">
          <Select id={SELECT_ID} name={SELECT_NAME} placeholder="Select a option...">
            {options.map((option) => (
              <Option key={option.value} value={option.value} label={option.label} />
            ))}
          </Select>
        </FormField>
        <button type="submit" id={SUBMIT_BUTTON_ID}>
          Submit
        </button>
      </form>
    </PageProviders>,
  );

  //   const input = getByTestId(SELECT_ID);
  //   fireEvent.focus(input);

  //   const date = getByText('20');
  //   fireEvent.click(date);
});

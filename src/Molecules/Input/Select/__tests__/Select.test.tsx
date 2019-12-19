import React from 'react';
import {
  render,
  fireEvent,
  waitForDomChange,
  cleanup,
  act,
  queryByText as queryElementByText,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import { Select } from '../Select';
import { createTheme } from '../../../../theme';
import { useSelectMachineFromContext } from '../lib/context';

const theme = createTheme();
afterEach(cleanup);

test('Single select without custom components', async () => {
  const testMessage = 'Super unique label ';
  const INPUT_ID = 'input-1';
  const { queryByText, getByLabelText, getByTestId, getByText, queryByTestId } = render(
    <ThemeProvider theme={theme}>
      <Select
        id={INPUT_ID}
        options={new Array(3).fill(null).map((_, i) => ({ label: `${testMessage}${i}`, value: i }))}
        label="Label"
        placeholder="Placeholder"
      />
    </ThemeProvider>,
  );

  const body = document.body;
  const formField = getByLabelText('Label');
  const button = getByTestId('input-select-button');
  // Options are invisible by default
  expect(queryByText(`${testMessage}0`)).toBeNull();

  // But placeholder should be visible
  expect(queryElementByText(button, 'Placeholder')).not.toBeNull();

  // No focus by default
  expect(document.activeElement).toBe(body);

  fireEvent.click(formField);

  // After click component becomes open
  // And search field inside is focused
  const list = getByTestId('input-select-list');
  const searchInput = getByTestId('input-select-search-field');

  expect(document.activeElement).toBe(searchInput);

  const getCurrentActiveDescendant = () =>
    searchInput.attributes.getNamedItem('aria-activedescendant').value;
  // But active-descendant points to the first option
  expect(getCurrentActiveDescendant()).toBe(`${INPUT_ID}-option-0`);
  // After ArrowDown pressing, next one should be preselected
  fireEvent.keyDown(list, { key: 'ArrowDown' });
  await waitForDomChange({ container: list });

  expect(getCurrentActiveDescendant()).toBe(`${INPUT_ID}-option-1`);

  // After another double ArrowDown we should be on first item again
  fireEvent.keyDown(list, { key: 'ArrowDown' });
  fireEvent.keyDown(list, { key: 'ArrowDown' });
  await waitForDomChange({ container: list });

  expect(getCurrentActiveDescendant()).toBe(`${INPUT_ID}-option-0`);

  // After typing label of last option, it becomes preselected
  // Mind timeout here
  const option3id = `${INPUT_ID}-option-2`;
  const option3Label = `${testMessage}2`;
  fireEvent.change(searchInput, { target: { value: `${testMessage}2` } });
  await waitForDomChange({ container: list, timeout: 300 });
  expect(getCurrentActiveDescendant()).toBe(option3id);

  const preselectedOption = getByText(option3Label);
  fireEvent.click(preselectedOption);

  // Selected item => dropdown in collapsed state
  const searchInput2 = queryByTestId('input-select-search-field');
  expect(searchInput2).toBeNull();

  // Label of option should appear inside button
  expect(queryElementByText(button, option3Label)).not.toBeNull();
});

test('Multi select with actions (also disabled actions)', async () => {
  const testMessage = 'Super unique label ';
  const INPUT_ID = 'input-1';
  const actions = [
    { label: 'first action', onSelect: jest.fn() },
    { label: 'second action', onSelect: jest.fn() },
    { label: 'disabled action', onSelect: jest.fn(), disabled: true },
  ];
  const handleChange = jest.fn();
  const options = new Array(3)
    .fill(null)
    .map((_, i) => ({ label: `${testMessage}${i}`, value: i }));
  const { getByLabelText, getByTestId, getByText, queryByTestId } = render(
    <ThemeProvider theme={theme}>
      <Select
        id={INPUT_ID}
        options={options}
        actions={actions}
        multiselect
        label="Label"
        placeholder="Placeholder"
        onChange={handleChange}
        components={{
          SelectedValue: React.forwardRef((_, ref) => {
            const [state] = useSelectMachineFromContext();
            return (
              // @ts-ignore
              <div ref={ref} data-testid="custom-selected-value">
                {
                  // @ts-ignore
                  state.context.selectedItems.length
                }{' '}
                items
              </div>
            );
          }),
        }}
      />
    </ThemeProvider>,
  );

  const formField = getByLabelText('Label');

  fireEvent.click(formField);

  // After click component becomes open
  // And search field inside is focused
  const list = getByTestId('input-select-list');
  const searchInput = getByTestId('input-select-search-field');

  const getCurrentActiveDescendant = () =>
    searchInput.attributes.getNamedItem('aria-activedescendant').value;

  // active-descendant points to the first option
  expect(getCurrentActiveDescendant()).toBe(`${INPUT_ID}-option-0`);

  // After ArrowDown pressing, next one should be preselected
  fireEvent.keyDown(list, { key: 'ArrowDown' });
  await waitForDomChange({ container: list });

  expect(getCurrentActiveDescendant()).toBe(`${INPUT_ID}-option-1`);

  const option0 = queryElementByText(list, options[0].label);

  fireEvent.click(option0);

  expect(handleChange).toBeCalledWith([options[0]]);

  fireEvent.click(option0);

  expect(handleChange).toBeCalledWith([]);

  // After another double ArrowDown we should be on the 3rd ACTION
  // Which is disabled
  fireEvent.keyDown(list, { key: 'ArrowDown' });
  fireEvent.keyDown(list, { key: 'ArrowDown' });
  fireEvent.keyDown(list, { key: 'ArrowDown' });
  fireEvent.keyDown(list, { key: 'ArrowDown' });
  await waitForDomChange({ container: list });

  expect(getCurrentActiveDescendant()).toBe(`${INPUT_ID}-action-2`);

  const preselectedAction = getByText(actions[2].label);
  expect(actions[2].onSelect).not.toBeCalled();
  fireEvent.click(preselectedAction);
  // Disabled => onSelect not called
  expect(actions[2].onSelect).not.toBeCalled();

  // Disabled => dont collapse after click
  const searchInput2 = queryByTestId('input-select-search-field');
  expect(searchInput2).not.toBeNull();

  const preselectedAction2 = getByText(actions[0].label);
  expect(actions[0].onSelect).not.toBeCalled();
  fireEvent.click(preselectedAction2);
  // This action is enabled => onSelect called
  expect(actions[0].onSelect).toBeCalled();

  // And dropdown collapsed
  const searchInput3 = queryByTestId('input-select-search-field');
  expect(searchInput3).toBeNull();
});

test('Single select with actions', async () => {
  const testMessage = 'Super unique label ';
  const INPUT_ID = 'input-1';
  const actions = [
    { label: 'first action', onSelect: jest.fn() },
    { label: 'second action', onSelect: jest.fn() },
  ];
  const options = new Array(3)
    .fill(null)
    .map((_, i) => ({ label: `${testMessage}${i}`, value: i }));
  const { getByLabelText, getByTestId, getByText, queryByTestId } = render(
    <ThemeProvider theme={theme}>
      <Select
        id={INPUT_ID}
        options={options}
        actions={actions}
        label="Label"
        placeholder="Placeholder"
      />
    </ThemeProvider>,
  );

  const formField = getByLabelText('Label');

  fireEvent.click(formField);

  // After click component becomes open
  // And search field inside is focused
  const list = getByTestId('input-select-list');
  const searchInput = getByTestId('input-select-search-field');

  const getCurrentActiveDescendant = () =>
    searchInput.attributes.getNamedItem('aria-activedescendant').value;

  // active-descendant points to the first option
  expect(getCurrentActiveDescendant()).toBe(`${INPUT_ID}-option-0`);

  // After ArrowDown pressing, next one should be preselected
  fireEvent.keyDown(list, { key: 'ArrowDown' });
  await waitForDomChange({ container: list });

  expect(getCurrentActiveDescendant()).toBe(`${INPUT_ID}-option-1`);

  // After another double ArrowDown we should be on FIRST ACTION
  fireEvent.keyDown(list, { key: 'ArrowDown' });
  fireEvent.keyDown(list, { key: 'ArrowDown' });
  await waitForDomChange({ container: list });

  expect(getCurrentActiveDescendant()).toBe(`${INPUT_ID}-action-0`);

  const preselectedAction = getByText(actions[0].label);
  expect(actions[0].onSelect).not.toBeCalled();
  fireEvent.click(preselectedAction);

  // Selected item => dropdown in collapsed state
  const searchInput2 = queryByTestId('input-select-search-field');
  expect(searchInput2).toBeNull();
  expect(actions[0].onSelect).toBeCalled();
});

test('Multiselect without custom components and with select all', async () => {
  const testMessage = 'Super unique label ';
  const selectAllLabel = `Select all`;
  const INPUT_ID = 'input-1';
  const { getByLabelText, getByTestId, getByText, queryByTestId } = render(
    <ThemeProvider theme={theme}>
      <Select
        id={INPUT_ID}
        options={[{ label: selectAllLabel, value: null, [Select.SYMBOL_ALL]: true } as any].concat(
          new Array(3).fill(null).map((_, i) => ({ label: `${testMessage}${i}`, value: i })),
        )}
        multiselect
        components={{
          SelectedValue: React.forwardRef((_, ref) => {
            const [state] = useSelectMachineFromContext();
            return (
              // @ts-ignore
              <div ref={ref} data-testid="custom-selected-value">
                {
                  // @ts-ignore
                  state.context.selectedItems.length
                }{' '}
                items
              </div>
            );
          }),
        }}
        label="Label"
        placeholder="Placeholder"
      />
    </ThemeProvider>,
  );

  const formField = getByLabelText('Label');
  const button = getByTestId('input-select-button');

  fireEvent.click(formField);

  // After click component becomes open
  // And search field inside is focused
  const list = getByTestId('input-select-list');

  const option3Label = `${testMessage}2`;
  const option2Label = `${testMessage}1`;

  const option3 = getByText(option3Label);
  fireEvent.click(option3);

  // Selected item => dropdown NOT in collapsed state, because multiselect
  const searchInput2 = queryByTestId('input-select-search-field');
  expect(searchInput2).not.toBeNull();

  const option2 = getByText(option2Label);
  fireEvent.click(option2);
  expect(queryByTestId('custom-selected-value')).toHaveTextContent('2 items');

  // If click select all, then all are selected
  const selectAllOption = getByText(selectAllLabel);
  fireEvent.click(selectAllOption);
  expect(queryByTestId('custom-selected-value')).toHaveTextContent('4 items');

  // If unselect one, select all option unselects itself
  fireEvent.click(option2);
  expect(queryByTestId('custom-selected-value')).toHaveTextContent('2 items');

  // Press ESC => collapsed state, button in focus
  fireEvent.keyDown(list, { key: 'Escape' });
  await waitForDomChange({ container: list });
  const searchInput3 = queryByTestId('input-select-search-field');
  expect(searchInput3).toBeNull();
  expect(document.activeElement).toBe(button);
});

test('Props changes are propagated', () => {
  const testMessage = 'Super unique label ';
  const INPUT_ID = 'input-1';

  const commonProps = {
    id: INPUT_ID,
    options: new Array(3).fill(null).map((_, i) => ({ label: `${testMessage}${i}`, value: i })),
    label: 'Label',
    placeholder: 'Placeholder',
  };

  const { getByText, rerender } = render(
    <ThemeProvider theme={theme}>
      <Select {...commonProps} />
    </ThemeProvider>,
  );

  const textInsideButton = getByText('Placeholder');

  rerender(
    <ThemeProvider theme={theme}>
      <Select {...commonProps} placeholder="Different placeholder" />
    </ThemeProvider>,
  );
  expect(textInsideButton).toHaveTextContent('Different placeholder');

  rerender(
    <ThemeProvider theme={theme}>
      <Select
        {...commonProps}
        value={[{ label: `${testMessage}0`, value: 0 }]}
        onChange={() => {}}
      />
    </ThemeProvider>,
  );

  expect(textInsideButton).toHaveTextContent(`${testMessage}0`);
});

test('Autofocus', () => {
  const testMessage = 'Super unique label ';
  const INPUT_ID = 'input-1';

  const handleBlur = jest.fn();
  const handleFocus = jest.fn();

  const { getByTestId, rerender } = render(
    <ThemeProvider theme={theme}>
      <>
        <Select
          id={INPUT_ID}
          onBlur={handleBlur}
          onFocus={handleFocus}
          autoFocus={false}
          options={new Array(3)
            .fill(null)
            .map((_, i) => ({ label: `${testMessage}${i}`, value: i }))}
          label="Label"
          placeholder="Placeholder"
        />
      </>
    </ThemeProvider>,
  );
  expect(document.activeElement).toBe(document.body);

  rerender(
    <ThemeProvider theme={theme}>
      <>
        <Select
          id={INPUT_ID}
          onBlur={handleBlur}
          onFocus={handleFocus}
          autoFocus
          options={new Array(3)
            .fill(null)
            .map((_, i) => ({ label: `${testMessage}${i}`, value: i }))}
          label="Label"
          placeholder="Placeholder"
        />
      </>
    </ThemeProvider>,
  );
  const button = getByTestId('input-select-button');
  expect(document.activeElement).toBe(button);
  expect(handleFocus).toHaveBeenCalledTimes(1);
  expect(handleBlur).not.toHaveBeenCalled();
});

test('onBlur, onChange, onFocus', async () => {
  const testMessage = 'Super unique label ';
  const INPUT_ID = 'input-1';

  const handleBlur = jest.fn();
  const handleFocus = jest.fn();
  const handleChange = jest.fn();

  const { getByTestId, getByText } = render(
    <ThemeProvider theme={theme}>
      <>
        <Select
          id={INPUT_ID}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          options={new Array(3)
            .fill(null)
            .map((_, i) => ({ label: `${testMessage}${i}`, value: i }))}
          label="Label"
          placeholder="Placeholder"
        />
        <button type="button" tabIndex={0} data-testid="other-tabbable">
          Other tabbable button
        </button>
      </>
    </ThemeProvider>,
  );

  // Nothing gets triggered before actual interaction
  expect(handleBlur).not.toHaveBeenCalled();
  expect(handleFocus).not.toHaveBeenCalled();
  expect(handleChange).not.toHaveBeenCalled();

  const button = getByTestId('input-select-button');
  // Open the dropdown
  fireEvent.click(button);

  expect(handleBlur).not.toHaveBeenCalled();
  expect(handleFocus).toHaveBeenCalledTimes(1);
  expect(handleChange).not.toHaveBeenCalled();

  const option3Label = `${testMessage}2`;
  const preselectedOption = getByText(option3Label);
  // Selection will close dropdown since it's single select
  fireEvent.click(preselectedOption);

  expect(document.activeElement).toBe(button);
  expect(handleBlur).not.toHaveBeenCalled();
  expect(handleFocus).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledTimes(1);

  await act(async () => {
    getByTestId('other-tabbable').focus();
    // Giving tick to update activeElement
    await new Promise(res => setTimeout(res, 1));
  });

  expect(handleBlur).toHaveBeenCalledTimes(1);
  expect(handleFocus).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledTimes(1);
});

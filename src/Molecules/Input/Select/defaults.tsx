import * as React from 'react';
import R from 'ramda';

import { Box } from '../../..';
import {
  OptionList as DefaultList,
  Option as DefaultListItem,
} from './SingleSelectList/SingleSelectList';

import { useSelectReducer } from './context';

import { SelectState, Action, ActionTypes, OptionBase } from './Select.types';

const getLabelOrPlaceholder = <T extends OptionBase>({
  value,
  placeholder,
}: {
  options: T[];
  value: any[];
  placeholder: React.ReactNode;
}) => {
  if (value.length === 0) return placeholder;

  const selectedOptionLabel = R.pathOr('', [0, 'label'], value);
  return selectedOptionLabel;
};

// FIXME
// Need to upgrade to ts@3.5+
// Then it can be written as
// ActionTypes = {} as const
export const defaultActionTypes: Record<ActionTypes, ActionTypes> = {
  'Select.Open': 'Select.Open' as 'Select.Open',
  'Select.Close': 'Select.Close' as 'Select.Close',
  'Select.Toggle': 'Select.Toggle' as 'Select.Toggle',
  'Select.SelectValue': 'Select.SelectValue' as 'Select.SelectValue',
  'Select.DeselectValue': 'Select.DeselectValue' as 'Select.DeselectValue',
  'Select.SyncState': 'Select.SyncState' as 'Select.SyncState',
};

export const defaultComponents = {
  ListItem: React.forwardRef<HTMLDivElement, { index: number }>(({ index }, ref) => {
    const [state] = useSelectReducer();
    const option = state.options[index];
    const selected = state.value.includes(option);

    return (
      <DefaultListItem
        ref={ref}
        selected={selected}
        disabled={option.disabled}
        label={option.label}
        value={option.value}
      />
    );
  }),
  List: DefaultList,
  SelectedValue: () => {
    const [state] = useSelectReducer();
    return <Box px={2}>{getLabelOrPlaceholder(state)}</Box>;
  },
};

export const useComponentsWithDefaults = (components: any = {}) => {
  return React.useMemo(
    () =>
      // @ts-ignore
      R.pipe(
        // @ts-ignore
        R.map(React.forwardRef),
        R.mergeRight(defaultComponents),
      )(components),
    [components],
  );
};

export const defaultSelectInitialState: SelectState = {
  open: false,
  value: [],
  options: [],
  placeholder: '',
  initialized: false,
};

export const defaultSelectReducer = (state: SelectState, action: Action): SelectState => {
  switch (action.type) {
    case defaultActionTypes['Select.Open']:
      return { ...state, open: true };

    case defaultActionTypes['Select.Toggle']:
      return { ...state, open: !state.open };

    case defaultActionTypes['Select.Close']:
      return { ...state, open: false };

    case defaultActionTypes['Select.DeselectValue']:
    case defaultActionTypes['Select.SelectValue']:
      return { ...state, open: false, value: [action.payload] };

    case defaultActionTypes['Select.SyncState']:
      return { ...state, ...action.payload, initialized: true };

    default:
      return state;
  }
};

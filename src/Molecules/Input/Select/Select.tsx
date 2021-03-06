import React, { useMemo } from 'react';
import { useMachine } from '@xstate/react';
import styled from 'styled-components';
import R from 'ramda';

import { useOnClickOutside } from '../../../common/Hooks';

import {
  ListItemWrapper,
  ListWrapper,
  ListWrapperWithPortal,
  SelectedValueWrapper,
  FormFieldOrFragment,
  SearchWrapper,
  ActionsWrapper,
} from './lib/wrappers';
import { useSelectMachineFromContext, SelectStateContext } from './lib/context';
import {
  useComponentsWithDefaults,
  defaultComponents,
  defaultComponentsMultiselect,
} from './lib/defaults';
import { SelectMachine, OptionLike, ACTION_TYPES } from './machine';
import { Props, Action as ActionType } from './Select.types';

import { assert } from '../../../common/utils';

import {
  useAutofocus,
  useDelegateKeyDownToMachine,
  useFocusFromMachine,
  useIsFirstRender,
  useMultiRef,
  usePropagateChangesThroughOnChange,
  useSyncPropsWithMachine,
  useOnBlurAndOnFocus,
} from './lib/hooks';
import { SYMBOL_ALL } from './lib/constants';
import TrackingContext from '../../../common/tracking';
import { getSingleSelectValue } from './lib/utils';

/* eslint-disable spaced-comment */
const HiddenSelect = styled.select`
  display: none;
`;
const noop = () => {};

const getValuesForNativeSelect = (
  selectedItems: { options?: any[]; value: any }[],
  isMultiselect: boolean,
) => {
  if (isMultiselect) {
    return selectedItems.map((x) => x.value);
  }

  const value = getSingleSelectValue(selectedItems);

  return R.pathOr(undefined, ['value'], R.head(value));
};

const Select = (props: Props) => {
  assert(Boolean(props.id), `Input.Select: "id" is required.`);
  assert(
    typeof props.value !== 'undefined' ? typeof props.onChange !== 'undefined' : true,
    `Input.Select: You can't use 'value' prop without onChange. It makes sense only if you want a readonly Input.Select, which is really weird. Don't do that.`,
  );

  const trackContext = React.useContext(TrackingContext);

  const isFirstRender = useIsFirstRender();

  const allOptions = useMemo(
    () =>
      R.pipe(
        R.map((option: any) => (option.options ? [option, option.options] : option)),
        R.flatten,
      )(props.options),
    [props.options],
  );

  /******      Machine instantiation      ******/
  const machineHandlers = useMachine(SelectMachine, {
    context: {
      label: props.label,
      error: props.error || '',
      success: props.success || false,
      options: allOptions,
      selectedItems: [],
      disabled: props.disabled || false,
      open: false,
      itemFocusIdx: null,
      placeholder: props.placeholder || '',
      searchQuery: '',
      extraInfo: props.extraInfo || '',
      multiselect: props.multiselect || false,
      lastNavigationType: null,
      visibleOptions: allOptions,
      showSearch: props.showSearch || false,
      id: props.id,
      valueFromProps: props.value,
      uncommitedSelectedItems: [],
      actions: props.actions || [],
    },
  });
  const [machineState, send, service] = machineHandlers;

  /******      Tracking      ******/
  const currentPropsRef = React.useRef(props);
  currentPropsRef.current = props;
  React.useEffect(() => {
    const listener = (e: any) =>
      trackContext && trackContext.track('Input.Select', e as any, currentPropsRef.current);

    service.onEvent(listener);

    return () => {
      service.off(listener);
    };
  }, [trackContext, service]);

  React.useEffect(() => {
    if (!props.onSearchQueryChange) return;
    const listener = (e: { type: string; payload: string }) =>
      e.type === ACTION_TYPES.SEARCH_QUERY_UPDATE && props.onSearchQueryChange!(e);

    service.onEvent(listener as any);
    // eslint-disable-next-line consistent-return
    return () => {
      service.off(listener);
    };
  }, [service, props.onSearchQueryChange]);

  /******      Machine syncing      ******/
  usePropagateChangesThroughOnChange(machineState, send, props.onChange, isFirstRender);
  useSyncPropsWithMachine(
    {
      searchQuery: props.searchQuery || machineState.context.searchQuery,
      label: props.label,
      options: allOptions,
      placeholder: props.placeholder,
      error: props.error,
      valueFromProps: props.value,
      success: props.success,
      disabled: props.disabled,
      extraInfo: props.extraInfo,
      multiselect: props.multiselect,
      showSearch: props.showSearch || false,
      id: props.id,
      actions: props.actions || [],
    },
    [
      send,
      props.label,
      allOptions,
      props.placeholder,
      props.error,
      props.success,
      props.disabled,
      props.extraInfo,
      props.value,
      props.multiselect,
      props.showSearch,
      props.id,
      props.actions,
      props.searchQuery,
    ],
  );

  /******      Handlers      ******/
  const handleClickListItem = (option: OptionLike) => (e: React.MouseEvent) => {
    e.preventDefault();
    send({ type: 'ITEM_CLICK', payload: option });
    return false;
  };

  const handleClickActionItem = (action: ActionType) => (e: React.MouseEvent) => {
    e.preventDefault();
    send({ type: 'SELECT_ITEM', payload: action });
    return false;
  };

  const handleKeyDown = useDelegateKeyDownToMachine(send, !props.showSearch);

  const isKeyboardNavigation = machineState.matches(
    'interaction.enabled.active.navigation.keyboard',
  );

  const handleMouseMove = React.useCallback(() => {
    if (isKeyboardNavigation) {
      send('MOUSE_MOVE');
    }
  }, [send, isKeyboardNavigation]);

  /******      Refs      ******/
  const buttonRef = React.useRef(null);
  const [itemRefs, setItemRef] = useMultiRef();
  const listRef = React.useRef(null);
  const formFieldRef = React.useRef(null);
  const selectWrapperRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const searchRef = React.useRef(null);

  /******      Focus management      ******/
  useAutofocus(buttonRef, props.autoFocus);
  useFocusFromMachine(machineState, buttonRef, itemRefs, searchRef);
  useOnClickOutside([listRef, formFieldRef], () => send({ type: 'BLUR' }));
  const { handleBlur, handleFocus } = useOnBlurAndOnFocus(
    machineState,
    send,
    props.onBlur,
    props.onFocus,
    formFieldRef,
    isFirstRender,
    inputRef,
    listRef,
  );

  /******      Renderers      ******/
  const { ListItem, List, SelectedValue, Search, Action } = useComponentsWithDefaults(
    props.components,
    {
      multiselect: machineState.context.multiselect,
    },
  );

  /******      Values from machine      ******/
  const isOpen = machineState.context.open;
  const isDisabled = machineState.context.disabled;
  const error = machineState.context.error;
  const success = machineState.context.success;
  const extraInfo = machineState.context.extraInfo;
  const label = machineState.context.label;
  const placeholder = machineState.context.placeholder;
  const options = machineState.context.visibleOptions;
  const selectedItems = machineState.context.selectedItems;
  const multiselect = machineState.context.multiselect;

  const ListWrapperComponent = props.withPortal ? ListWrapperWithPortal : ListWrapper;
  const hiddenSelectValues = getValuesForNativeSelect(selectedItems, multiselect);

  return (
    <div className={props.className}>
      <HiddenSelect
        name={props.name}
        disabled={isDisabled}
        ref={inputRef}
        aria-hidden="true"
        {...(multiselect ? { multiple: true } : {})}
        value={hiddenSelectValues}
        onChange={noop}
      >
        {placeholder && <option label={placeholder} value="" />}
        {options.map((x: any) =>
          x.options ? (
            <optgroup label={x.label} key={x.label}>
              {x.options.map((y: any) => (
                <option label={y.label} value={y.value} key={`${y.label}${y.value}`} />
              ))}
            </optgroup>
          ) : (
            <option label={x.label} value={x.value} key={`${x.label}${x.value}`} />
          ),
        )}
      </HiddenSelect>
      <SelectStateContext.Provider value={machineHandlers}>
        <FormFieldOrFragment
          label={label}
          hideLabel={props.hideLabel}
          labelToolTip={props.labelTooltip}
          labelTooltipPosition={props.labelTooltipPosition}
          noFormField={props.noFormField}
          ref={formFieldRef}
          innerRef={selectWrapperRef}
          disabled={isDisabled}
          open={isOpen}
          fullWidth={props.fullWidth}
          error={error}
          success={success}
          extraInfo={extraInfo}
          id={props.id}
          size={props.size}
          onFocus={handleFocus}
          onBlur={handleBlur}
          width={props.width}
        >
          <SelectedValueWrapper
            ref={buttonRef}
            data-testid="input-select-button"
            open={isOpen}
            label={label}
            disabled={isDisabled}
            noFormField={props.noFormField}
            placeholder={placeholder}
            component={SelectedValue}
            options={options}
            state={machineState}
            id={props.id}
          />
          {isOpen && (
            <ListWrapperComponent
              component={List}
              triggerElement={selectWrapperRef}
              noFormField={props.noFormField}
              onKeyDown={handleKeyDown}
              onMouseMove={handleMouseMove}
              ref={listRef}
              data-testid="input-select-list"
              searchComponent={<SearchWrapper ref={searchRef} component={Search} />}
              listPosition={props.listPosition}
              placement={props.placement}
              actionsComponent={
                machineState.context.actions.length > 0 ? (
                  <ActionsWrapper component={Action} onClickFactory={handleClickActionItem} />
                ) : null
              }
              maxHeight={props.listMaxHeight}
              width={props.width}
            >
              {allOptions.map((x: any, index: number) => (
                <ListItemWrapper
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  index={index}
                  ref={setItemRef(index) as any}
                  option={x}
                  id={props.id}
                  onClick={x.disabled || x.options ? noop : handleClickListItem(x)}
                  component={ListItem}
                />
              ))}
            </ListWrapperComponent>
          )}
        </FormFieldOrFragment>
      </SelectStateContext.Provider>
    </div>
  );
};

Select.useSelectMachineFromContext = useSelectMachineFromContext;
Select.ACTION_TYPES = ACTION_TYPES;
Select.SYMBOL_ALL = SYMBOL_ALL;
Select.defaults = {
  components: defaultComponents,
  componentsMultiselect: defaultComponentsMultiselect,
};

export { Select };

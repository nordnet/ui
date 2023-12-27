import React, { ForwardedRef, forwardRef, useEffect } from 'react';
import {
  useSelect as useMuiSelect,
  SelectProvider as MuiSelectProvider,
} from '@mui/base/useSelect';
import { FadedScroll } from '../..';
import { HiddenSelect } from './HiddenSelect';
import { ListContainer, Listbox, ListboxContainer, Root } from './Select.styles';
import { SelectProvider } from './useSelect';
import { Props } from './Select.types';
import { Arrow } from './Arrow';
import { Group } from './Group';
import { Option } from './Option';
import { Trigger } from './Trigger';
import { ValueDisplay } from './ValueDisplay';
import { ValueDisplayMultiSelect } from './ValueDisplayMultiSelect';

const SelectWithForwardRef = forwardRef<HTMLButtonElement, Props>(
  (props: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      disabled,
      hasError = false,
      multiple,
      name,
      onChange,
      placeholder,
      size = 'm',
      value: valueFromProps,
      valueDisplay: valueDisplayFromProps,
      trigger: triggerFromProps,
      width = 50,
      fullWidth,
      id,
      defaultValue,
    } = props;
    const listboxRef = React.useRef<HTMLUListElement>(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const { getButtonProps, getListboxProps, contextValue, value, getOptionMetadata, options } =
      useMuiSelect<string, boolean>({
        listboxRef,
        disabled,
        multiple,
        open: isOpen,
        onChange,
        onOpenChange: setIsOpen,
        value: valueFromProps,
        defaultValue,
      });

    useEffect(() => {
      if (isOpen) {
        listboxRef.current?.focus();
      }
    }, [isOpen]);

    return (
      <SelectProvider
        getButtonProps={getButtonProps}
        getOptionMetadata={getOptionMetadata}
        value={value}
      >
        <Root $width={width} $fullWidth={fullWidth} data-testid={id}>
          {triggerFromProps || (
            <Trigger size={size} hasError={hasError} ref={ref}>
              {valueDisplayFromProps || <ValueDisplay placeholder={placeholder} />}
              <Arrow />
            </Trigger>
          )}
          <ListContainer aria-hidden={!isOpen} $hidden={!isOpen}>
            <ListboxContainer>
              <FadedScroll maxHeight={50}>
                <Listbox {...getListboxProps()}>
                  <MuiSelectProvider value={contextValue}>{children}</MuiSelectProvider>
                </Listbox>
              </FadedScroll>
            </ListboxContainer>
          </ListContainer>
        </Root>
        {name && value ? (
          <HiddenSelect name={name} multiple={multiple} value={value} options={options} />
        ) : null}
      </SelectProvider>
    );
  },
);

type Components = {
  Arrow: typeof Arrow;
  Group: typeof Group;
  Option: typeof Option;
  Trigger: typeof Trigger;
  ValueDisplay: typeof ValueDisplay;
  ValueDisplayMultiSelect: typeof ValueDisplayMultiSelect;
};

export const Select = SelectWithForwardRef as typeof SelectWithForwardRef & Components;

Select.Arrow = Arrow;
Select.Group = Group;
Select.Option = Option;
Select.Trigger = Trigger;
Select.ValueDisplay = ValueDisplay;
Select.ValueDisplayMultiSelect = ValueDisplayMultiSelect;

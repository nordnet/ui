import React, { ForwardedRef, forwardRef, useEffect } from 'react';
import useMuiSelect, { SelectProvider as MuiSelectProvider } from '@mui/base/useSelect';
import { FadedScroll } from '../..';
import { HiddenSelect } from './HiddenSelect';
import { ListContainer, Listbox, ListboxContainer, Root } from './Select.styles';
import { Props } from './Select.types';
import { ValueDisplay } from './ValueDisplay';
import { Trigger } from './Trigger';
import { Arrow, SelectProvider } from '.';

export const Select = forwardRef<HTMLButtonElement, Props>(function SelectComponent(
  props: Props,
  ref: ForwardedRef<HTMLButtonElement>,
) {
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
    id,
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
      <Root $width={width} data-testid={id}>
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
});

import React, { ForwardedRef, forwardRef, useEffect } from 'react';
import useSelect, { SelectProvider } from '@mui/base/useSelect';
import { FadedScroll } from '../..';
import { HiddenSelect } from './HiddenSelect';
import {
  ListContainer,
  Listbox,
  ListboxContainer,
  Root,
  StyledChevronDown8,
} from './Select.styles';
import { Props } from './Select.types';
import { ValueDisplay as DefaultValueDisplay } from './ValueDisplay';
import { Trigger as DefaultTrigger } from './Trigger';

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
    width = 50,
    slots = {},
    slotProps = {},
  } = props;
  const listboxRef = React.useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const { getButtonProps, getListboxProps, contextValue, value, getOptionMetadata, options } =
    useSelect<string, boolean>({
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

  const Trigger = slots.trigger || DefaultTrigger;
  const ValueDisplay = slots.valueDisplay || DefaultValueDisplay;
  // Needs to be done for a 1.0 release

  // TODO: Check with Zoe if we can get figma design for the "old" sizes.

  return (
    <>
      <Root $width={width}>
        <Trigger
          size={size}
          hasError={hasError}
          hasValue={!!value}
          {...slotProps.trigger}
          {...getButtonProps()}
          ref={ref}
        >
          <ValueDisplay
            value={value === null ? undefined : value}
            getOptionMetadata={getOptionMetadata}
            placeholder={placeholder}
            {...slotProps.valueDisplay}
          />
          <StyledChevronDown8 color={(t) => t.colorTokens.neutral.icon_default} />
        </Trigger>
        <ListContainer aria-hidden={!isOpen} $hidden={!isOpen}>
          <ListboxContainer>
            <FadedScroll maxHeight={50}>
              <Listbox {...getListboxProps()}>
                <SelectProvider value={contextValue}>{children}</SelectProvider>
              </Listbox>
            </FadedScroll>
          </ListboxContainer>
        </ListContainer>
      </Root>
      {name && value ? (
        <HiddenSelect name={name} multiple={multiple} value={value} options={options} />
      ) : null}
    </>
  );
});

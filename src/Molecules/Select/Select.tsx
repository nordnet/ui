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
import { ValueDisplay } from './ValueDisplay';
import { Trigger as DefaultTrigger } from './Trigger';

export const Select = forwardRef<HTMLButtonElement, Props>(function SelectComponent(
  props: Props,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const {
    children,
    disabled,
    hasError = false,
    listBoxFooter,
    listBoxHeader,
    multiple,
    name,
    onChange,
    placeholder,
    size = 'm',
    value: valueFromProps,
    valueDisplay,
    width = 50,
    slots = {},
    slotProps = {},
  } = props;
  const listboxRef = React.useRef<HTMLUListElement>(null);
  const [listboxVisible, setListboxVisible] = React.useState(false);
  const { getButtonProps, getListboxProps, contextValue, value, getOptionMetadata, options } =
    useSelect<string, boolean>({
      listboxRef,
      disabled,
      multiple,
      open: listboxVisible,
      onChange,
      onOpenChange: setListboxVisible,
      value: valueFromProps,
    });

  useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  const Trigger = slots.trigger || DefaultTrigger;
  // Needs to be done for a 1.0 release
  // TODO: write tests, in forms as well
  // TODO: Mobile. Should it have the handle (-) in the top?. Devider in the bottom, should it be indented? Should the title equal the label?
  // TODO: With radio looking checkmarks?
  // TODO: Dropdown should not close when clicking the search or the toggle all button in the header (maybe footer?).

  // 2.0
  // TODO: Pill dropdown
  // TODO: Badge dropdown
  // TODO: Loading state?
  // TODO: investigate if the wide select with columns is needed, see figma
  // TODO: Do we want to use popper for the dropdown?

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
          {valueDisplay || (
            <ValueDisplay
              value={value === null ? undefined : value}
              getOptionMetadata={getOptionMetadata}
              placeholder={placeholder}
            />
          )}
          <StyledChevronDown8 color={(t) => t.colorTokens.neutral.icon_default} />
        </Trigger>
        <ListContainer aria-hidden={listboxVisible} $hidden={listboxVisible}>
          <ListboxContainer>
            {listBoxHeader || null}
            <FadedScroll maxHeight={50}>
              <Listbox {...getListboxProps()}>
                <SelectProvider value={contextValue}>{children}</SelectProvider>
              </Listbox>
            </FadedScroll>
            {listBoxFooter || null}
          </ListboxContainer>
        </ListContainer>
      </Root>
      {name && value ? (
        <HiddenSelect name={name} multiple={multiple} value={value} options={options} />
      ) : null}
    </>
  );
});

import * as React from 'react';
import useSelect, { SelectProvider } from '@mui/base/useSelect';
import { FadedScroll } from '../..';
import { HiddenSelect } from './HiddenSelect';
import {
  Arrow,
  ListContainer,
  Listbox,
  ListboxContainer,
  Root,
  StyledChevronDown8,
} from './Select.styles';
import { Props } from './Select.types';
import { ValueDisplay } from './ValueDisplay';
import { Trigger as DefaultTrigger } from './Trigger';

export function Select({
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
}: Props) {
  const listboxRef = React.useRef<HTMLUListElement>(null);
  const [listboxVisible, setListboxVisible] = React.useState(false);
  const { getButtonProps, getListboxProps, contextValue, value, getOptionMetadata } = useSelect<
    string,
    boolean
  >({
    listboxRef,
    disabled,
    multiple,
    open: listboxVisible,
    onChange,
    onOpenChange: setListboxVisible,
    value: valueFromProps,
  });

  React.useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  const Trigger = slots.trigger || DefaultTrigger;

  // TODO: write tests, in forms as well
  // TODO: investigate if the wide select with columns is needed, see figma
  // TODO: Mobile
  // TODO: Badge dropdown
  // TODO: Pill dropdown
  // TODO: Loading state?
  // TODO: With checkboxes?
  // TODO: forward ref to Select component
  // TODO: Do we want to use popper for the dropdown?
  // TODO: Do not allow custom slots.trigger to pass children prop, it will override Triggers children from this file

  return (
    <>
      <Root $width={width}>
        <Trigger
          size={size}
          hasError={hasError}
          hasValue={!!value}
          {...slotProps.trigger}
          {...getButtonProps()}
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
        <ListContainer aria-hidden={!listboxVisible} $hidden={!listboxVisible}>
          <Arrow />
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
      {name && value ? <HiddenSelect name={name} multiple={multiple} value={value} /> : null}
    </>
  );
}

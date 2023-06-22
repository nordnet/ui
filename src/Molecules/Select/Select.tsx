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
  StyledTypography,
  Trigger,
} from './Select.styles';
import { Props } from './Select.types';

export function Select({
  children,
  placeholder,
  size = 'm',
  width = 50,
  disabled,
  hasError = false,
  multiple,
  listBoxHeader,
  listBoxFooter,
  valueDisplay,
  onChange,
  name,
  value: valueFromProps,
}: Props) {
  const listboxRef = React.useRef<HTMLUListElement>(null);
  const [listboxVisible, setListboxVisible] = React.useState(false);

  const { getButtonProps, getListboxProps, contextValue, value } = useSelect<string, false>({
    listboxRef,
    disabled,
    multiple: multiple as false | undefined,
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

  return (
    <>
      <Root $width={width}>
        <Trigger $size={size} $hasError={hasError} $hasValue={!!value} {...getButtonProps()}>
          {valueDisplay || (
            <StyledTypography $hasValue={!!value} type="secondary">
              {value || placeholder}
            </StyledTypography>
          )}
          <StyledChevronDown8 color={(t) => t.colorTokens.neutral.icon_default} />
        </Trigger>
        <ListContainer aria-hidden={!listboxVisible} $hidden={listboxVisible}>
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
      {name ? (
        <HiddenSelect
          name={name}
          multiple={multiple}
          value={value as string | string[] | undefined}
        />
      ) : null}
    </>
  );
}

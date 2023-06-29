import * as React from 'react';
import useSelect, { SelectProvider, UseSelectReturnValue } from '@mui/base/useSelect';
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

function getSelectedOptionsLabel(
  value: string | string[],
  getOptionMetadata: UseSelectReturnValue<string, boolean>['getOptionMetadata'],
): string {
  if (Array.isArray(value)) {
    return value
      .map((v) => getOptionMetadata(v))
      .filter((o) => o !== undefined)
      .map((m) => m?.ref.current?.textContent)
      .join(', ');
  }

  return getOptionMetadata(value)?.label as string;
}

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

  const selectedOptionsLabel =
    value && !valueDisplay ? getSelectedOptionsLabel(value, getOptionMetadata) : null;

  // TODO: Do we want to use popper for the dropdown?
  // TODO: label that is displayed when option is slected can be different than the actual label of the options
  // TODO: write tests, in forms as well
  // TODO: required, disabled
  // TODO: investigate if the wide select with columns is needed, see figma
  // TODO: Mobile
  // TODO: Story with FormField, for label, errors and extra info. Question, should FormField be baked in?
  // TODO: Loading state?
  // TODO: With checkboxes?
  return (
    <>
      <Root $width={width}>
        <Trigger $size={size} $hasError={hasError} $hasValue={!!value} {...getButtonProps()}>
          {valueDisplay || (
            <StyledTypography $hasValue={!!value} type="secondary">
              {selectedOptionsLabel || placeholder}
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
      {name && value ? <HiddenSelect name={name} multiple={multiple} value={value} /> : null}
    </>
  );
}

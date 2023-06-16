import * as React from 'react';
import styled from 'styled-components';
import useSelect, { SelectProvider } from '@mui/base/useSelect';
import { Icon, Typography, FadedScroll, units } from '../..';
import NormalizedElements from '../../common/NormalizedElements';
import { Props } from './Select.types';

const TRIANGLE_SIZE = 10;
const BORDER_SIZE = 1;

export const ellipsis = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Root = styled.div<{ $width: number }>`
  display: inline-block;
  position: relative;
  width: ${(props) => units(props.$width)}px;
`;

const StyledChevronDown8 = styled(Icon.ChevronDown8)`
  margin-left: auto;
`;

const Arrow = styled.div`
  position: absolute;
  z-index: 1;
  left: 16px;
  bottom: calc(100% - 1px);

  &::before,
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid ${(p) => p.theme.color.bubbleBorder};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: ${BORDER_SIZE * 2}px;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid
      ${(p) => p.theme.color.bubbleBackground};
  }
`;

const StyledTypography = styled(Typography)<{ $hasValue: boolean }>`
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing.unit(2)}px;
  color: inherit;
  ${ellipsis}
`;

const ListContainer = styled.div<{ $hidden: boolean }>`
  position: absolute;
  width: 100%;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.dropdown};

  ${({ $hidden }) =>
    $hidden
      ? `opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s step-end;`
      : ''}
`;

const ListboxContainer = styled.div`
  margin: ${TRIANGLE_SIZE}px 0 0 0;
  background: ${({ theme }) => theme.colorTokens.neutral.background_default};
  border: 1px solid ${({ theme }) => theme.colorTokens.neutral.border_default};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(1)}px 0;
  border-radius: 4px;
  overflow: auto;
`;

const Listbox = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const CleanNormalizedButton = React.forwardRef((props: any, ref: React.Ref<any>) => (
  <NormalizedElements.Button ref={ref} {...props} />
));

const Trigger = styled(CleanNormalizedButton)<{ $size: 's' | 'm'; $hasError: boolean }>`
  cursor: pointer;
  color: ${({ theme, $hasValue }) =>
    $hasValue ? theme.colorTokens.neutral.text_default : theme.colorTokens.neutral.text_weak};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(2.5)}px ${({ theme }) => theme.spacing.unit(2)}px;
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError
        ? theme.colorTokens.error.border_default
        : theme.colorTokens.neutral.border_default};
  border-radius: ${({ theme }) => theme.spacing.unit(1)}px;
  height: ${({ theme, $size }) =>
    $size === 's' ? theme.spacing.unit(8) : theme.spacing.unit(10)}px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colorTokens.neutral.background_default};

  &:hover {
    border-color: ${({ theme }) => theme.colorTokens.neutral.border_hover};
  }

  &:focus-within,
  &:focus {
    border-color: ${({ theme }) => theme.colorTokens.action.border_default};
  }

  &[disabled] {
    color: ${({ theme }) => theme.colorTokens.neutral.text_disabled};
    background: ${({ theme }) => theme.colorTokens.neutral.background_disabled};
    border-color: ${({ theme }) => theme.colorTokens.neutral.border_disabled};
    cursor: not-allowed;

    ${StyledChevronDown8} {
      color: ${({ theme }) => theme.colorTokens.neutral.icon_disabled};
    }
  }
`;

const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colorTokens.neutral.border_default};
  padding-top: ${units(1)}px;
`;

export function Select({
  children,
  placeholder,
  size = 'm',
  width = 50,
  disabled,
  hasError = false,
  multiple,
  footer,
  selectedValue,
  onChange,
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
  });

  React.useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  return (
    <Root $width={width}>
      <Trigger $size={size} $hasError={hasError} $hasValue={!!value} {...getButtonProps()}>
        {selectedValue || (
          <StyledTypography $hasValue={!!value} type="secondary">
            {value || placeholder}
          </StyledTypography>
        )}
        <StyledChevronDown8 color={(t) => t.colorTokens.neutral.icon_default} />
      </Trigger>
      <ListContainer aria-hidden={!listboxVisible} $hidden={listboxVisible}>
        <Arrow />
        <ListboxContainer>
          <FadedScroll maxHeight={50}>
            <Listbox {...getListboxProps()}>
              <SelectProvider value={contextValue}>{children}</SelectProvider>
            </Listbox>
          </FadedScroll>
          {footer ? <Footer>{footer}</Footer> : null}
        </ListboxContainer>
      </ListContainer>
    </Root>
  );
}

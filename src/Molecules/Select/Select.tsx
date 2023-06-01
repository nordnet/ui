import * as React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import useSelect, { SelectProvider } from '@mui/base/useSelect';
import { Icon, Typography } from '../..';
import NormalizedElements from '../../common/NormalizedElements';

const Root = styled.div`
  display: inline-block;
  position: relative;
  min-width: 200px;
`;

const SelectContainer = styled.div<{ $size: 's' | 'm' }>`
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.unit(2.5)}px ${({ theme }) => theme.spacing.unit(2)}px;
  border: 1px solid ${({ theme }) => theme.colorTokens.neutral.border_default};
  border-radius: ${({ theme }) => theme.spacing.unit(1)}px;
  height: ${({ theme, $size }) =>
    $size === 's' ? theme.spacing.unit(8) : theme.spacing.unit(10)}px;
  display: flex;
  align-items: center;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colorTokens.neutral.border_hover};
  }
  &:focus-within,
  &:active {
    border: 1px solid ${({ theme }) => theme.colorTokens.action.border_default};
  }
`;

const StyledChevronDown8 = styled(Icon.ChevronDown8)`
  margin-left: auto;
`;

const TRIANGLE_SIZE = 10;
const BORDER_SIZE = 1;

const Arrow = styled.div`
  position: absolute;
  z-index: 2;
  left: 16px;
  top: 100%;

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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme, $hasValue }) =>
    $hasValue ? theme.colorTokens.neutral.text_default : theme.colorTokens.neutral.text_weak};
`;

const Listbox = styled.ul`
  margin: ${TRIANGLE_SIZE - 1}px 0 0 0;
  background: ${({ theme }) => theme.colorTokens.neutral.background_default};
  border: 1px solid ${({ theme }) => theme.colorTokens.neutral.border_default};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(1)}px 0;
  border-radius: 4px;
  position: absolute;
  width: 100%;
  overflow: auto;
  z-index: 1;
  list-style-type: none;

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s step-end;
  }
`;

const CleanNormalizedButton = React.forwardRef((props: any, ref: React.Ref<any>) => (
  <NormalizedElements.Button {...R.omit(['absolutePositioning'], props)} ref={ref} />
));

const StyledA11yButton = styled(CleanNormalizedButton)`
  background: ${(p) => (p.disabled ? p.theme.color.disabledBackground : 'transparent')};
  width: 100%;
  height: 100%;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  padding: 0;
  display: flex;
  border: 0;
  color: inherit;
  ${(p) =>
    !p.absolutePositioning
      ? ''
      : `
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      outline: 0;
      text-align: initial;
      `}
`;

interface Props {
  children: React.ReactNode;
  placeholder?: string;
  size?: 's' | 'm';
}

const Select: React.FC<Props> = ({ children, placeholder = 'placeholder', size = 'm' }) => {
  const listboxRef = React.useRef<HTMLUListElement>(null);
  const [listboxVisible, setListboxVisible] = React.useState(false);

  const { getButtonProps, getListboxProps, contextValue, value, options } = useSelect<
    string,
    false
  >({
    listboxRef,
    onOpenChange: setListboxVisible,
    open: listboxVisible,
  });

  console.log({ value });

  React.useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  return (
    <Root>
      <StyledA11yButton {...getButtonProps()}>
        <SelectContainer $size={size}>
          <StyledTypography className="placeholder" $hasValue={!!value} type="secondary">
            {value || placeholder}
          </StyledTypography>
          <StyledChevronDown8 />
        </SelectContainer>
      </StyledA11yButton>
      <>
        <Arrow />
        <Listbox
          {...getListboxProps()}
          aria-hidden={!listboxVisible}
          className={listboxVisible ? '' : 'hidden'}
        >
          <SelectProvider value={contextValue}>{children}</SelectProvider>
        </Listbox>
      </>
    </Root>
  );
};

export default Select;

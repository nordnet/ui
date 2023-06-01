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

const StyledChevronDown8 = styled(Icon.ChevronDown8)`
  margin-left: auto;
`;

const TRIANGLE_SIZE = 10;
const BORDER_SIZE = 1;

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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme, $hasValue }) =>
    $hasValue ? theme.colorTokens.neutral.text_default : theme.colorTokens.neutral.text_weak};
`;

const ListContainer = styled.div<{ $hidden: boolean }>`
  position: absolute;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.dropdown};

  ${({ $hidden }) =>
    $hidden
      ? `opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s step-end;`
      : ''}
`;

const Listbox = styled.ul`
  margin: ${TRIANGLE_SIZE}px 0 0 0;
  background: ${({ theme }) => theme.colorTokens.neutral.background_default};
  border: 1px solid ${({ theme }) => theme.colorTokens.neutral.border_default};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(1)}px 0;
  border-radius: 4px;
  overflow: auto;
  list-style-type: none;
`;

const CleanNormalizedButton = React.forwardRef((props: any, ref: React.Ref<any>) => (
  <NormalizedElements.Button ref={ref} />
));

const StyledA11yButton = styled(CleanNormalizedButton)<{ $size: 's' | 'm' }>`
  cursor: pointer;
  color: inherit;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(2.5)}px ${({ theme }) => theme.spacing.unit(2)}px;
  border: 1px solid ${({ theme }) => theme.colorTokens.neutral.border_default};
  border-radius: ${({ theme }) => theme.spacing.unit(1)}px;
  height: ${({ theme, $size }) =>
    $size === 's' ? theme.spacing.unit(8) : theme.spacing.unit(10)}px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colorTokens.neutral.background_default};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colorTokens.neutral.border_hover};
  }

  &:focus-within,
  &:active {
    border: 1px solid ${({ theme }) => theme.colorTokens.action.border_default};
  }
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
      <StyledA11yButton $size={size} {...getButtonProps()}>
        <StyledTypography className="placeholder" $hasValue={!!value} type="secondary">
          {value || placeholder}
        </StyledTypography>
        <StyledChevronDown8 />
      </StyledA11yButton>
      <ListContainer aria-hidden={!listboxVisible} $hidden={!listboxVisible}>
        <Arrow />
        <Listbox {...getListboxProps()}>
          <SelectProvider value={contextValue}>{children}</SelectProvider>
        </Listbox>
      </ListContainer>
    </Root>
  );
};

export default Select;

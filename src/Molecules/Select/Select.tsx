import * as React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import useSelect, { SelectProvider } from '@mui/base/useSelect';
import { styled as uiStyled } from '@mui/system';
import { Icon, Typography } from '../..';
import NormalizedElements from '../../common/NormalizedElements';

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const SelectContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.unit(2.5)}px ${({ theme }) => theme.spacing.unit(2)}px;
  border: 1px solid ${({ theme }) => theme.colorTokens.neutral.border_default};
  border-radius: ${({ theme }) => theme.spacing.unit(1)}px;
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

const StyledTypography = styled(Typography)`
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing.unit(2)}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Listbox = uiStyled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  padding: 5px;
  margin: 5px 0 0 0;
  position: absolute;
  height: auto;
  width: 100%;
  overflow: auto;
  z-index: 1;
  outline: 0px;
  list-style: none;

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s step-end;
  }
  `,
);

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
}

const Select: React.FC<Props> = ({ children, placeholder = 'placeholder' }) => {
  const listboxRef = React.useRef<HTMLUListElement>(null);
  const [listboxVisible, setListboxVisible] = React.useState(false);

  const { getButtonProps, getListboxProps, contextValue, value } = useSelect<string, false>({
    listboxRef,
    onOpenChange: setListboxVisible,
    open: listboxVisible,
  });

  React.useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  return (
    <>
      <StyledA11yButton {...getButtonProps()}>
        <SelectContainer>
          <StyledTypography className="placeholder">{value || placeholder}</StyledTypography>
          <StyledChevronDown8 />
        </SelectContainer>
      </StyledA11yButton>
      <Listbox
        {...getListboxProps()}
        aria-hidden={!listboxVisible}
        className={listboxVisible ? '' : 'hidden'}
      >
        <SelectProvider value={contextValue}>{children}</SelectProvider>
      </Listbox>
    </>
  );
};

export default Select;

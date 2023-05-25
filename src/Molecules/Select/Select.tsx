import * as React from 'react';
import R from 'ramda';
import clsx from 'clsx';
import styled from 'styled-components';
import useSelect, { SelectOptionDefinition, SelectProvider } from '@mui/base/useSelect';
import useOption from '@mui/base/useOption';
import { styled as uiStyled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import NormalizedElements from '../../common/NormalizedElements';

export default function Select() {
  return <CustomSelect placeholder="Select a color…" options={options} />;
}

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

const Root = uiStyled('div')`
  position: relative;
`;

const Toggle = uiStyled('button')(
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
  position: relative;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  box-shadow: 0 0 0 2px var(--color) inset;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? grey[600] : grey[200]};
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `,
);

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

const Option = uiStyled('li')(
  ({ theme }) => `
  padding: 8px;
  border-radius: 0.45em;

  &[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.highlighted,
  &:hover {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &[aria-selected='true'].highlighted {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &:before {
    content: '';
    width: 1ex;
    height: 1ex;
    margin-right: 1ex;
    background-color: var(--color);
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
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
  options: SelectOptionDefinition<string>[];
  placeholder?: string;
}

interface OptionProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  disabled?: boolean;
}

function renderSelectedValue(value: string | null, options: SelectOptionDefinition<string>[]) {
  const selectedOption = options.find((option) => option.value === value);

  return selectedOption ? `${selectedOption.label} (${value})` : null;
}

function CustomOption(props: OptionProps) {
  const { children, value, className, disabled = false } = props;
  const { getRootProps, highlighted } = useOption({
    value,
    disabled,
    label: children,
  });

  return (
    <Option
      {...getRootProps()}
      className={clsx({ highlighted }, className)}
      style={{ '--color': value } as any}
    >
      {children}
    </Option>
  );
}

function CustomSelect({ options, placeholder }: Props) {
  const listboxRef = React.useRef<HTMLUListElement>(null);
  const [listboxVisible, setListboxVisible] = React.useState(false);

  const { getButtonProps, getListboxProps, contextValue, value } = useSelect<string, false>({
    listboxRef,
    onOpenChange: setListboxVisible,
    open: listboxVisible,
  });

  React.useEffect(() => {
    if (listboxVisible) {
      console.log('listboxRef.current', listboxRef.current);
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  return (
    <Root>
      <StyledA11yButton {...getButtonProps()} style={{ '--color': value } as any}>
        {renderSelectedValue(value, options) || (
          <span className="placeholder">{placeholder ?? ' '}</span>
        )}

        <UnfoldMoreRoundedIcon />
      </StyledA11yButton>
      <Listbox
        {...getListboxProps()}
        aria-hidden={!listboxVisible}
        className={listboxVisible ? '' : 'hidden'}
      >
        <SelectProvider value={contextValue}>
          {options.map((option) => {
            return (
              <CustomOption key={option.value} value={option.value}>
                {option.label}
              </CustomOption>
            );
          })}
        </SelectProvider>
      </Listbox>
    </Root>
  );
}

const options = [
  {
    label: 'Red',
    value: '#D32F2F',
  },
  {
    label: 'Green',
    value: '#4CAF50',
  },
  {
    label: 'Blue',
    value: '#2196F3',
  },
];

import React, { Fragment } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { Listbox, Transition } from '@headlessui/react';
import { Props } from './ExperimentalSelect.types';
import NormalizedElements from '../../../common/NormalizedElements';
import { Icon } from '../../../index';

const transitionStyles = css`
  .enter {
    transition: all 1000ms linear;
  }

  .enterFrom {
    opacity: 0%;
  }

  .enterTo {
    opacity: 100%;
  }

  .leave {
    transition: all 2000ms linear;
  }

  .leaveFrom {
    opacity: 100%;
  }

  .leaveTo {
    opacity: 0%;
  }
`;

const StyledWrapper = styled.div`
  position: relative;

  ${transitionStyles};
`;

const getBorderColor = (
  theme: DefaultTheme,
  $open: boolean,
  $error?: string,
  $success?: string,
) => {
  if ($open) return theme.color.borderActive;
  if ($error) return theme.color.inputBorderError;
  if ($success) return theme.color.inputBorderSuccess;
  return theme.color.inputBorder;
};

const StyledButton = styled(NormalizedElements.Button)<{
  $size: 's' | 'm';
  $error?: string;
  $success?: string;
  $open: boolean;
}>(
  ({ theme, $error, $success, $size, $open }) => css`
    background-color: ${theme.color.inputBackground};
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    border-radius: 0;
    padding: 0 ${theme.spacing.unit(2)}px;

    height: ${$size === 'm' ? 40 : 32}px;

    border: 1px solid ${getBorderColor(theme, $open, $error, $success)};

    &:hover:not(:disabled, [aria-expanded='true'], :focus) {
      border-color: ${theme.color.inputBorderHover};
    }
    &:focus-within {
      border-color: ${(p) => p.theme.color.borderActive};
    }
  `,
);

const Chevron = styled(Icon.ChevronDown8)<{ open: boolean }>`
  transform: ${(p) => (p.open ? 'rotate(180deg)' : 'rotate(0)')};
  transform-origin: center center;
  transition: transform 0.16s ease-out;
  height: ${(p) => p.theme.spacing.unit(2)}px;
  pointer-events: none;
  margin-left: ${({ theme }) => `0 ${theme.spacing.unit(2)}px`};
`;

const ChevronContainer = styled.div`
  margin-left: auto;
`;

const getTriangleStyles = (color: string, top: number) => css`
  left: 12px;
  position: absolute;
  width: 0;
  height: 0;
  content: '';
  speak: none;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  top: -${top}px;
  border-bottom: 8px solid ${color};
`;

const ListboxOptions = styled(Listbox.Options)(
  ({ theme }) => css`
    z-index: 4;
    background-color: ${theme.color.inputBackground};
    border: ${theme.color.inputBorder} 1px solid;
    position: absolute;
    margin: ${theme.spacing.unit(2)}px 0 0 0;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    :before {
      ${getTriangleStyles(theme.color.inputBorder, 8)}
    }
    :after {
      ${getTriangleStyles(theme.color.inputBackground, 7)};
    }
  `,
);

const ListboxOption = styled.li(
  ({ theme }) => css`
    list-style-type: none;
    padding: ${theme.spacing.unit(1)}px ${theme.spacing.unit(3)}px;
  `,
);

export const ExperimentalSelect = <T,>({
  disabled,
  error,
  onChange,
  options,
  selectedValue,
  size = 'm',
  success,
}: Props<T>) => {
  return (
    <Listbox value={selectedValue} onChange={onChange} disabled={disabled}>
      {({ open }) => (
        <StyledWrapper>
          <Listbox.Button
            as={StyledButton}
            $size={size}
            $error={error}
            $success={success}
            $open={open}
          >
            <span>{selectedValue}</span>
            <ChevronContainer>
              <Chevron open={open} />
            </ChevronContainer>
          </Listbox.Button>
          <Transition
            enter="enter"
            enterFrom="enterFrom"
            enterTo="enterTo"
            leave="leave"
            leaveFrom="leaveFrom"
            leaveTo="leaveTo"
            as={Fragment}
          >
            <ListboxOptions>
              {options.map(({ label, value }) => {
                return (
                  <Listbox.Option key={`${label}_${value}`} as={ListboxOption} value={value}>
                    {label}
                  </Listbox.Option>
                );
              })}
            </ListboxOptions>
          </Transition>
        </StyledWrapper>
      )}
    </Listbox>
  );
};

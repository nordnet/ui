import React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { Props, Size } from './QuietText.types';
import { Flexbox, FormField, Typography } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';

const hasError = (error?: Props['error']) => error && error !== '';

const height = css<Size>`
  height: ${(p) => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
`;

const darkmodeAutocompleteStyles = css`
  ${(p) =>
    p.theme.isDarkMode
      ? `
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
          border: 1px solid ${p.theme.color.inputBorder};
          -webkit-text-fill-color: ${p.theme.color.text};
          -webkit-box-shadow: 0 0 0px 1000px ${p.theme.color.inputBackground} inset;
        }`
      : ''}
`;

const background = css<Pick<Props, 'disabled'>>`
  background-color: ${(p) => (p.disabled ? p.theme.color.disabledBackground : 'transparent')};
`;

const hoverBorderStyles = css<Pick<Props, 'disabled'>>`
  ${(p) =>
    p.disabled
      ? ''
      : `
      &:hover {
        border-color: ${p.theme.color.inputBorderHover};
      }
`}
`;

const focusBorderStyles = css`
  &:focus {
    border-color: ${(p) => p.theme.color.borderActive};
  }
`;

const borderStyles = css<Pick<Props, 'error' | 'success' | 'disabled'>>`
  border: solid;
  border-color: ${(p) => {
    if (hasError(p.error)) return p.theme.color.inputBorderError;
    if (p.success) return p.theme.color.inputBorderSuccess;
    return p.theme.color.inputBorder;
  }};
  border-width: 0 0 2px 0;

  &:focus {
    border-width: 1px;
  }

  position: relative;
  ${hoverBorderStyles}
  ${focusBorderStyles}
  ${(p) =>
    p.disabled
      ? `border-color: ${
          p.theme.isDarkMode ? p.theme.color.inputBorder : p.theme.color.buttonBackgroundDisabled
        };`
      : ''}
`;

export const placeholderNormalization = css<Pick<Props, 'disabled'>>`
  &::placeholder {
    color: ${(p) => p.theme.color.buttonTextDisabled};
    line-height: inherit;
    opacity: 1;
  }
  &:focus::placeholder {
    color: ${(p) => p.theme.color.disabledText};
  }
  &:disabled::placeholder {
    color: ${(p) => p.theme.color.disabledText};
  }
`;

const AddonBox = styled(Flexbox)<{ position?: 'left' | 'right' }>`
  width: ${(p) => p.theme.spacing.unit(8)}px;
  top: 0;
  height: 100%;
  padding-left: ${(p) => p.theme.spacing.unit(1)}px;
  padding-right: ${(p) => p.theme.spacing.unit(1)}px;
  position: absolute;
  ${(p) => (p.position === 'left' ? 'left: 0;' : '')}
  ${(p) => (p.position === 'right' ? `right: ${p.theme.spacing.unit(1)}px;` : '')}
  &:not(:focus) {
    padding-left: 0;
    padding-right: 0;
  }
  ${(p) =>
    p.position === 'right'
      ? `&:not(:focus) {
          right: 0;
        }`
      : ''}
`;

const Input = styled(NormalizedElements.Input).attrs((p) => ({ type: p.type || 'text' }))<
  Partial<Props>
>`
  border: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  line-height: inherit;
  box-sizing: border-box;
  border-radius: ${(p) => p.theme.borderRadius4};
  ${height}
  ${borderStyles}
  ${background}
  ${placeholderNormalization}
  ${darkmodeAutocompleteStyles}
  ${(p) => (p.leftAddon ? `padding-left: ${p.theme.spacing.unit(8)}px;` : '')}
  ${(p) =>
    p.rightAddon
      ? `padding-right: ${p.theme.spacing.unit(10)}px;` // compensate for right paddings
      : ''}
  color: ${(p) => (p.theme.isDarkMode ? p.theme.color.buttonText : p.theme.color.backgroundBlack)};
  &:disabled {
    color: ${(p) => p.theme.color.disabledText};
  }
  font-size: 28px;
  font-weight: bold;
  &:focus {
    border-width: 0 0 2px 0;
    outline: none;
  }

  ${(p) =>
    p.type === 'search' &&
    `
    &[type="search"] {
      -webkit-appearance: textfield;
    }
    `}
  ${(p) =>
    p.disabled &&
    `
      cursor: not-allowed;
      `}
`;

const Wrapper = styled.div`
  position: relative;
  padding: ${(p) => p.theme.spacing.unit(1)}px 0;
`;

const components = {
  Input,
  AddonBox,
};

const getAriaProps = R.pickBy((val, key) => key.startsWith('aria-'));
const getDataProps = R.pickBy((val, key) => key.startsWith('data-'));

const TextComponent = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    autoComplete,
    autoFocus,
    defaultValue,
    disabled,
    error,
    id,
    leftAddon,
    maxLength,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    placeholder,
    required,
    rightAddon,
    size,
    success,
    value,
    visuallyEmphasiseRequired,
    type,
    readOnly,
    pattern,
    inputMode,
  } = props;

  return (
    <FormField
      {...R.pick(
        [
          'error',
          'extraInfo',
          'hideLabel',
          'label',
          'labelTooltip',
          'labelTooltipPosition',
          'labelTooltipInModal',
          'className',
          'width',
          'disabled',
        ],
        props,
      )}
      required={visuallyEmphasiseRequired}
    >
      <Typography type="secondary" color={(t) => t.color.text}>
        <Wrapper>
          <Input
            {...{
              autoComplete,
              autoFocus,
              defaultValue,
              disabled,
              error,
              id,
              leftAddon,
              maxLength,
              name,
              onBlur,
              onChange,
              onClick,
              onFocus,
              onMouseEnter,
              onMouseLeave,
              onKeyDown,
              onKeyPress,
              onKeyUp,
              placeholder,
              required,
              rightAddon,
              size,
              success,
              value,
              type,
              ref,
              readOnly,
              pattern,
              inputMode,
            }}
            {...getAriaProps(props)}
            {...getDataProps(props)}
            {...(hasError(error) ? { 'aria-invalid': true } : {})}
          />
          {leftAddon && (
            <AddonBox container justifyContent="center" alignItems="center" position="left">
              {leftAddon}
            </AddonBox>
          )}
          {rightAddon && (
            <AddonBox container justifyContent="flex-end" alignItems="center" position="right">
              {rightAddon}
            </AddonBox>
          )}
        </Wrapper>
      </Typography>
    </FormField>
  );
});

export const QuietText: typeof TextComponent & { components?: typeof components } = TextComponent;
QuietText.components = components;

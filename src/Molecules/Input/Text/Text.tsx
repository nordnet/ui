import React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { Props, Size, Variant } from './Text.types';
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

const background = css<Pick<Props, 'disabled' | 'variant'>>`
  background-color: ${(p) => {
    if (p.disabled && p.variant !== 'quiet') {
      return p.theme.color.disabledBackground;
    }
    if (p.variant === 'quiet') {
      return 'transparent';
    }
    return p.theme.color.inputBackground;
  }};
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

const borderStyles = css<Pick<Props, 'error' | 'success' | 'disabled' | 'variant'>>`
  border: solid;
  border-color: ${(p) => {
    if (hasError(p.error)) return p.theme.color.inputBorderError;
    if (p.success) return p.theme.color.inputBorderSuccess;
    return p.theme.color.inputBorder;
  }};
  border-width: ${(p) => (p.variant === 'quiet' ? '0 0 2px 0' : '1px')};
  &:focus {
    border-width: 1px;
  }
  position: relative;
  ${hoverBorderStyles}
  ${focusBorderStyles}
  ${(p) =>
    p.disabled && p.variant === 'quiet'
      ? `border-color: ${
          p.theme.isDarkMode ? p.theme.color.inputBorder : p.theme.color.buttonBackgroundDisabled
        };`
      : ''}
`;

export const placeholderNormalization = css<Pick<Props, 'variant' | 'disabled'>>`
  &::placeholder {
    color: ${(p) =>
      p.variant === 'quiet' ? p.theme.color.buttonTextDisabled : p.theme.color.label};
    line-height: inherit;
    opacity: 1;
  }
  ${(p) =>
    p.variant === 'quiet' ? `&:focus::placeholder { color: ${p.theme.color.disabledText}}` : ''};
  &:disabled::placeholder {
    color: ${(p) => p.theme.color.disabledText};
  }
`;

const AddonBox = styled(Flexbox)<{ position?: 'left' | 'right'; variant?: Variant }>`
  width: ${(p) => p.theme.spacing.unit(8)}px;
  top: 0;
  height: 100%;
  padding-left: ${(p) => p.theme.spacing.unit(1)}px;
  padding-right: ${(p) => p.theme.spacing.unit(1)}px;
  position: absolute;
  ${(p) => (p.position === 'left' ? 'left: 0;' : '')}
  ${(p) => (p.position === 'right' ? `right: ${p.theme.spacing.unit(1)}px;` : '')}
  ${(p) =>
    p.variant === 'quiet'
      ? `&:not(:focus) {
          padding-left: 0;
          padding-right: 0;
        }`
      : ''}
  ${(p) =>
    p.variant === 'quiet' && p.position === 'right'
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
  padding: ${(p) => p.theme.spacing.unit(p.variant === 'quiet' ? 0 : 2)}px;
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
  ${(p) =>
    p.variant === 'quiet'
      ? `color: ${p.theme.isDarkMode ? p.theme.color.buttonText : p.theme.color.backgroundBlack};
         &:disabled {
           color: ${p.theme.color.disabledText};
         }
         font-size: 28px;
         font-weight: bold;
         &:focus {
           border-width: 0 0 2px 0;
           outline: none;
          }`
      : `color: ${p.theme.color.text};
         &:disabled {
           color: ${p.theme.color.disabledText};
         }`}

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

const Wrapper = styled.div<{ variant?: Variant }>`
  position: relative;
  padding: ${(p) => p.theme.spacing.unit(p.variant === 'quiet' ? 1 : 0)}px 0;
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
    variant = 'normal',
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
              variant,
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
            <AddonBox
              container
              variant={variant}
              justifyContent="center"
              alignItems="center"
              position="left"
            >
              {leftAddon}
            </AddonBox>
          )}
          {rightAddon && (
            <AddonBox
              container
              variant={variant}
              justifyContent={variant === 'quiet' ? 'flex-end' : 'center'}
              alignItems="center"
              position="right"
            >
              {rightAddon}
            </AddonBox>
          )}
        </Wrapper>
      </Typography>
    </FormField>
  );
});

export const Text: typeof TextComponent & { components?: typeof components } = TextComponent;
Text.components = components;

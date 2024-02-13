import React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { Props, Size, Variant } from './Text.types';
import { Flexbox, FormField, Typography } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';

const hasError = (error?: Props['error']) => error && error !== '';

const height = css<Size>`
  height: ${(p) => {
    if (p.size === 's') {
      return `${p.theme.spacing.unit(8)}px`;
    }
    if (p.size === 'm') {
      return `${p.theme.spacing.unit(10)}px`;
    }
    return `${p.theme.spacing.unit(12)}px`;
  }};
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
      return p.theme.colorTokens.neutral.background_default;
    }
    if (p.variant === 'quiet') {
      return 'transparent';
    }
    return p.theme.colorTokens.neutral.background_medium;
  }};
`;

const hoverBorderStyles = css<Pick<Props, 'disabled'>>`
  ${(p) =>
    p.disabled
      ? ''
      : `
      &:hover {
        border-color: ${p.theme.colorTokens.neutral.border_strong};
      }
`}
`;

const focusBorderStyles = css`
  &:focus {
    border-width: 1px;
    border-color: ${(p) => p.theme.colorTokens.neutral.border_default};
  }
`;

const borderStyles = css<Pick<Props, 'error' | 'success' | 'disabled' | 'variant'>>`
  border: solid;
  border-color: ${(p) => {
    if (hasError(p.error)) return p.theme.colorTokens.error.border_default;
    if (p.success) return p.theme.colorTokens.positive.border_default;
    if (p.disabled) return p.theme.colorTokens.neutral.border_strong;
    if (p.variant === 'quiet') return p.theme.colorTokens.neutral.border_default;

    return 'transparent';
  }};
  border-width: ${(p) => (p.variant === 'quiet' ? '0 0 2px 0' : '1px')};

  position: relative;
  ${hoverBorderStyles}
  ${focusBorderStyles}
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
  border-radius: ${(p) => p.variant !== 'quiet' && p.theme.borderRadius8};
  ${height}
  ${borderStyles}
  ${background}
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
           color: ${p.theme.colorTokens.neutral.text_disabled};
         }
         font-size: 28px;
         font-weight: bold;
         &:focus {
           border-width: 0 0 2px 0;
           outline: none;
          }`
      : `color: ${p.theme.colorTokens.neutral.text_default};
         &:disabled {
           color: ${p.theme.colorTokens.neutral.text_disabled};
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

  const isNew = true;

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
          'value',
          'size',
        ],
        props,
      )}
      required={visuallyEmphasiseRequired}
      isNew={isNew}
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

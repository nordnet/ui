import React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { Props } from './QuietText.types';
import { Flexbox, FormField, Typography } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';

const hasError = (error?: Props['error']) => error && error !== '';

export const placeholderNormalization = css`
  &::placeholder {
    color: ${(p) => p.theme.colorTokens.neutral.text_disabled};
    line-height: inherit;
    opacity: 1;
  }
`;

const AddonBox = styled(Flexbox)<{ position?: 'left' | 'right' }>`
  width: ${(p) => p.theme.spacing.unit(8)}px;
  top: 0;
  height: 100%;
  padding: 0 ${(p) => p.theme.spacing.unit(1)}px;
  position: absolute;
  ${(p) => (p.position === 'left' ? 'left: 0;' : '')}
  ${(p) => (p.position === 'right' ? `right: ${p.theme.spacing.unit(1)}px;` : '')}
`;

const Input = styled(NormalizedElements.Input).attrs((p) => ({ type: p.type || 'text' }))<Props>`
  ${placeholderNormalization}
  border: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  line-height: inherit;
  box-sizing: border-box;
  border-radius: ${(p) => p.theme.borderRadius4};
  height: ${(p) => p.theme.spacing.unit(8)}px;
  position: relative;
  border-bottom: 2px solid
    ${(p) => {
      if (hasError(p.error)) return p.theme.colorTokens.error.border_default;
      if (p.success) return p.theme.colorTokens.positive.border_default;
      return p.theme.colorTokens.neutral.border_default;
    }};

  background-color: transparent;
  color: ${(p) => p.theme.colorTokens.neutral.text_default};
  ${(p) => (p.leftAddon ? `padding-left: ${p.theme.spacing.unit(8)}px;` : '')}
  ${(p) =>
    p.rightAddon
      ? `padding-right: ${p.theme.spacing.unit(10)}px;` // compensate for right paddings
      : ''}
  font-size: 28px;
  font-weight: bold;

  &:hover {
    border-color: ${(p) => p.theme.colorTokens.neutral.border_hover};
  }

  &:focus {
    border-width: 0 0 2px 0;
    outline: none;
    border-color: ${(p) => p.theme.colorTokens.neutral.border_active};
  }

  &:disabled {
    color: ${(p) => p.theme.colorTokens.neutral.text_disabled};
    border-color: ${(p) => p.theme.colorTokens.neutral.border_disabled};
    cursor: not-allowed;
  }
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
      <Typography type="secondary" color="inherit">
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

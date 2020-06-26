import React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { Props } from './Text.types';
import { Flexbox, Typography, FormField } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';

const hasError = (error?: Props['error']) => error && error !== '';

const height = css<Pick<Props, 'size'>>`
  height: ${p => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
`;

const background = css<Pick<Props, 'disabled'>>`
  background-color: ${p =>
    p.disabled ? p.theme.color.disabledBackground : p.theme.color.backgroundInput};
`;

const hoverBorderStyles = css<Pick<Props, 'disabled'>>`
  ${p =>
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
    border-color: ${p => p.theme.color.borderActive};
  }
`;

const borderStyles = css<Pick<Props, 'error' | 'success'>>`
  outline: none;
  border: 1px solid
    ${p => {
      if (hasError(p.error)) return p.theme.color.inputBorderError;
      if (p.success) return p.theme.color.inputBorderSuccess;
      return p.theme.color.inputBorder;
    }};
  position: relative;
  ${hoverBorderStyles}
  ${focusBorderStyles}
`;

export const placeholderNormalizaion = css`
  &::-moz-placeholder,
  &:-ms-input-placeholder,
  &::placeholder {
    height: inherit;
    line-height: inherit;
    color: ${p => p.theme.color.label};
  }
`;

const Input = styled(NormalizedElements.Input).attrs(p => ({ type: p.type || 'text' }))<
  Partial<Props>
>`
  border: 0;
  width: 100%;
  padding: ${p => p.theme.spacing.unit(2)}px;
  margin: 0;
  line-height: inherit;
  box-sizing: border-box;

  ${height}
  ${borderStyles}
  ${background}
  ${placeholderNormalizaion}
  ${p => (p.leftAddon ? `padding-left: ${p.theme.spacing.unit(8)}px;` : '')}
  ${p =>
    p.rightAddon
      ? `padding-right: ${p.theme.spacing.unit(10)}px;` // compensate for right paddings
      : ''}
`;

const Wrapper = styled.div`
  position: relative;
`;

const AddonBox = styled(Flexbox)<{ position?: 'left' | 'right' }>`
  width: ${p => p.theme.spacing.unit(8)}px;
  top: 0;
  height: 100%;
  padding-left: ${p => p.theme.spacing.unit(1)}px;
  padding-right: ${p => p.theme.spacing.unit(1)}px;
  position: absolute;
  ${p => (p.position === 'left' ? 'left: 0;' : '')}
  ${p => (p.position === 'right' ? `right: ${p.theme.spacing.unit(1)}px;` : '')}
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
  } = props;

  return (
    <FormField
      {...R.pick(
        ['error', 'extraInfo', 'hideLabel', 'label', 'labelTooltip', 'className', 'width'],
        props,
      )}
      required={visuallyEmphasiseRequired}
    >
      <Typography type="secondary" color={t => t.color.text}>
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
            <AddonBox container justifyContent="center" alignItems="center" position="right">
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

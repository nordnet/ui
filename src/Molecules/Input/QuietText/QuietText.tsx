import React, { useState, useRef, useLayoutEffect, useEffect, isValidElement } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Props } from './QuietText.types';
import { FormField, Flexbox, Typography } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';

const DEFAULT_WIDTH = 200;

const hasError = (error?: Props['error']) => error && error !== '';

const AddonBox = styled(Typography)<{ $disabled?: boolean }>`
  display: inline-block;
  color: ${(p) =>
    p.$disabled
      ? p.theme.colorTokens.neutral.text_disabled
      : p.theme.colorTokens.neutral.text_default};
`;

const Input = styled(NormalizedElements.Input).attrs((p) => ({ type: p.type || 'text' }))<{
  $width: number;
}>`
  border: 0;
  padding: 0;
  margin: 0;
  width: ${(p) => p.$width}px;
  background-color: transparent;
  line-height: inherit;
  box-sizing: border-box;
  color: ${(p) => p.theme.colorTokens.neutral.text_default};
  font-weight: bold;
  font-size: 28px;

  &::placeholder {
    color: ${(p) => p.theme.colorTokens.neutral.text_disabled};
    line-height: inherit;
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    color: ${(p) => p.theme.colorTokens.neutral.text_disabled};
  }
`;

const Container = styled(Flexbox)<{ $error?: boolean; $success?: boolean; $disabled?: boolean }>`
  height: ${(p) => p.theme.spacing.unit(9)}px;
  min-width: ${DEFAULT_WIDTH}px;
  display: inline-flex;
  gap: ${(p) => p.theme.spacing.unit(2)}px;
  align-items: baseline;
  position: relative;
  border-bottom: 2px solid
    ${(p) => {
      if (p.$error) return p.theme.colorTokens.error.border_default;
      if (p.$success) return p.theme.colorTokens.positive.border_default;
      return p.theme.colorTokens.neutral.border_default;
    }};

  &:hover {
    border-color: ${(p) => p.theme.colorTokens.neutral.border_hover};
  }

  &:focus-within {
    border-color: ${(p) => p.theme.colorTokens.neutral.border_active};
  }

  ${(p) =>
    p.$disabled &&
    `
    border-color: ${p.theme.colorTokens.neutral.border_disabled};
    cursor: not - allowed;
    `};
  }
`;

const HiddenMeasuringSpan = styled.span`
  visibility: hidden;
  position: absolute;
  white-space: nowrap;
  height: 0;
`;

const components = {
  Container,
  Input,
  AddonBox,
};

const getAriaProps = R.pickBy((val, key) => key.startsWith('aria-'));
const getDataProps = R.pickBy((val, key) => key.startsWith('data-'));

const QuietTextComponent = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    autoComplete,
    autoFocus,
    defaultValue,
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
    // FormField props below
    error,
    extraInfo,
    hideLabel,
    label,
    labelTooltip,
    labelTooltipPosition,
    labelTooltipInModal,
    className,
    width,
    disabled,
  } = props;

  const formFieldProps = {
    error,
    extraInfo,
    hideLabel,
    label,
    labelTooltip,
    labelTooltipPosition,
    labelTooltipInModal,
    className,
    width,
    disabled,
  };

  const [inputValue, setInputValue] = useState(value || defaultValue || placeholder || '');
  const [inputWidth, setInputWidth] = useState(DEFAULT_WIDTH);
  const hiddenMeasuringSpanRef = useRef<HTMLSpanElement>(null);
  const isControlled = value !== undefined;

  useLayoutEffect(() => {
    const spanWdith = hiddenMeasuringSpanRef.current?.offsetWidth;
    setInputWidth(spanWdith || DEFAULT_WIDTH);
  }, [inputValue]);

  useEffect(() => {
    if (isControlled) {
      setInputValue(value);
    }
  }, [value, isControlled]);

  function handleOnInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (!isControlled) {
      setInputValue(e.target.value || placeholder || '');
    }
  }

  return (
    <FormField {...formFieldProps} required={visuallyEmphasiseRequired}>
      <Typography type="title1" color="inherit">
        <Container $error={!!error} $disabled={disabled} $success={success}>
          {isValidElement(leftAddon)
            ? leftAddon
            : leftAddon && (
                <AddonBox type="primary" $disabled={disabled}>
                  {leftAddon}
                </AddonBox>
              )}
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
              onInput: handleOnInput,
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
              $width: inputWidth,
            }}
            {...getAriaProps(props)}
            {...getDataProps(props)}
            {...(hasError(error) ? { 'aria-invalid': true } : {})}
          />
          {isValidElement(rightAddon)
            ? rightAddon
            : rightAddon && (
                <AddonBox type="primary" $disabled={disabled}>
                  {rightAddon}
                </AddonBox>
              )}
          <HiddenMeasuringSpan ref={hiddenMeasuringSpanRef} aria-hidden>
            {inputValue}
          </HiddenMeasuringSpan>
        </Container>
      </Typography>
    </FormField>
  );
});

export const QuietText: typeof QuietTextComponent & { components?: typeof components } =
  QuietTextComponent;
QuietText.components = components;

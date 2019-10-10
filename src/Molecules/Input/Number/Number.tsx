import React, { useState, useRef } from 'react';
import { injectIntl } from 'react-intl';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { Props, NumberComponent } from './Number.types';
import { Flexbox, VisuallyHidden, Icon, Typography, FormField } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';
import { getStringAsNumber, getNumberAsString } from './utils';
import { isNumber, isString, isUndefined, assert } from '../../../common/utils';
import adjustValue from './adjustValue';

const hasError = (error?: Props['error']) => error && error !== '';
const removeNonNumberCharacters = R.replace(/[^0-9\-.,]+/, '');

const width = css<Pick<Props, 'size'>>`
  width: ${p => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
`;

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
        z-index: 2;
      }
`}
`;

const focusBorderStyles = css`
  &:focus {
    border-color: ${p => p.theme.color.borderActive};
    z-index: 3;
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

const Wrapper = styled(Flexbox)`
  position: relative;
  box-shadow: 0 1px 3px ${p => p.theme.color.shadowInput};
`;

const AddonBox = styled(Flexbox)<{ position?: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 3;
  ${p => (p.position === 'left' ? `left: ${p.theme.spacing.unit(2)}px;` : '')}
  ${p => (p.position === 'right' ? `right: ${p.theme.spacing.unit(2)}px;` : '')}
`;

const Stepper = styled.button.attrs({ type: 'button' })<Partial<Props>>`
  ${width}
  ${height}
  ${background}
  ${borderStyles}
  padding: 0;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  
  &:first-of-type {
    order: -1;
  }
  
  &:active:enabled {
    background-color: ${p => p.theme.color.cta};
    
    svg {
      fill: ${p => p.theme.color.buttonText};
    }
  }
  `;

const Input = styled(NormalizedElements.Input).attrs({ type: 'text' })<Partial<Props>>`
  ${background}
  ${borderStyles}
  ${height}
  width: 100%;
  text-align: ${p => (p.showSteppers ? 'center' : 'left')};
  box-sizing: border-box;
  ${p =>
    p.leftAddon || p.rightAddon
      ? `
      padding-top: ${p.theme.spacing.unit(2)}px;
      padding-bottom: ${p.theme.spacing.unit(2)}px;
      padding-left: ${p.leftAddon ? p.theme.spacing.unit(10) : p.theme.spacing.unit(2)}px;
      padding-right: ${p.rightAddon ? p.theme.spacing.unit(10) : p.theme.spacing.unit(2)}px;
      `
      : `
      padding: ${p.theme.spacing.unit(2)}px;
      margin: 0 -1px;
      z-index: 1;
      `}
  
`;

const components = {
  AddonBox,
  Input,
  Stepper,
  Wrapper,
};

const NumberInput: NumberComponent & {
  /**
   * This will allow you to customize
   * inner parts with styled-components
   * @example
   * const CustomNumberInput = styled(Input.Number)`
   *  ${Stepper} {
   *    color: pink;
   * }
   * `
   * */
  components: typeof components;
} = props => {
  const {
    autoFocus,
    defaultValue = 1,
    disabled,
    error,
    id,
    intl,
    leftAddon,
    max,
    min = 0,
    name,
    noSteppers,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onStepDown,
    onStepUp,
    rightAddon,
    required,
    size,
    step = 1,
    inputMode = 'decimal',
    success,
    value: controlledValueRaw,
    visuallyEmphasiseRequired,
  } = props;
  const [internalValue, setInternalValue] = useState(getNumberAsString(defaultValue));
  const showSteppers = noSteppers !== true && isUndefined(leftAddon) && isUndefined(rightAddon);
  const handleValueChange = (val: string) => {
    setInternalValue(val);

    if (typeof onChange === 'function') {
      onChange(val);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const isControlled = isString(controlledValueRaw) || isNumber(controlledValueRaw);
  // handle case for entered negative values
  const numberAsString =
    controlledValueRaw === '-' ? controlledValueRaw : getNumberAsString(controlledValueRaw);
  const controlledValue = isControlled && numberAsString;
  const value = isControlled ? controlledValue : internalValue;

  const sanitizedNumbers = {
    max: max ? getStringAsNumber(max) : undefined,
    min: min ? getStringAsNumber(min) : undefined,
    step: isNumber(step) ? step : getStringAsNumber(step),
    uncontrolledValue: getStringAsNumber(value),
  };

  const getUpdateValue = (increment: boolean) => {
    return adjustValue({
      originalValue: sanitizedNumbers.uncontrolledValue,
      step: sanitizedNumbers.step,
      min: sanitizedNumbers.min,
      max: sanitizedNumbers.max,
      shouldIncrement: increment,
      intl,
    });
  };

  const onStepHandler = (stepUp: boolean) => {
    const updatedValue = getUpdateValue(stepUp);
    handleValueChange(updatedValue);

    if (stepUp && onStepUp) {
      onStepUp();
    }

    if (!stepUp && onStepDown) {
      onStepDown();
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange(e.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const upKey = 'ArrowUp';
    const downKey = 'ArrowDown';

    if (key === upKey || key === downKey) {
      e.preventDefault();
      onStepHandler(key === upKey);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  if (props.fieldId) {
    assert(false, `Input.Number: The prop fieldId is deprecated, please use id instead`, {
      level: 'warn',
    });
  }

  if (props.hasError) {
    assert(
      false,
      `Input.Number: The prop hasError is deprecated and not needed. The error prop is enough.`,
      {
        level: 'warn',
      },
    );
  }

  return (
    <FormField
      {...R.pick(['error', 'extraInfo', 'hideLabel', 'label', 'width'], props)}
      required={visuallyEmphasiseRequired}
      fieldId={id}
    >
      <Typography type="secondary" color={t => t.color.text}>
        <Wrapper container item grow={1} alignItems="center">
          <Input
            {...{
              autoFocus,
              disabled,
              id,
              error,
              leftAddon,
              max,
              min,
              name,
              onBlur,
              onChange: onChangeHandler,
              onClick,
              onFocus,
              onKeyDown: onKeyDownHandler,
              onKeyPress,
              onKeyUp,
              ref: inputRef,
              rightAddon,
              required,
              size,
              step,
              success,
              value: removeNonNumberCharacters(value),
              inputMode,
              showSteppers,
            }}
            {...(hasError(error) ? { 'aria-invalid': true } : {})}
          />
          {showSteppers && (
            <>
              <Stepper onClick={() => onStepHandler(false)} size={size} disabled={disabled}>
                <VisuallyHidden>decrease number by {step}</VisuallyHidden>
                <Icon.Minus size={3} />
              </Stepper>
              <Stepper onClick={() => onStepHandler(true)} size={size} disabled={disabled}>
                <VisuallyHidden>increase number by {step}</VisuallyHidden>
                <Icon.Plus size={3} />
              </Stepper>
            </>
          )}
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
};

NumberInput.components = components;

export default injectIntl(NumberInput);

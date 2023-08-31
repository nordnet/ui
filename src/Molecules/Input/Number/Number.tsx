import React, { useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { NumberComponent, Props, Variant } from './Number.types';
import { Flexbox, FormField, OldIcon, Typography, VisuallyHidden } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';
import { getNumberAsString, getStringAsNumber } from './utils';
import { assert, isNumber, isString, isUndefined } from '../../../common/utils';
import adjustValue from './adjustValue';
import { placeholderNormalization } from '../Text/Text';

const hasError = (error?: Props['error']) => error && error !== '';
const removeNonNumberCharacters = R.replace(/[^0-9 \u00A0\-.,]+/, '');
const calculateHeight = (p: any, variant: Variant | undefined, size: 's' | undefined) => {
  if (variant === 'quiet') return 'auto';
  return size === 's' ? `${p.theme.spacing.unit(8)}px` : `${p.theme.spacing.unit(10)}px`;
};

const width = css<Pick<Props, 'size'>>`
  width: ${(p) => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
`;

const height = css<Pick<Props, 'variant' | 'size'>>`
  height: ${(p) => calculateHeight(p, p.variant, p.size)};
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
        z-index: 2;
      }
`}
`;

const focusBorderStyles = css`
  &:focus {
    border-color: ${(p) => p.theme.color.borderActive};
    z-index: 3;
  }
`;

const borderStyles = css<Pick<Props, 'error' | 'success' | 'variant' | 'disabled'>>`
  border: 1px solid
    ${(p) => {
      if (hasError(p.error)) return p.theme.color.inputBorderError;
      if (p.success) return p.theme.color.inputBorderSuccess;
      return p.theme.color.inputBorder;
    }};
  position: relative;
  ${hoverBorderStyles}
  ${focusBorderStyles}
  border-width: ${(p) => (p.variant === 'quiet' ? '0 0 2px 0' : '1px')};
  &:focus {
    border-width: 1px;
  }
  ${(p) =>
    p.disabled && p.variant === 'quiet'
      ? `border-color: ${
          p.theme.isDarkMode ? p.theme.color.inputBorder : p.theme.color.buttonBackgroundDisabled
        };`
      : ''}
`;

const Wrapper = styled(Flexbox)`
  position: relative;
  box-shadow: 0 1px 3px ${(p) => p.theme.color.shadowInput};
`;

const getPositionStyles = (p: any) => {
  if (p.position === 'right') return `right: ${p.theme.spacing.unit(2)}px;`;
  if (p.position === 'left') return `left: ${p.theme.spacing.unit(2)}px;`;
  return '';
};

const AddonBox = styled(Flexbox)<{ position?: 'left' | 'right'; variant?: 'quiet' | 'normal' }>`
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 3;
  ${getPositionStyles}
`;

const Stepper = styled.button.attrs(() => ({ type: 'button' }))<Partial<Props>>`
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
    border-top-left-radius: ${(p) => p.theme.borderRadius4};
    border-bottom-left-radius: ${(p) => p.theme.borderRadius4};
  }

  &:last-of-type {
    border-top-right-radius: ${(p) => p.theme.borderRadius4};
    border-bottom-right-radius: ${(p) => p.theme.borderRadius4};
  }

  &:active:enabled {
    background-color: ${(p) => p.theme.color.cta};

    svg {
      fill: ${(p) => p.theme.color.buttonText};
    }
  }
`;

const Input = styled(NormalizedElements.Input).attrs(() => ({ type: 'text' }))<Partial<Props>>`
  ${background}
  ${borderStyles}
  ${height}
  ${placeholderNormalization}
  padding: ${(p) => p.theme.spacing.unit(p.variant === 'quiet' ? 0 : 2)}px;
  width: 100%;
  color: ${(p) => p.theme.color.text};
  &:disabled {
    color: ${(p) => p.theme.color.disabledText};
  }
  text-align: ${(p) => (p.showSteppers ? 'center' : 'left')};
  box-sizing: border-box;
  border-radius: ${(p) => (p.showSteppers ? '0' : p.theme.borderRadius4)};

  ${(p) =>
    p.leftAddon || p.rightAddon
      ? `
      padding-top: ${p.theme.spacing.unit(2)}px;
      padding-bottom: ${p.theme.spacing.unit(2)}px;
      `
      : `
      margin: 0 -1px;
      min-width: 0;
      z-index: 1;
      `}
  ${(p) =>
    p.leftAddon
      ? `
      padding-left: ${p.theme.spacing.unit(8)}px;
    `
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
        }
        &:-webkit-autofill {
         -webkit-text-fill-color: ${p.theme.color.cta};
        }
        `
      : ''};
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
} = (props) => {
  const {
    autoFocus,
    autoComplete,
    defaultValue,
    disabled,
    error,
    id,
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
    placeholder: placeholderRaw,
    rightAddon,
    required,
    size,
    step = 1,
    inputMode = 'decimal',
    success,
    value: controlledValueRaw,
    visuallyEmphasiseRequired,
    variant = 'normal',
  } = props;
  const [internalValue, setInternalValue] = useState(getNumberAsString(defaultValue));
  const intl = useIntl();
  // Quiet variant only works while there are noSteppers
  const showSteppers =
    noSteppers !== true && isUndefined(leftAddon) && isUndefined(rightAddon) && variant !== 'quiet';
  const placeholder = showSteppers ? undefined : placeholderRaw;
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
      {...R.pick(
        [
          'error',
          'extraInfo',
          'hideLabel',
          'label',
          'labelTooltip',
          'labelTooltipPosition',
          'labelTooltipInModal',
          'width',
          'className',
        ],
        props,
      )}
      required={visuallyEmphasiseRequired}
      fieldId={id}
    >
      <Typography type="secondary" color={(t) => t.color.text}>
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
              placeholder,
              ref: inputRef,
              rightAddon,
              required,
              size,
              step,
              success,
              value: removeNonNumberCharacters(value),
              inputMode,
              showSteppers,
              variant,
            }}
            {...(hasError(error) ? { 'aria-invalid': true } : {})}
            {...(autoComplete ? { autoComplete } : {})}
          />
          {showSteppers && (
            <>
              <Stepper onClick={() => onStepHandler(false)} size={size} disabled={disabled}>
                <VisuallyHidden>decrease number by {step}</VisuallyHidden>
                <OldIcon.Minus size={3} />
              </Stepper>
              <Stepper onClick={() => onStepHandler(true)} size={size} disabled={disabled}>
                <VisuallyHidden>increase number by {step}</VisuallyHidden>
                <OldIcon.Plus size={3} />
              </Stepper>
            </>
          )}
          {leftAddon && (
            <AddonBox container justifyContent="center" alignItems="center" position="left">
              {leftAddon}
            </AddonBox>
          )}
          {rightAddon && (
            <AddonBox
              container
              justifyContent="center"
              alignItems="center"
              position="right"
              variant={variant}
            >
              {rightAddon}
            </AddonBox>
          )}
        </Wrapper>
      </Typography>
    </FormField>
  );
};
NumberInput.components = components;
export const Number: React.FC<Props> & {
  components: typeof components;
} = NumberInput as any;

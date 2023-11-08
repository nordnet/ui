import React, { useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import * as R from 'ramda';
import { FormField, OldIcon, Typography, VisuallyHidden } from '../../..';

import { assert, isNumber, isString, isUndefined } from '../../../common/utils';
import {
  getLocaleStringAsNumber,
  getNumberAsLocaleString,
  getNumberAsString,
  getStringAsNumber,
  getThousandsSeparator,
  numberInputHasError,
  removeNonNumberCharacters,
} from './utils';
import adjustValue from './adjustValue';
import { NumberComponent, NumberInputCursorPosition, Props } from './Number.types';
import { usePrevious } from '../../../common/Hooks';
import {
  NumberInputAddonBox,
  NumberInputComponents,
  NumberInputStepper,
  NumberInputStylised,
  NumberInputWrapper,
} from './Number.styles';

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
  components: typeof NumberInputComponents;
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
    withThousandSeparator = false,
  } = props;
  const [internalValue, setInternalValue] = useState(getNumberAsString(defaultValue));
  const previousInternalValue = usePrevious(internalValue);
  const [cursorPosition, setCursorPosition] = useState<NumberInputCursorPosition | null>(null);

  const intl = useIntl();
  // Quiet variant only works while there are noSteppers
  const showSteppers =
    noSteppers !== true && isUndefined(leftAddon) && isUndefined(rightAddon) && variant !== 'quiet';
  const placeholder = showSteppers ? undefined : placeholderRaw;

  const inputRef = useRef<HTMLInputElement>(null);
  const isControlled = isString(controlledValueRaw) || isNumber(controlledValueRaw);
  // handle case for entered negative values
  const numberAsString =
    controlledValueRaw === '-' ? controlledValueRaw : getNumberAsString(controlledValueRaw);
  const controlledValue = isControlled && numberAsString;
  const value = isControlled ? controlledValue : internalValue;

  useEffect(() => {
    /**
     * By default, when we modify the input field value, the caret jumps to the end of the input.
     * This behavior is not desired, so we need to fix it.
     */
    if (withThousandSeparator && cursorPosition !== null) {
      const { caret, element } = cursorPosition;

      const separator = getThousandsSeparator(intl);
      const valueString = getNumberAsLocaleString(value, intl);
      const prevValueString = getNumberAsLocaleString(previousInternalValue, intl);

      /**
       * If a number was added and this resulted in adding a separator, move the caret to the right.
       * Otherwise, leave it where it should be.
       */
      if (
        value.length > previousInternalValue.length &&
        valueString.split(separator).length > prevValueString.split(separator).length
      ) {
        element.selectionStart = caret + 1;
        element.selectionEnd = caret + 1;
      } else {
        element.selectionStart = caret;
        element.selectionEnd = caret;
      }
    }
  }, [cursorPosition, withThousandSeparator, intl, value, previousInternalValue]);

  const handleValueChange = (newValue: string) => {
    const convertedValue: string = withThousandSeparator
      ? getLocaleStringAsNumber(newValue, value, intl)
      : newValue;

    setInternalValue(convertedValue);

    if (typeof onChange === 'function') {
      onChange(convertedValue);
    }
  };

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
    if (withThousandSeparator)
      setCursorPosition({
        caret: e.target.selectionStart || 0,
        element: e.target,
      });

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
        <NumberInputWrapper container item grow={1} alignItems="center">
          <NumberInputStylised
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
              value: withThousandSeparator
                ? getNumberAsLocaleString(value, intl)
                : removeNonNumberCharacters(value),
              inputMode,
              showSteppers,
              variant,
            }}
            {...(numberInputHasError(error) ? { 'aria-invalid': true } : {})}
            {...(autoComplete ? { autoComplete } : {})}
          />
          {showSteppers && (
            <>
              <NumberInputStepper
                onClick={() => onStepHandler(false)}
                size={size}
                disabled={disabled}
              >
                <VisuallyHidden>decrease number by {step}</VisuallyHidden>
                <OldIcon.Minus size={3} />
              </NumberInputStepper>
              <NumberInputStepper
                onClick={() => onStepHandler(true)}
                size={size}
                disabled={disabled}
              >
                <VisuallyHidden>increase number by {step}</VisuallyHidden>
                <OldIcon.Plus size={3} />
              </NumberInputStepper>
            </>
          )}
          {leftAddon && (
            <NumberInputAddonBox
              container
              justifyContent="center"
              alignItems="center"
              position="left"
            >
              {leftAddon}
            </NumberInputAddonBox>
          )}
          {rightAddon && (
            <NumberInputAddonBox
              container
              justifyContent="center"
              alignItems="center"
              position="right"
              variant={variant}
            >
              {rightAddon}
            </NumberInputAddonBox>
          )}
        </NumberInputWrapper>
      </Typography>
    </FormField>
  );
};
NumberInput.components = NumberInputComponents;
export const FormattedNumber: React.FC<Props> & {
  components: typeof NumberInputComponents;
} = NumberInput as any;

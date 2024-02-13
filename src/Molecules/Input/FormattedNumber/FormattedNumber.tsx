import React, { useRef, useState } from 'react';
import { FormField, OldIcon, Typography, VisuallyHidden } from '../../..';
import { isUndefined } from '../../../common/utils';

import adjustValue from './adjustValue';
import { Props } from './FormattedNumber.types';
import { FormattedNumberComponents } from './FormattedNumber.styles';
import { hasError } from './utils';

const FormattedNumberInput: React.FC<Props> & {
  /**
   * This will allow you to customize
   * inner parts with styled-components
   * @example
   * const CustomNumberInput = styled(Input.FormattedNumber)`
   *  ${Stepper} {
   *    color: pink;
   * }
   * `
   * */
  components: typeof FormattedNumberComponents;
} = (props) => {
  const {
    autoFocus,
    autoComplete,
    defaultValue = null,
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
    value: controlledValue,
    variant = 'normal',
    minDecimalPlaces,
    maxDecimalPlaces,
  } = props;
  const [internalValue, setInternalValue] = useState<number | null>(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  // Quiet variant only works while there are noSteppers
  const showSteppers =
    noSteppers !== true && isUndefined(leftAddon) && isUndefined(rightAddon) && variant !== 'quiet';
  const placeholder = showSteppers ? undefined : placeholderRaw;

  const handleValueChange = (newValue: number | null) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const getUpdateValue = (increment: boolean): number =>
    adjustValue({
      originalValue: value,
      step,
      min,
      max,
      shouldIncrement: increment,
    });

  const onStepHandler = (stepUp: boolean) => {
    const updatedValue = getUpdateValue(stepUp);

    handleValueChange(updatedValue);

    if (stepUp) {
      onStepUp?.();
    } else {
      onStepDown?.();
    }

    inputRef?.current?.focus();
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const upKey = 'ArrowUp';
    const downKey = 'ArrowDown';

    if (key === upKey || key === downKey) {
      e.preventDefault();
      onStepHandler(key === upKey);
    }

    onKeyDown?.(e);
  };

  const {
    className,
    extraInfo,
    hideLabel,
    label,
    labelTooltip,
    labelTooltipInModal,
    labelTooltipPosition,
    width,
    visuallyEmphasiseRequired,
  } = props;

  return (
    <FormField
      className={className}
      error={error}
      extraInfo={extraInfo}
      fieldId={id}
      hideLabel={hideLabel}
      label={label}
      labelTooltip={labelTooltip}
      labelTooltipInModal={labelTooltipInModal}
      labelTooltipPosition={labelTooltipPosition}
      required={visuallyEmphasiseRequired}
      width={width}
    >
      <Typography type="secondary" color={(t) => t.color.text}>
        <FormattedNumberComponents.Wrapper container item grow={1} alignItems="center">
          <input type="hidden" name={name} value={value === null ? '' : value} />
          <FormattedNumberComponents.Input
            id={id}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            ariaInvalid={hasError(error)}
            disabled={disabled}
            onChange={handleValueChange}
            onClick={onClick}
            onBlur={() => onBlur?.(value)}
            onKeyPress={onKeyPress}
            onFocus={onFocus}
            onKeyDown={onKeyDownHandler}
            onKeyUp={onKeyUp}
            placeholder={placeholder}
            value={value}
            inputMode={inputMode}
            ref={inputRef}
            required={required}
            /* FormattedNumber style props */
            variant={variant}
            error={error}
            success={success}
            size={size}
            showSteppers={showSteppers}
            leftAddon={leftAddon}
            rightAddon={rightAddon}
          />
          {showSteppers && (
            <>
              <FormattedNumberComponents.Stepper
                onClick={() => onStepHandler(false)}
                size={size}
                disabled={disabled}
              >
                <VisuallyHidden>−{step}</VisuallyHidden>
                <OldIcon.Minus size={3} />
              </FormattedNumberComponents.Stepper>
              <FormattedNumberComponents.Stepper
                onClick={() => onStepHandler(true)}
                size={size}
                disabled={disabled}
              >
                <VisuallyHidden>+{step}</VisuallyHidden>
                <OldIcon.Plus size={3} />
              </FormattedNumberComponents.Stepper>
            </>
          )}
          {leftAddon && (
            <FormattedNumberComponents.AddonBox
              container
              justifyContent="center"
              alignItems="center"
              position="left"
            >
              {leftAddon}
            </FormattedNumberComponents.AddonBox>
          )}
          {rightAddon && (
            <FormattedNumberComponents.AddonBox
              container
              justifyContent="center"
              alignItems="center"
              position="right"
              variant={variant}
            >
              {rightAddon}
            </FormattedNumberComponents.AddonBox>
          )}
        </FormattedNumberComponents.Wrapper>
      </Typography>
    </FormField>
  );
};
FormattedNumberInput.components = FormattedNumberComponents;
export const FormattedNumber: React.FC<Props> & {
  components: typeof FormattedNumberComponents;
} = FormattedNumberInput as any;

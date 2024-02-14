import React, { useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Input } from '../../../../common/NormalizedElements/NormalizedInput';
import { FormattedNumberInputType } from './FormattedInput.types';
import {
  calculateCaretPosition,
  formatNumber,
  handleThousandSeparatorRemoval,
  parseInputValue,
} from './utils';

const FormattedInput: FormattedNumberInputType = React.forwardRef(
  (
    {
      id,
      autoFocus,
      autoComplete,
      className,
      disabled,
      ariaInvalid,
      onChange,
      onClick,
      onBlur,
      onKeyPress,
      onFocus,
      onKeyDown,
      onKeyUp,
      placeholder,
      value,
      inputMode = 'decimal',
      required,
      minimumDecimals,
      maximumDecimals,
    },
    forwardedRef,
  ) => {
    const [formattedValue, setFormattedValue] = useState<string>(value?.toString() ?? '');
    const lastOnChangeValue = useRef<number | null>();
    const [caret, setCaret] = useState<{ position: number } | undefined>();
    const ref = useRef<HTMLInputElement>(null);
    const intl = useIntl();

    useImperativeHandle(forwardedRef, () => ref.current!, []);

    useLayoutEffect(() => {
      const valueChangedExternally = value !== lastOnChangeValue.current;
      if (valueChangedExternally) {
        lastOnChangeValue.current = undefined;
        const invalidNumber = Number.isNaN(value);

        if (value === null || invalidNumber) {
          setFormattedValue('');
        } else {
          setFormattedValue(formatNumber(value, intl, minimumDecimals, maximumDecimals));
        }
      }
    }, [value, lastOnChangeValue, formattedValue, intl]);

    useLayoutEffect(() => {
      if (ref.current && caret !== undefined) {
        ref.current.selectionStart = caret.position;
        ref.current.selectionEnd = caret.position;
      }
    }, [caret, ref]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value: newValue, formattedValue: newFormattedValue } = parseInputValue(
        value,
        formattedValue,
        e.target.value,
        intl,
        maximumDecimals,
      );

      const newCaretPosition = calculateCaretPosition(
        { value: e.target.value, formattedValue: newFormattedValue },
        formattedValue,
        e.target.selectionStart,
        intl,
      );

      onChange(newValue);
      setFormattedValue(newFormattedValue);
      setCaret({ position: newCaretPosition });
      lastOnChangeValue.current = newValue;
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      handleThousandSeparatorRemoval(e, intl);
      onKeyDown?.(e);
    };

    return (
      <Input
        id={id}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        className={className}
        disabled={disabled}
        onBlur={(event) => {
          setFormattedValue(formatNumber(value, intl, minimumDecimals, maximumDecimals));
          onBlur?.(event);
        }}
        onChange={onChangeHandler}
        onClick={onClick}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        ref={ref}
        value={formattedValue}
        inputMode={inputMode}
        aria-invalid={ariaInvalid}
        type="text"
        required={required}
      />
    );
  },
);

export default FormattedInput;

import React from 'react';

export type Variant = 'normal' | 'quiet';

export type Props = {
  id?: string;
  autoFocus?: boolean;
  autoComplete?: 'on' | 'off';
  className?: string;
  disabled?: boolean;
  ariaInvalid?: boolean;
  inputMode?: 'none' | 'numeric' | 'decimal';
  placeholder?: string;
  value: number | null;
  onStepUp?: () => void;
  onStepDown?: () => void;
  onChange: (value: number | null) => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  ref?: React.Ref<HTMLInputElement> | null;
  required?: boolean;
  minimumDecimals?: number;
  maximumDecimals?: number;
};

export type InputValue = { value: string; formattedValue: string };

export type FormattedNumberInputType = React.FunctionComponent<Props>;

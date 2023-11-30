export type Variant = 'normal' | 'quiet';

export type Props = {
  autoFocus?: boolean;
  autoComplete?: 'on' | 'off';
  className?: string;
  defaultValue?: number | null;
  disabled?: boolean;
  error?: string;
  extraInfo?: string;
  hideLabel?: boolean;
  id: string;
  /** inputMode:
   * none
   No virtual keyboard;
   this is useful when the application or site
   implements its own keyboard input control.
   * decimal
   Fractional numeric input keyboard containing the digits
   and the appropriate separator character for the user's
   locale (typically either "." or ",").
   Devices may or may not show a minus key.
   numeric
   Numeric input keyboard; all that is needed are the digits 0 through 9.
   Devices may or may not show a minus key.
   */
  inputMode?: 'none' | 'numeric' | 'decimal';
  label: string;
  labelTooltip?: string;
  labelTooltipPosition?: 'top' | 'left' | 'bottom' | 'right';
  labelTooltipInModal?: boolean;
  leftAddon?: React.ReactNode;
  max?: number;
  min?: number;
  name?: string;
  placeholder?: string;
  required?: boolean;
  rightAddon?: React.ReactNode;
  size?: 's';
  step?: number;
  success?: boolean;
  value?: number | null;
  visuallyEmphasiseRequired?: boolean;
  noSteppers?: boolean;

  onStepUp?: () => void;
  onStepDown?: () => void;
  onChange?: (value: number | null) => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onBlur?: (value: number | null) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  width?: string | number;
  variant?: Variant;
};

export type adjustValueProps = {
  step: number;
  min?: number;
  max?: number;
  shouldIncrement: boolean;
  originalValue: number | null;
};

import { IntlShape } from 'react-intl';

export type Variant = 'normal' | 'quiet';

export type Props = {
  autoFocus?: boolean;
  className?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  error?: string;
  extraInfo?: string;
  /** @deprecated use id instead. */
  fieldId?: string;
  /** @deprecated is now handled internally when error prop is present */
  hasError?: boolean;
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
  leftAddon?: React.ReactNode;
  max?: string | number;
  min?: string | number;
  name?: string;
  placeholder?: string;
  required?: boolean;
  rightAddon?: React.ReactNode;
  size?: 's';
  step?: string | number;
  success?: boolean;
  value?: string | number;
  visuallyEmphasiseRequired?: boolean;
  noSteppers?: boolean;

  onStepUp?: () => void;
  onStepDown?: () => void;
  onChange?: (value: string) => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  width?: string | number;
  variant?: Variant;
};

export type NumberComponent = React.FunctionComponent<Props>;

export type adjustValueProps = {
  step: number;
  min?: number;
  max?: number;
  shouldIncrement: boolean;
  originalValue: number;
  intl: IntlShape;
};

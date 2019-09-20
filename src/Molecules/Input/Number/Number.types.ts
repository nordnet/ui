import { InjectedIntlProps, InjectedIntl } from 'react-intl';

export type Props = {
  /** @deprecated wrap Input in FormField and give that this prop */
  label?: string;
  /** @deprecated wrap Input in FormField and give that this prop */
  hideLabel?: boolean;
  /** @deprecated wrap Input in FormField and give that this prop */
  error?: string;
  /** @deprecated wrap Input in FormField and give that this prop */
  extraInfo?: string;
  /** @deprecated wrap Input in FormField and give that this prop.
   * Also match it to the new id prop of this component. */
  fieldId?: string;
  /** @deprecated wrap Input in FormField and give that this prop */
  fullWidth?: boolean;
  /** @deprecated wrap Input in FormField and give that this prop */
  width?: string | number;

  autoFocus?: boolean;
  className?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  hasError?: boolean;
  id?: string;

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
  max?: string | number;
  min?: string | number;
  name?: string;
  noSteppers?: boolean;
  required?: boolean;
  size?: 's';
  step?: string | number;
  success?: boolean;
  value?: string | number;

  onStepUp?: () => void;
  onStepDown?: () => void;
  onChange?: (value: string) => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
};

export type NumberComponent = React.FunctionComponent<Props & InjectedIntlProps>;

export type adjustValueProps = {
  step: number;
  min?: number;
  max?: number;
  shouldIncrement: boolean;
  originalValue: number;
  intl: InjectedIntl;
};

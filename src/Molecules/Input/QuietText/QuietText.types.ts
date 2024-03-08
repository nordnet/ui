import { BakedInFormFieldProps } from '../../FormField/FormField.types';

type EventProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onMouseEnter?: React.FocusEventHandler<HTMLInputElement>;
  onMouseLeave?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
};

export type Props = {
  id?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  name?: string;
  success?: boolean;
  rightAddon?: React.ReactNode;
  leftAddon?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
  pattern?: string;
  inputMode?: string;
  /**
   * You need to specify width
   * (better in pixels), because
   * that will affect wrapping
   * of the error/info text
   * underneath
   */
  width?: string | number;
  type?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  visuallyEmphasiseRequired?: boolean;
  maxLength?: number;
  readOnly?: boolean;
} & EventProps &
  BakedInFormFieldProps;

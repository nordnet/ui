import { BakedInFormFieldProps } from '../../FormField/FormField.types';
import { Props as QuietTextProps } from '../QuietText/QuietText.types';

type BakedInProps = BakedInFormFieldProps;

type EventProps = {
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onMouseEnter?: React.FocusEventHandler<HTMLInputElement>;
  onMouseLeave?: React.FocusEventHandler<HTMLInputElement>;
};

type NativeProps = {
  autoComplete?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  inputMode?: string;
  maxLength?: number;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  type?: string;
  value?: string;
};

type OwnProps = {
  fullWidth?: boolean;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  size?: 's';
  success?: boolean;
  // /** @default normal */
  // variant?: 'normal' | 'quiet';
  visuallyEmphasiseRequired?: boolean;
  /**
   * number is treated as pixels.
   * Tip: you need to specify width
   * (better in pixels), because
   * that will affect wrapping
   * of the error/info text
   * underneath
   */
  width?: string | number;
};

export type Props =
  | ({
      /** @default normal */
      variant?: 'normal';
    } & BakedInProps &
      EventProps &
      NativeProps &
      OwnProps)
  | ({
      /** @deprecated use Input.QuietText instead */
      variant: 'quiet';
    } & QuietTextProps);

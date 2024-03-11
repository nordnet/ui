import { Props as FormFieldProps } from '../../FormField/FormField.types';

type BakedInProps = Pick<
  FormFieldProps,
  | 'label'
  | 'hideLabel'
  | 'labelTooltip'
  | 'labelTooltipPosition'
  | 'labelTooltipInModal'
  | 'extraInfo'
  | 'error'
>;

type EventProps = {
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKewyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onMouseEnter?: React.FocusEventHandler<HTMLInputElement>;
  onMouseLeave?: React.FocusEventHandler<HTMLInputElement>;
};

type NativeProps = {
  autoComplete?: string;
  autoFocus?: boolean;
  className?: string;
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
  success?: boolean;
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

export type Props = BakedInProps & EventProps & NativeProps & OwnProps;

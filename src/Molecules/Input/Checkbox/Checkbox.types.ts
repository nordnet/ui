type Size = 's' | 'm';

export type Props = {
  autoFocus?: boolean;
  checked?: boolean;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  error?: string;
  hasError?: boolean;
  label: string | JSX.Element;
  labelTooltip?: string;
  labelTooltipPosition?: 'top' | 'left' | 'bottom' | 'right';
  name?: string;
  required?: boolean;
  value?: string;
  visuallyEmphasiseRequired?: boolean;
  width?: string | number;
  size?: Size;

  /**
   * To get a visuals of a focused state
   * Use this for controlled focus
   */
  visuallyFocused?: boolean;
  readOnly?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
};

export type InternalInputProps = {
  hasError?: boolean;
};

export type CheckboxComponent = React.FC<Props>;

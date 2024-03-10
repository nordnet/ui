import { BakedInFormFieldProps } from '../../FormField/FormField.types';

type BwakedInProps = BakedInFormFieldProps;

type NativeProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'autoComplete'
  | 'autoFocus'
  | 'className'
  | 'defaultValue'
  | 'disabled'
  | 'id'
  | 'inputMode'
  | 'maxLength'
  | 'name'
  | 'pattern'
  | 'placeholder'
  | 'readOnly'
  | 'required'
  | 'type'
  | 'value'
>;

type EventProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'onBlur'
  | 'onChange'
  | 'onClick'
  | 'onFocus'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onKeyDown'
  | 'onKeyPress'
  | 'onKeyUp'
>;

type OwnProps = {
  success?: boolean;
  rightAddon?: React.ReactNode;
  leftAddon?: React.ReactNode;
  fullWidth?: boolean;
  visuallyEmphasiseRequired?: boolean;
  /** number is treated as pixels */
  width?: string | number;
};

export type Props = OwnProps & EventProps & BwakedInProps & NativeProps;

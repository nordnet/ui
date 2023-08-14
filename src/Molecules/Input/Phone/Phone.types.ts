export type Variant = 'normal' | 'quiet';
export type Size = Pick<Props, 'size'>;

type DefaultPhoneNumberValue = {
  countryCode: string;
  phoneNumber: string;
};

export type Props = {
  className?: string;
  id?: string;
  /** Label should always be presented - A11y */
  label: string;
  /** But you can hide it visually */
  hideLabel?: boolean;
  labelTooltip?: string;
  labelTooltipPosition?: 'top' | 'left' | 'bottom' | 'right';
  labelTooltipInModal?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  name?: string;
  error?: string;
  success?: boolean;
  extraInfo?: string;
  rightAddon?: React.ReactNode;
  leftAddon?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
  size?: 's';
  /** @default normal */
  variant?: Variant;
  /**
   * You need to specify width
   * (better in pixels), because
   * that will affect wrapping
   * of the error/info text
   * underneath
   */
  width?: string | number;
  type?: string;
  defaultValue?: DefaultPhoneNumberValue;
  required?: boolean;
  maxLength?: number;
  visuallyEmphasiseRequired?: boolean;
  onChange?: (aggregatedValue: string, countryCode?: string, phoneNumber?: string) => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onMouseLeave?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  /**
   * Used to sort the options list so the specified country comes first.
   */
  sortByCountry?: string;
  /**
   * Disables search results via keyboard typing.
   * @default true
   */
  disableSearchComponent?: boolean;
};

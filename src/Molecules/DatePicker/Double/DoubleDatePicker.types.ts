type DoubleDatePickerProps = {
  ariaLabelPrevious?: string;
  ariaLabelNext?: string;
  open?: boolean;
  /**
   * Specifies whether date should be selected while user types without need to submit
   * @default false
   */
  allowDateUpdateOnType?: boolean;
  onChange?: (startDate: Date | null, endDate?: Date | null) => void;
  labelFrom: string;
  labelTo?: string;
  disableDate?: (date: Date) => boolean;
  disabled?: boolean;
  enableDate?: (date: Date) => boolean;
  id: string;
  selectedStartDate?: Date;
  selectedEndDate?: Date;
  inputSize?: 's';
  width?: number | string;
  ref?: React.Ref<HTMLDivElement>;
  yearSelectLength?: number;
  /**
   * Allow a range starting and ending in the same day to be selected
   * @default true
   */
  allowSingleDayRange?: boolean;
  selectMonthLabel?: string;
  selectYearLabel?: string;
};

export type PropsWithoutClearButton = DoubleDatePickerProps & {
  showClearButton?: false;
  clearButtonLabel?: never;
};

export type PropsWithClearButton = DoubleDatePickerProps & {
  showClearButton: true;
  clearButtonLabel: string;
};

export type Props = PropsWithoutClearButton | PropsWithClearButton;

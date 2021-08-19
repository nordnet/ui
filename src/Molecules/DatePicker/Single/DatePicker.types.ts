import { RANGE_DATE_PICKER, REGULAR_DATE_PICKER } from '../shared/constants';

type DatePickerVariant = typeof REGULAR_DATE_PICKER | typeof RANGE_DATE_PICKER;

export type SingleDatePickerProps = {
  ariaLabelPrevious?: string;
  ariaLabelNext?: string;
  open?: boolean;
  allowDateUpdateOnType?: boolean;
  onChange?: (date: Date, endDate?: Date | null) => void;
  onBlur?: (date: Date, endDate?: Date | null) => void;
  label: string;
  disableDate?: (date: Date) => boolean;
  disabled?: boolean;
  enableDate?: (date: Date) => boolean;
  id: string;
  selectedDate?: Date;
  selectedEndDate?: Date;
  inputValue?: string;
  variant?: DatePickerVariant;
  inputSize?: 's';
  width?: number | string;
  ref?: React.Ref<HTMLDivElement>;
  yearSelectLength?: number;
  fullScreenOnMobile?: boolean;
};

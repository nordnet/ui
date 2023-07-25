type BaseProps = {
  id: string;
  enableDate?: (date: Date) => boolean;
  disableDate?: (date: Date) => boolean;
  /**
   * Specifies whether date should be selected while user types without need to submit
   * @default false
   */
  allowDateUpdateOnType?: boolean;
  allowSingleDayRange?: boolean;
  /**
   * Specifies the number of months shown in calendar view
   * @default 1
   */
  noOfMonthsInCalendarView?: number;
};

export type Props = BaseProps & {
  selectedDateProp?: Date;
  selectedEndDateProp?: Date;
  onChange?: (date: Date, endDate?: Date | null) => void;
  onBlur?: (date: Date, endDate?: Date | null) => void;
  isRangePicker?: boolean;
};

export type ClearableProps = BaseProps & {
  selectedDateProp?: Date | undefined;
  onChange?: (date?: Date | undefined) => void;
  onBlur?: (date: Date) => void;
};

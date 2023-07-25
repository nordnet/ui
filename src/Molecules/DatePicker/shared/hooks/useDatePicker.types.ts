export type Props = {
  id: string;
  selectedDateProp?: Date;
  selectedEndDateProp?: Date;
  enableDate?: (date: Date) => boolean;
  disableDate?: (date: Date) => boolean;
  onChange?: (date: Date | undefined, endDate?: Date | null) => void;
  onBlur?: (date: Date, endDate?: Date | null) => void;
  /**
   * Specifies whether date should be selected while user types without need to submit
   * @default false
   */
  allowDateUpdateOnType?: boolean;
  allowControlledDateClearOnType?: boolean;
  allowSingleDayRange?: boolean;
  /**
   * Specifies the number of months shown in calendar view
   * @default 1
   */
  noOfMonthsInCalendarView?: number;
  isRangePicker?: boolean;
};

export type Props = {
  disableDate?: (date: Date) => boolean;
  enableDate?: (date: Date) => boolean;
  locale: string;
  viewedDate: Date;
  onMonthChange: (index: number) => void;
  onClick: (date: Date) => void;
  selectedDate: Date;
  selectedEndDate?: Date;
  fullscreenMode: boolean;
  isDayPicker?: boolean;
};

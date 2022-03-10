import { Locale } from 'date-fns';

export type CalendarDayProps = {
  className?: string;
  date: Date;
  disabled?: boolean;
  enabled?: boolean;
  locale: Locale;
  focused: boolean;
  onClick?: (date: Date) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  onFocus: () => void;
  sameMonth?: boolean;
  selected?: boolean;
  isWithinRange?: boolean;
  isFirstDay?: boolean;
  isLastDay?: boolean;
  withGutter?: boolean;
  fullscreenMode?: boolean;
  isDayPicker?: boolean;
};

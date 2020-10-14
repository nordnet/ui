import Locale from 'date-fns/locale';

export type CalendarDayProps = {
  className?: string;
  date: Date;
  disabled?: boolean;
  enabled?: boolean;
  locale: Locale;
  onClick?: (date: Date) => void;
  sameMonth?: boolean;
  selected?: boolean;
};

export type Props = {
  locale: string;
  disableDate?: (date: Date) => boolean;
  enableDate?: (date: Date) => boolean;
  onClick: (date: Date) => void;
  now: Date;
  selectedDate?: Date;
};

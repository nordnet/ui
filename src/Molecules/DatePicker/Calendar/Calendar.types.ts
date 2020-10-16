export type CalendarDayProps = {
  className?: string | Array<string>;
  date: Date;
  disabled?: boolean;
  enabled?: boolean;
  hover?: boolean;
  locale: any;
  onClick?: (date: Date) => void;
  sameMonth?: boolean;
  selected?: boolean;
};

export type Props = {
  disableDate?: (date: Date) => boolean;
  enableDate?: (date: Date) => boolean;
  locale: string;
  viewedDate: Date;
  onClick: (date: Date) => void;
  selectedDate: Date;
};

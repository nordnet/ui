export type CalendarDayProps = {
  className?: string;
  date: Date;
  onClick?: (date: Date) => void;
  sameMonth?: Boolean;
  selected?: boolean;
};

export type Props = {
  locale: string;
  onClick: (date: Date) => void;
  now: Date;
  selectedDate?: Date;
};

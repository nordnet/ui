export type Props = {
  locale: string;
  now: Date;
  onMonthChange: (index: number) => void;
  onYearChange: (year: number) => void;
};

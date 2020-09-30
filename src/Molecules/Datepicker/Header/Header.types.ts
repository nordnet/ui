export type Props = {
  id: string;
  locale: string;
  now: Date;
  onMonthChange: (index: number) => void;
  onYearChange: (year: number) => void;
};
